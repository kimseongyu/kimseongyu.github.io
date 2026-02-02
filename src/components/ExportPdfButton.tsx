"use client";

import { useCallback, useState } from "react";

const PDF_EXPORT_AREA_ID = "pdf-export-area";

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_TOP_MM = 20;
const MARGIN_BOTTOM_MM = 20;
const MARGIN_LEFT_MM = 20;
const MARGIN_RIGHT_MM = 20;
const CONTENT_HEIGHT_MM = A4_HEIGHT_MM - MARGIN_TOP_MM - MARGIN_BOTTOM_MM;

interface LinkInfo {
  href: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

function prepareElementForPdf(element: HTMLElement): HTMLElement {
  return element.cloneNode(true) as HTMLElement;
}

function collectLinks(chunk: HTMLElement): LinkInfo[] {
  const links: LinkInfo[] = [];
  const anchors = chunk.querySelectorAll("a[href]");
  const chunkRect = chunk.getBoundingClientRect();

  anchors.forEach((anchor) => {
    const a = anchor as HTMLAnchorElement;
    const href = a.href || a.getAttribute("href");
    if (!href || href === "#") return;

    const rect = a.getBoundingClientRect();
    links.push({
      href,
      x: rect.left - chunkRect.left,
      y: rect.top - chunkRect.top,
      width: rect.width,
      height: rect.height,
    });
  });

  return links;
}

function addLinkAnnotations(
  pdf: {
    link: (
      x: number,
      y: number,
      w: number,
      h: number,
      opts: { url: string },
    ) => void;
  },
  links: LinkInfo[],
  chunkWidth: number,
  chunkHeight: number,
  imgX: number,
  imgY: number,
  imgWidth: number,
  imgHeight: number,
) {
  if (links.length === 0) return;

  const scaleX = imgWidth / chunkWidth;
  const scaleY = imgHeight / chunkHeight;

  links.forEach((link) => {
    const pdfX = imgX + link.x * scaleX;
    const pdfY = imgY + link.y * scaleY;
    const pdfW = link.width * scaleX;
    const pdfH = link.height * scaleY;

    if (pdfW > 0 && pdfH > 0) {
      pdf.link(pdfX, pdfY, pdfW, pdfH, { url: link.href });
    }
  });
}

function extractChunks(container: HTMLElement): HTMLElement[] {
  const chunks: HTMLElement[] = [];
  const pageContainer =
    container.querySelector("[class*='max-w-4xl']") ?? container;
  const header = pageContainer.querySelector("header");
  const main = pageContainer.querySelector("main");

  if (!main) return chunks;

  // 1. 헤더 (이름, 타이틀, 링크)
  if (header) {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "width: 210mm; padding: 0;";
    wrapper.appendChild(header.cloneNode(true));
    chunks.push(wrapper);
  }

  // 2. 각 섹션을 아이템 단위로 분리
  const sections = main.querySelectorAll(":scope > section");
  sections.forEach((section) => {
    const sectionEl = section as HTMLElement;
    const title = sectionEl.querySelector(":scope > h2");
    const contentDiv = sectionEl.querySelector(":scope > div"); // itemStack 또는 단일 컨텐츠

    if (!contentDiv) return;

    const items = contentDiv.querySelectorAll(":scope > div");
    const hasMultipleItems = items.length > 1;

    if (hasMultipleItems) {
      // Projects, Open Source 등: 섹션 제목 + 첫 아이템, 이후 각 아이템
      items.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "width: 210mm; padding: 0;";
        wrapper.className = "space-y-5";
        if (index === 0 && title) {
          const titleClone = title.cloneNode(true) as HTMLElement;
          wrapper.appendChild(titleClone);
        }
        wrapper.appendChild(item.cloneNode(true));
        chunks.push(wrapper);
      });
    } else {
      // Introduction, Experience 등: 섹션 전체
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "width: 210mm; padding: 0;";
      wrapper.appendChild(sectionEl.cloneNode(true));
      chunks.push(wrapper);
    }
  });

  return chunks;
}

export const ExportPdfButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPdf = useCallback(async () => {
    const element = document.getElementById(PDF_EXPORT_AREA_ID);
    if (!element) return;

    setIsExporting(true);
    const html2canvas = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");
    const clone = prepareElementForPdf(element);
    const chunks = extractChunks(clone);

    const wrapper = document.createElement("div");
    wrapper.style.cssText =
      "position: fixed; left: -9999px; top: 0; width: 210mm; min-height: 100%; background: white; font-family: inherit;";
    document.body.appendChild(wrapper);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      let currentY = MARGIN_TOP_MM;

      for (const chunk of chunks) {
        wrapper.innerHTML = "";
        wrapper.appendChild(chunk);

        const chunkWidth = chunk.offsetWidth;
        const chunkHeight = chunk.offsetHeight;
        const links = collectLinks(chunk);

        const canvas = await html2canvas(chunk, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.98);
        const imgWidth = A4_WIDTH_MM - MARGIN_LEFT_MM - MARGIN_RIGHT_MM;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgX = MARGIN_LEFT_MM;

        if (imgHeight <= CONTENT_HEIGHT_MM) {
          // 청크가 한 페이지에 fit
          const spaceOnPage = A4_HEIGHT_MM - MARGIN_BOTTOM_MM - currentY;
          if (imgHeight > spaceOnPage) {
            pdf.addPage();
            currentY = MARGIN_TOP_MM;
          }
          pdf.addImage(imgData, "JPEG", imgX, currentY, imgWidth, imgHeight);
          addLinkAnnotations(
            pdf,
            links,
            chunkWidth,
            chunkHeight,
            imgX,
            currentY,
            imgWidth,
            imgHeight,
          );
          currentY += imgHeight + 8; // 청크 간격
        } else {
          // 청크가 한 페이지보다 김 → 이미지 분할하여 여러 페이지에 출력
          const scalePxToMm = imgHeight / chunkHeight;
          let heightLeft = imgHeight;
          let srcY = 0;
          let chunkOffsetMm = 0; // 청크 내 현재 오프셋 (mm)

          // 첫 페이지: 남은 공간만큼
          const firstPageSpace = A4_HEIGHT_MM - MARGIN_BOTTOM_MM - currentY;
          if (firstPageSpace > 0) {
            const firstPartHeight = Math.min(firstPageSpace, imgHeight);
            const scale = canvas.height / imgHeight;
            const srcHeightPx = firstPartHeight * scale;
            const croppedCanvas = document.createElement("canvas");
            croppedCanvas.width = canvas.width;
            croppedCanvas.height = srcHeightPx;
            const ctx = croppedCanvas.getContext("2d")!;
            ctx.drawImage(
              canvas,
              0,
              0,
              canvas.width,
              srcHeightPx,
              0,
              0,
              canvas.width,
              srcHeightPx,
            );
            const croppedData = croppedCanvas.toDataURL("image/jpeg", 0.98);
            const croppedImgHeight = (srcHeightPx * imgWidth) / canvas.width;
            pdf.addImage(
              croppedData,
              "JPEG",
              imgX,
              currentY,
              imgWidth,
              croppedImgHeight,
            );
            const chunkTopPx = chunkOffsetMm / scalePxToMm;
            const chunkBottomPx =
              (chunkOffsetMm + firstPartHeight) / scalePxToMm;
            const visibleLinks = links
              .filter((l) => l.y + l.height > chunkTopPx && l.y < chunkBottomPx)
              .map((l) => ({
                ...l,
                y: Math.max(0, l.y - chunkTopPx),
                height:
                  Math.min(l.y + l.height, chunkBottomPx) -
                  Math.max(l.y, chunkTopPx),
              }));
            addLinkAnnotations(
              pdf,
              visibleLinks,
              chunkWidth,
              chunkBottomPx - chunkTopPx,
              imgX,
              currentY,
              imgWidth,
              firstPartHeight,
            );
            heightLeft -= firstPartHeight;
            srcY = srcHeightPx;
            chunkOffsetMm += firstPartHeight;
          }
          pdf.addPage();
          currentY = MARGIN_TOP_MM;

          // 나머지 페이지들
          while (heightLeft > 0) {
            const partHeight = Math.min(CONTENT_HEIGHT_MM, heightLeft);
            const scale = canvas.height / imgHeight;
            const srcHeightPx = partHeight * scale;
            const croppedCanvas = document.createElement("canvas");
            croppedCanvas.width = canvas.width;
            croppedCanvas.height = srcHeightPx;
            const ctx = croppedCanvas.getContext("2d")!;
            ctx.drawImage(
              canvas,
              0,
              srcY,
              canvas.width,
              srcHeightPx,
              0,
              0,
              canvas.width,
              srcHeightPx,
            );
            const croppedData = croppedCanvas.toDataURL("image/jpeg", 0.98);
            const croppedImgHeight = (srcHeightPx * imgWidth) / canvas.width;
            pdf.addImage(
              croppedData,
              "JPEG",
              imgX,
              currentY,
              imgWidth,
              croppedImgHeight,
            );
            const chunkTopPx = chunkOffsetMm / scalePxToMm;
            const chunkBottomPx = (chunkOffsetMm + partHeight) / scalePxToMm;
            const visibleLinks = links
              .filter((l) => l.y + l.height > chunkTopPx && l.y < chunkBottomPx)
              .map((l) => ({
                ...l,
                y: Math.max(0, l.y - chunkTopPx),
                height:
                  Math.min(l.height, l.y + l.height - chunkTopPx) -
                  Math.max(0, l.y - chunkTopPx),
              }));
            addLinkAnnotations(
              pdf,
              visibleLinks,
              chunkWidth,
              chunkHeight,
              imgX,
              currentY,
              imgWidth,
              partHeight,
            );
            heightLeft -= partHeight;
            srcY += srcHeightPx;
            chunkOffsetMm += partHeight;
            if (heightLeft > 0) {
              pdf.addPage();
              currentY = MARGIN_TOP_MM;
            } else {
              currentY += croppedImgHeight + 8;
            }
          }
        }
      }

      pdf.save("김선규_이력서.pdf");
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      if (wrapper.parentNode) {
        document.body.removeChild(wrapper);
      }
      setIsExporting(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleExportPdf}
      disabled={isExporting}
      className="no-print fixed top-20 right-6 z-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="이력서 PDF 다운로드"
    >
      {isExporting ? "PDF 생성 중..." : "이력서 PDF 다운로드"}
    </button>
  );
};
