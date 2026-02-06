import Link from "next/link";
import { ExportPdfButton } from "@/components/ExportPdfButton";

const styles = {
  // Layout
  pageContainer: "font-sans max-w-4xl mx-auto",
  mainContent: "space-y-10",

  // Header
  header: "border-b-2 border-gray-800 pb-8 mb-8",
  headerTitle: "text-5xl font-bold text-gray-900 mb-2",
  headerSubtitle: "text-2xl text-gray-600 font-medium mb-6",
  headerLinks: "flex flex-wrap gap-4 text-sm text-gray-600",
  headerLink: "hover:text-blue-600 flex items-center gap-1 transition-colors",
  headerLinkLabel: "font-semibold",
  headerSeparator: "text-gray-300",

  // Section
  sectionTitle:
    "text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4",
  itemStack: "space-y-5",
  itemHeader: "flex justify-between items-baseline mb-1",
  itemTitle: "font-bold text-gray-900",
  itemDate: "text-sm text-gray-500 tabular-nums shrink-0 ml-4",
  itemMeta: "text-gray-600 text-sm mb-2",
  itemLink:
    "text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap",
  itemLabel: "text-gray-600 text-sm font-medium mt-2 mb-1",
  descriptionBox: "text-gray-700 text-sm bg-gray-50 p-3 rounded-md",
  bulletBox:
    "list-disc list-outside pl-7 text-gray-700 text-sm space-y-1 bg-gray-50 p-3 rounded-md",
  bulletNested: "list-[circle] list-outside pl-6 mt-1 space-y-1",

  // Introduction
  introBox: "border-l-4 border-gray-300 pl-5 py-1 bg-gray-50/50 rounded-r-md",
  introTitle: "text-gray-800 leading-relaxed text-base font-medium mb-3",
  introBody: "text-gray-700 leading-relaxed text-sm",

  // Certificate (inline layout)
  certRow: "flex justify-between items-start",
  certLeft: "flex-1 pr-4",
  certTitle: "font-semibold text-gray-900 block sm:inline",
  certMeta: "text-gray-600 text-sm sm:ml-2 block sm:inline",

  // Education
  eduStack: "space-y-4",
  eduRow: "flex flex-col sm:flex-row sm:justify-between sm:items-center",
  eduGpaBadge:
    "mt-2 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600",
};

export default function Home() {
  return (
    <>
      <ExportPdfButton />
      <div id="pdf-export-area" className="a4-container">
        <div className={styles.pageContainer}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.headerTitle}>김선규</h1>
            <p className={styles.headerSubtitle}>Frontend Developer</p>
            <div className={styles.headerLinks}>
              <Link
                href="https://github.com/kimseongyu"
                target="_blank"
                className={styles.headerLink}
              >
                <span className={styles.headerLinkLabel}>GitHub</span>
              </Link>
              <span className={styles.headerSeparator}>|</span>
              <Link
                href="https://kimseongyu.github.io/"
                target="_blank"
                className={styles.headerLink}
              >
                <span className={styles.headerLinkLabel}>Blog</span>
              </Link>
              <span className={styles.headerSeparator}>|</span>
              <Link
                href="https://www.linkedin.com/in/kimseongyu/"
                target="_blank"
                className={styles.headerLink}
              >
                <span className={styles.headerLinkLabel}>LinkedIn</span>
              </Link>
              <span className={styles.headerSeparator}>|</span>
              <Link
                href="mailto:ksk8562878@gmail.com"
                className={styles.headerLink}
              >
                <span className={styles.headerLinkLabel}>Email:</span>{" "}
                ksk8562878@gmail.com
              </Link>
            </div>
          </header>

          <main className={styles.mainContent}>
            {/* Introduction */}
            <section>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introBox}>
                <p className={styles.introTitle}>
                  안녕하세요. 프론트엔드 개발자 김선규입니다.
                </p>
                <p className={styles.introBody}>
                  성능 최적화와 오픈소스 기여를 통해 사용자 경험 향상을 목표로
                  하고 있습니다. 단순히 기능을 구현하는 것을 넘어, 프레임워크의
                  내부 동작 원리를 파악하여 최적의 사용자 경험을 설계하는 데
                  강점이 있습니다. Meta 오픈소스 프로젝트에 기여하며 로직을
                  개선하고 협업 경험을 쌓고 있습니다.
                </p>
              </div>
            </section>

            {/* Open Source */}
            <section>
              <h2 className={styles.sectionTitle}>Open Source</h2>
              <div className={styles.itemStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      Markdown 포맷 변환 로직 개선을 위한 CommonMark Delimiter
                      Algorithm 도입
                    </h3>
                    <Link
                      href="https://github.com/facebook/lexical/pull/8093"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      PR &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>facebook/lexical</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      Markdown을 텍스트로 변환 시, 정규표현식 기반의 파싱 로직의
                      한계로 인해 중첩된 강조 구문(Bold/Italic)이 올바르게
                      변환되지 않는 이슈를 해결했습니다.
                    </li>
                    <li>
                      CommonMark Spec을 분석하여, 강조 적용 여부를 결정하는
                      Delimiter Run 스캔과 스택 기반의 매칭 로직을 구현한
                      Delimiter Algorithm을 도입하여 해결했습니다.
                    </li>
                    <li>
                      기존 로직을 전면 교체하여 표준 스펙 준수율을 높이고 파싱
                      정확도를 개선했습니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      Markdown 직렬화 과정의 포맷팅 버그 수정
                    </h3>
                    <Link
                      href="https://github.com/facebook/lexical/pull/8085"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      PR &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>facebook/lexical</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      Markdown 직렬화 과정에서 최적화 로직으로 인해 Link와 포맷
                      태그가 충돌하는 버그를 수정했습니다.
                    </li>
                    <li>
                      불필요하게 복잡했던 형제 노드 탐색 로직을 직계 형제
                      노드까지로 단순화했습니다.
                    </li>
                    <li>
                      엣지 케이스 테스트 통과와 디버깅 결과를 통해 로직 단순화의
                      타당성을 입증해 PR이 머지되었습니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      CSS 컴파일 과정의 단위 최적화 버그 수정
                    </h3>
                    <Link
                      href="https://github.com/facebook/stylex/pull/1435"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      PR &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>facebook/stylex</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      컴파일러 최적화 단계에서 값이 0인 CSS 변수가 단위가
                      누락되어 calc 연산이 실패하는 문제를 해결했습니다.
                    </li>
                    <li>
                      Babel Plugin의 AST 변환 로직을 분석하여, CSS 변수에는 단위
                      를 보존하도록 예외 처리를 추가했습니다.
                    </li>
                    <li>
                      스타일 연산 오류를 방지하고, 레이아웃 안정성을
                      확보했습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className={styles.sectionTitle}>Projects</h2>

              <div className={styles.itemStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>AVALON</h3>
                    <Link
                      href="https://github.com/SKALA-AXcalibur/AVALON"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      Repository &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>
                    TypeScript, Next.js, React, Zustand, Tailwind CSS, Git
                  </p>
                  <p className={styles.itemLabel}>프로젝트 소개</p>
                  <p className={styles.descriptionBox}>
                    요구사항·설계 문서만으로 테스트 대상을 식별하고 시나리오를
                    작성할 때, 생략이나 오류가 발생하기 쉽고 품질 확보에 한계가
                    있습니다. 개발 문서를 분석하여 테스트 대상 함수를 식별하고,
                    AI를 활용해 테스트 시나리오를 자동 생성하는 도구를 개발해
                    품질 확보를 이루었습니다.
                  </p>
                  <p className={styles.itemLabel}>성과 및 기여</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      Next.js 기반 사용자 경험 개선
                      <ul className={styles.bulletNested}>
                        <li>
                          AI 시나리오/테스트케이스 생성 시 대기 시간이 길어
                          사용자 경험이 저하되는 이슈가 있었습니다.
                        </li>
                        <li>
                          Next.js SSR과 CSR을 혼합한 하이브리드 렌더링을 적용해,
                          대기 중에도 UI를 먼저 보여주어 사용자 경험을
                          개선했습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Zustand 기반의 전역 상태 관리 및 데이터 정합성 유지
                      <ul className={styles.bulletNested}>
                        <li>
                          프로젝트·시나리오·테스트케이스 데이터가 페이지별로
                          분산되어 전환 시 API 재요청과 데이터 불일치가
                          발생했습니다.
                        </li>
                        <li>
                          Zustand로 전역 상태를 관리하고, 페이지 전환 시 캐시된
                          값을 우선 사용해 데이터 불일치를 방지했습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mock 환경 구축을 통한 프론트-백엔드 병렬 개발
                      <ul className={styles.bulletNested}>
                        <li>
                          백엔드 API 완성 전까지 프론트엔드 개발이 지연되고 연동
                          시점에 인터페이스 불일치가 발견되는 문제가 있었습니다.
                        </li>
                        <li>
                          API 명세를 기반으로 json-server로 Mock API 서버를
                          구축하여, 프론트엔드가 독립적으로 개발·테스트할 수
                          있도록 했습니다.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      3D Fireworks Simulation
                    </h3>
                    <Link
                      href="https://github.com/kimseongyu/3d-fireworks-simulation"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      Repository &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>
                    TypeScript, Next.js, React, Three.js, Zustand, Rust/Wasm
                  </p>
                  <p className={styles.itemLabel}>프로젝트 소개</p>
                  <p className={styles.descriptionBox}>
                    웹 브라우저에서 3D 공간에 불꽃놀이를 배치하고, 저장된
                    불꽃놀이를 발사해 감상할 수 있는 실시간 시뮬레이션입니다.
                    Three.js와 Rust/Wasm을 활용해 수천 개의 3D 불꽃놀이를 웹
                    브라우저에서 렌더링하도록 구현했습니다.
                  </p>
                  <p className={styles.itemLabel}>성과 및 기여</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      Three.js 불꽃놀이 구현
                      <ul className={styles.bulletNested}>
                        <li>
                          Three.js로 6가지 타입의 불꽃놀이 렌더링을 구현했고,
                          Stats.js로 모니터링 환경을 구축해 성능을 측정했습니다.
                        </li>
                        <li>
                          500개 입자를 InstancedMesh로 통합해 단일 Draw Call로
                          렌더링함으로써, 3fps에서 58fps로 약 19배 성능을
                          개선했습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Rust/Wasm 기반 물리 연산 최적화
                      <ul className={styles.bulletNested}>
                        <li>
                          불꽃놀이 발사와 입자 확산의 행렬 연산을 Rust/Wasm
                          모듈로 분리해 구현했습니다.
                        </li>
                        <li>
                          JS/WASM 전환이 가능한 듀얼 모드를 구성했고, 3000개
                          동시 발사 환경에서 JS 대비 약 1.8배 성능 향상을
                          달성했습니다.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>BinAIDA</h3>
                    <Link
                      href="https://www.canva.com/design/DAG_5nMZ1gA/4Ix0M4ACjnphyR3h6JdjJw/view?utm_content=DAG_5nMZ1gA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4053f5bbf0"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      Link &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>C, C++, LLVM, LLM</p>
                  <p className={styles.itemLabel}>프로젝트 소개</p>
                  <p className={styles.descriptionBox}>
                    바이너리 리프터가 컴파일 과정에서의 정보 손실로 인한
                    바이너리 파일을 고수준 코드 복원의 한계를, LLM(BERT)으로
                    보완하여 정밀도를 높이는 분석 도구를 개발했습니다. 이를 통해
                    개발자가 바이너리를 더 정확히 이해·분석할 수 있는 환경을
                    구축했습니다.
                  </p>
                  <p className={styles.itemLabel}>성과 및 기여</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      바이너리 리프터 분석 및 문제점 탐색
                      <ul className={styles.bulletNested}>
                        <li>
                          210개의 컴파일러 테스트를 기반으로 오픈소스 바이너리
                          리프터 4종의 정밀도를 평가했습니다.
                        </li>
                        <li>
                          통과율 93.6%로 가장 우수한 McSema를 AI 적용 대상
                          바이너리 리프터로 선정했습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      BERT 모델 학습용 데이터셋 구축
                      <ul className={styles.bulletNested}>
                        <li>
                          POJ-104 데이터셋에 커스텀 LLVM-Pass를 적용하여 52,000
                          개의 소스-바이너리 쌍을 자동으로 생성하는 파이프라인을
                          구축했습니다.
                        </li>
                        <li>
                          학습 결과 Validation Loss 0.40 수준의 안정적인 모델을
                          구축했습니다.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>Precise Leak Sanitizer</h3>
                    <Link
                      href="https://github.com/hygoni/precise-leak-sanitizer"
                      target="_blank"
                      className={styles.itemLink}
                    >
                      Repository &rarr;
                    </Link>
                  </div>
                  <p className={styles.itemMeta}>C, C++, LLVM, Git</p>
                  <p className={styles.itemLabel}>프로젝트 소개</p>
                  <p className={styles.descriptionBox}>
                    기존 메모리 누수 탐지 도구는 누수 발생 시 할당 시점만
                    출력해, 실제 누수 발생 지점을 특정하기 어려웠습니다. 이를
                    개선하기 위해 누수 발생 지점을 정확히 탐지하는 도구를
                    개발했습니다.
                  </p>
                  <p className={styles.itemLabel}>성과 및 기여</p>
                  <ul className={styles.bulletBox}>
                    <li>
                      오픈소스 LLVM-Project의 Sanitizer 모듈 기반의 구현
                      <ul className={styles.bulletNested}>
                        <li>
                          Reference Counting 기법을 적용한 런타임 라이브러리를
                          개발하여 메모리 할당 및 해제 시 메모리 주소의 참조
                          횟수를 추적했습니다.
                        </li>
                        <li>
                          메모리 누수 발생 시 해당 지점을 출력하는 Stack Trace
                          기능을 구현해 사용자가 정확한 문제 지점을 파악할 수
                          있게 했습니다.
                        </li>
                        <li>
                          메모리 오버헤드를 기존 도구 대비 27배에서 1.5배,
                          런타임 오버헤드를 400배 이상에서 16배로
                          최적화했습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      메모리 누수 탐지 정확도 테스트
                      <ul className={styles.bulletNested}>
                        <li>
                          메모리 누수 발생 위치를 정확히 특정하는 테스트
                          케이스가 없어 검증이 어려웠습니다.
                        </li>
                        <li>
                          LLVM Integrated Tester로 기존 테스트를 정제해 17개의
                          테스트 케이스를 생성하고, 15개를 통과시켜 도구의 높은
                          정확도를 입증했습니다.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.itemStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>학부 연구생</h3>
                    <span className={styles.itemDate}>2023.03 - 2023.12</span>
                  </div>
                  <p className={styles.itemMeta}>
                    소프트웨어 분석 및 테스팅 연구실
                  </p>
                  <p className={styles.descriptionBox}>
                    학부 연구생 프로젝트로 &quot;BinQL: 바이너리 파일 내
                    Indirect Jump 주소 연산 도구&quot;를 개발했습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Certificates & Completion */}
            <section>
              <h2 className={styles.sectionTitle}>Certificates & Completion</h2>
              <div className={styles.itemStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      IITP Korean Software Square Winter 2024 Program
                    </h3>
                    <span className={styles.itemDate}>2024.01 - 2024.02</span>
                  </div>
                  <p className={styles.itemMeta}>Purdue University(USA)</p>
                  <p className={styles.descriptionBox}>
                    미국 해외 연수 과정에서 &quot;PLsan: 소스 코드 내 메모리
                    누수 발생 지점 탐지 도구&quot;를 개발했습니다.
                  </p>
                </div>
                <div className={styles.certRow}>
                  <div className={styles.certLeft}>
                    <span className={styles.certTitle}>SQLD</span>
                    <span className={styles.certMeta}>| 한국데이터진흥원</span>
                  </div>
                  <span className={styles.itemDate}>2023.07</span>
                </div>
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className={styles.sectionTitle}>Awards</h2>
              <div className={styles.itemStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      2024 CNU SW/AI Project Fair 우수상
                    </h3>
                    <span className={styles.itemDate}>2024.06</span>
                  </div>
                  <p className={styles.itemMeta}>
                    Chungnam National University
                  </p>
                  <p className={styles.descriptionBox}>
                    학과 프로젝트 경진대회에서 &quot;BinAIDA: AI를 활용한
                    바이너리 리프터 성능 향상&quot;을 주제로 우수상을
                    받았습니다.
                  </p>
                </div>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      2024 CNU SW/AI Project Fair DevDay 코딩경진대회 금상
                    </h3>
                    <span className={styles.itemDate}>2024.06</span>
                  </div>
                  <p className={styles.itemMeta}>
                    Chungnam National University
                  </p>
                  <p className={styles.descriptionBox}>
                    교내 코딩경진대회에서 금상(3위)을 수상했습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Education */}
            <section>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.eduStack}>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      Chungnam National University
                    </h3>
                    <span className={styles.itemDate}>2019.03 - 2025.02</span>
                  </div>
                  <div className={styles.eduRow}>
                    <p className={styles.itemMeta}>
                      Computer Science and Engineering
                    </p>
                    <div className={styles.eduGpaBadge}>
                      GPA: 3.83 / 4.5 (Major: 3.97 / 4.5)
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      SKALA: SK AI Leadership Academy
                    </h3>
                    <span className={styles.itemDate}>2025.02 - 2025.07</span>
                  </div>
                  <p className={styles.itemMeta}>SK AX</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
