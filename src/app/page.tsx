import Link from "next/link";

const styles = {
  sectionTitle:
    "text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4",
  itemStack: "space-y-5",
  itemHeader: "flex justify-between items-baseline mb-1",
  itemTitle: "font-bold text-gray-900",
  itemDate: "text-sm text-gray-500 tabular-nums shrink-0 ml-4",
  itemMeta: "text-gray-600 text-sm mb-2",
  descriptionBox: "text-gray-700 text-sm bg-gray-50 p-3 rounded-md",
  bulletBox:
    "list-disc list-outside pl-7 text-gray-700 text-sm space-y-1 bg-gray-50 p-3 rounded-md",
};

export default function Home() {
  return (
    <div className="a4-container">
      <div className="font-sans max-w-4xl mx-auto">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-8 mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">김선규</h1>
          <p className="text-2xl text-gray-600 font-medium mb-6">
            Frontend Developer
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link
              href="https://github.com/kimseongyu"
              target="_blank"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span className="font-semibold">GitHub</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="https://www.linkedin.com/in/kimseongyu/"
              target="_blank"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span className="font-semibold">LinkedIn</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="mailto:ksk8562878@gmail.com"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span className="font-semibold">Email:</span> ksk8562878@gmail.com
            </Link>
          </div>
        </header>

        <main className="space-y-10">
          {/* Introduction */}
          <section>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <div className="border-l-4 border-gray-300 pl-5 py-1 bg-gray-50/50 rounded-r-md">
              <p className="text-gray-800 leading-relaxed text-base font-medium mb-3">
                안녕하세요. 프론트엔드 개발자 김선규입니다.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                단순히 화면을 구현하는 것을 넘어, 웹 렌더링과 성능 최적화를 통해
                사용자 경험을 개선하는 데 관심을 가지고 있습니다.
                Three.js·Rust/Wasm을 활용한 렌더링 최적화와 오픈소스 활용 및
                기여 경험을 바탕으로, 기술의 깊이와 사용자 가치를 고민합니다.
              </p>
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
                  >
                    Repository &rarr;
                  </Link>
                </div>
                <p className={styles.itemMeta}>
                  TypeScript, Next.js, React, Zustand, Tailwind CSS, Git
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  프로젝트 소개
                </p>
                <p className={styles.descriptionBox}>
                  요구사항·설계 문서만으로 테스트 대상을 식별하고 시나리오를
                  작성할 때, 생략이나 오류가 발생하기 쉽고 품질 확보에 한계가
                  있습니다. 개발 문서를 분석하여 테스트 대상 함수를 식별하고,
                  AI를 활용해 테스트 시나리오를 자동 생성하는 도구를 개발해 품질
                  확보를 가능하도록 했습니다.
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  성과 및 기여
                </p>
                <ul className={styles.bulletBox}>
                  <li>
                    Next.js 기반 사용자 경험 개선
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        AI가 시나리오/테스트케이스를 생성하는 동안의 대기로 인한
                        사용자 경험 저하를 줄이기 위해, Next.js의 SSR과 CSR을
                        혼합한 하이브리드 렌더링을 적용했습니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Zustand 기반의 전역 상태 관리 및 데이터 정합성 유지
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        프로젝트·시나리오·테스트케이스 데이터를 Zustand로 전역
                        관리해, 페이지 전환 시 불필요한 API 재요청을 줄이고
                        데이터 정합성을 유지했습니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Mock 환경 구축을 통한 프론트-백엔드 병렬 개발
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        API 명세를 기반으로 json-server를 활용한 Mock API 서버를
                        구축했습니다.
                      </li>
                      <li>
                        백엔드 개발 완료 전 프론트엔드를 독립적으로
                        개발·테스트하여 개발 기간 단축 및 API 인터페이스 검증에
                        활용했습니다.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>3D Fireworks Simulation</h3>
                  <Link
                    href="https://github.com/kimseongyu/3d-fireworks-simulation"
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
                  >
                    Repository &rarr;
                  </Link>
                </div>
                <p className={styles.itemMeta}>
                  TypeScript, Next.js, React, Three.js, Zustand, Rust/Wasm
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  프로젝트 소개
                </p>
                <p className={styles.descriptionBox}>
                  웹 브라우저에서 3D 공간에 불꽃놀이를 배치하고, 저장된
                  불꽃놀이를 발사해 감상할 수 있는 실시간 시뮬레이션입니다.
                  Three.js와 Rust/Wasm을 활용해 수천 개의 3D 불꽃놀이를 웹
                  브라우저에서 렌더링할 수 있도록 구현했습니다.
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  성과 및 기여
                </p>
                <ul className={styles.bulletBox}>
                  <li>
                    Three.js 불꽃놀이 구현
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        Three.js로 6가지 타입의 불꽃놀이 렌더링을 구현하였고,
                        Stats.js를 통한 모니터링 환경을 구축하여 성능 측정을
                        진행했습니다.
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
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        불꽃놀이 발사와 입자 확산의 행렬 연산을 Rust/Wasm 모듈로
                        분리해 구현하였습니다.
                      </li>
                      <li>
                        JS/WASM 전환이 가능한 듀얼 모드를 구성했으며, 3000개
                        동시 발사 환경에서 JS대비 약 1.8배의 성능 향상을
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
                  >
                    Link &rarr;
                  </Link>
                </div>
                <p className={styles.itemMeta}>C, C++, LLVM, LLM</p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  프로젝트 소개
                </p>
                <p className={styles.descriptionBox}>
                  바이너리 리프터가 컴파일 과정에서의 정보 손실로 인한 바이너리
                  파일을 고수준 코드 복원의 한계를, LLM(BERT)으로 보완하여
                  정밀도를 높이는 분석 도구를 개발했습니다. 이를 통해, 개발자가
                  바이너리를 더 정확하게 이해하고 분석할 수 있는 환경을
                  구축했습니다.
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  성과 및 기여
                </p>
                <ul className={styles.bulletBox}>
                  <li>
                    바이너리 리프터 분석 및 문제점 탐색
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        210개의 컴파일러 테스트를 기반으로 오픈소스 바이너리
                        리프터 4종의 정밀도를 평가했습니다.
                      </li>
                      <li>
                        통과율 93.6%로 가장 우수한 McSema를 AI를 적용하기 위한
                        바이너리 리프터로 선정했습니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    BERT 모델 학습용 데이터셋 구축
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
                  >
                    Repository &rarr;
                  </Link>
                </div>
                <p className={styles.itemMeta}>C, C++, LLVM, Git</p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  프로젝트 소개
                </p>
                <p className={styles.descriptionBox}>
                  기존의 메모리 누수 탐지 도구들은 메모리 누수가 발생했을 때,
                  소스 코드에서 누수가 발생한 영역을 할당했던 시점을 사용자에게
                  출력합니다. 어디서 메모리 누수 발생 지점을 정확히 특정하는
                  것은 개발자 경험 향상에 중요한 요소로, 이를 개선하기 위해
                  메모리 누수 발생 지점 탐지 도구를 개발했습니다.
                </p>
                <p className="text-gray-600 text-sm font-medium mt-2 mb-1">
                  성과 및 기여
                </p>
                <ul className={styles.bulletBox}>
                  <li>
                    오픈소스 LLVM-Project의 Sanitizer 모듈 기반의 구현
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        Reference Counting 기법을 적용한 런타임 라이브러리를
                        개발하여 메모리 할당 및 해제 시 메모리 주소의 참조
                        횟수를 추적했습니다.
                      </li>
                      <li>
                        메모리 누수 발생 시 해당 지점을 출력하는 Stack Trace
                        기능을 구현하여 사용자가 정확한 문제 지점을 파악할 수
                        있도록 했습니다.
                      </li>
                      <li>
                        메모리 오버헤드를 기존 도구 대비 27배에서 1.5배, 런타임
                        오버헤드를 400배이상에서 16배로 최적화를 진행했습니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    메모리 누수 탐지 정확도 테스트
                    <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                      <li>
                        메모리 누수가 발생하는 위치를 정확히 특정하는 테스트
                        케이스가 존재하지 않는 문제들이 존재했습니다.
                      </li>
                      <li>
                        LLVM Integrated Tester를 활용하여 기존 테스트를 정제하여
                        17개의 테스트 케이스를 생성하고, 15개를 통과시켜 도구의
                        높은 정확도를 입증했습니다.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Open Source */}
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
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
                    엣지 케이스 테스트를 통과와 디버깅 결과를 통해, 로직
                    단순화의 타당성을 입증하여 PR이 머지되었습니다.
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
                    className="text-sm text-blue-600 hover:underline shrink-0 ml-4 whitespace-nowrap"
                  >
                    PR &rarr;
                  </Link>
                </div>
                <p className={styles.itemMeta}>facebook/stylex</p>
                <ul className={styles.bulletBox}>
                  <li>
                    컴파일러 최적화 단계에서 값이 0인 CSS 변수가 단위가 누락되어
                    calc 연산이 실패하는 문제를 해결했습니다.
                  </li>
                  <li>
                    Babel Plugin의 AST 변환 로직을 분석하여, CSS 변수에는 단위
                    를 보존하도록 예외 처리를 추가했습니다.
                  </li>
                  <li>
                    스타일 연산 오류를 방지하고, 레이아웃 안정성을 확보했습니다.
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
                  학부 연구생 프로젝트로 &quot;BinQL: 바이너리 파일 내 Indirect
                  Jump 주소 연산 도구&quot;를 개발했습니다.
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
                  미국 해외 연수 과정에서 &quot;PLsan: 소스 코드 내 메모리 누수
                  발생 지점 탐지 도구&quot;를 개발했습니다.
                </p>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <span className="font-semibold text-gray-900 block sm:inline">
                    SQLD
                  </span>
                  <span className="text-gray-600 text-sm sm:ml-2 block sm:inline">
                    | 한국데이터진흥원
                  </span>
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
                <p className={styles.itemMeta}>Chungnam National University</p>
                <p className={styles.descriptionBox}>
                  학과 프로젝트 경진대회에서 &quot;BinAIDA: AI를 활용한 바이너리
                  리프터 성능 향상&quot;을 주제로 우수상을 받았습니다.
                </p>
              </div>
              <div>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>
                    2024 CNU SW/AI Project Fair DevDay 코딩경진대회 금상
                  </h3>
                  <span className={styles.itemDate}>2024.06</span>
                </div>
                <p className={styles.itemMeta}>Chungnam National University</p>
                <p className={styles.descriptionBox}>
                  교내 코딩경진대회에서 금상(3위)를 수상했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Education */}
          <section>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className="space-y-4">
              <div>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>
                    Chungnam National University
                  </h3>
                  <span className={styles.itemDate}>2019.03 - 2025.02</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className={styles.itemMeta}>
                    Computer Science and Engineering
                  </p>
                  <div className="mt-2 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600">
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
  );
}
