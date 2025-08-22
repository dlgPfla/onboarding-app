25년도 상반기 **UNIS 아이디어 창업 프로젝트 – 코코베이팀**  
🏆 성과: **우수상 수상**

👉 배포 링크: https://onboarding-app-lyart.vercel.app/

---

## 🍼 INTRO  

**육아용품 큐레이션 플랫폼의 온보딩 프로토타입**  
부모가 앱에 들어오면 아이의 이름·성별·출생일 같은 기본 정보를 입력하고,  
예산이나 관심 카테고리(예: 기저귀, 아토피 크림, 유모차 등)를 선택한다.  
이 과정을 통해 **사용자 맞춤형 추천**으로 이어질 준비를 끝내는 구조다.  

결국 목표는  
- “아기를 키우는 상황”을 기준으로 맞춤형 데이터를 받아내고,  
- 나중에는 이를 기반으로 **추천 피드, 성분 분석, 최저가 비교**로 연결시키는 것.  

지금 단계의 앱은 **온보딩 플로우 자체에 집중**했다.  
즉, 계정 생성 → 아기 정보 입력 → 예산 설정 → 관심사 선택 → 홈 진입.  
이 흐름이 깔끔하게 작동하도록 구조와 화면을 구현한 것이 핵심이다.  


---

## 📅 제작 기간  
2025.07.03 ~ 2025.07.23  
(혼자서 진행, 기획 → 개발 → 배포까지 전부 담당)  

---

## 🛠️ 기술 스택  
- **Framework**: React + Vite + TypeScript  
- **Styling**: CSS Modules (Figma 스타일 기준 맞춤)  
- **Routing**: React Router DOM  
- **State Management**: useState, props 전달 (Zustand 도입 고려 단계)  
- **Deployment**: Vercel  

---

## 📂 파일 구조 (간략화)  

```bash
src/
 ├─ components/      # 공용 버튼, 컨테이너, SpeechButton 등
 ├─ pages/           
 │   └─ onboarding/  # 온보딩 단계별 페이지 모음
 ├─ styles/          # 모듈 CSS
 ├─ assets/          # 아이콘, 이미지
 └─ main.tsx         # 진입 파일
```


## 📑 페이지 설계


## ​ 페이지 설계 

SPA 구조 기반의 온보딩 흐름을 React 컴포넌트 단위로 설계했으며, 다음과 같은 패턴과 테크닉을 활용:

| 페이지         | 설명 및 프론트엔드 구현 요점 |
|----------------|-------------------------------|
| **Onboarding1** | **현재 상태 선택 UI**<br>- `useState`로 선택 상태 관리<br>- 버튼 클릭 시 `onClick`으로 상태 업데이트 및 다음 화면 `useNavigate` 호출 |
| **Onboarding2** | **아기 정보 입력 폼**<br>- `input` 컴포넌트로 유저 입력 수집<br>- 사진 프로필은 `<input type="file" accept="image/*" />` 또는 모바일/데스크탑 파일 선택창 연동<br>- 선택된 이미지 `FileReader`로 미리보기 렌더링 |
| **Onboarding3~** | **상품 상세 및 요약 결과 컴포넌트**<br>- API 호출 (`fetch` 또는 `axios`)로 상품 정보 획득,<br>  `useEffect`로 데이터 로딩 처리<br>- AI 요약, 최저가 추이, 후기 정보를 **조건부 렌더링**과 **컴포넌트 모듈화**를 통한 재사용 구조로 구성 |
| **Onboarding12 (홈 화면)** | **탭 기반 UI / 반응형 구성**<br>- 상단 탭 메뉴 + **탭 인디케이터(Underline Navigation)** 구현 (`useState`로 현재 탭 관리)<br>- 배너 슬라이드 컴포넌트(`Carousel`)에 `useRef`와 `useEffect`로 자동 슬라이딩 또는 수동 슬라이드 기능 제공<br>- 카테고리 슬라이드 인디케이터는 `map()` 렌더링 + 내부 상태 기반 활성화 표시<br>- **하단 고정 바(Tabs Bar)**는 `position: fixed` 스타일, React Router `<NavLink>` 활용해 라우팅 관리<br>- 상품 카드 클릭 시 `onClick` + `navigate()`로 `Onboarding3`로 이동 |
| **Onboarding13 (마이페이지)** | 프로필 정보, 찜한 상품, 설정 등 **MyPage** 구성, 상태 관리와 API 연동을 통한 정보 렌더링 |
| **Onboarding17** | **알림 설정 페이지**<br>- 토글 스위치(`checkbox input`)로 알림 항목 활성/비활성 처리<br>- 원하는 가격 알림의 경우, 숫자 키패드 모달(`Modal`)을 통해 입력 받음—모달 열림 상태는 `useState`로 제어 |
| **Onboarding24** | **카테고리 기반 상품 리스트**<br>- 선택된 카테고리에 따라 **조건부 API 호출** 및 결과 `map()`으로 카드 렌더링 |
| **Onboarding34** | **예산 계산기 페이지**<br>- 카테고리 선택, 태그 입력, 고정 하단 버튼(UI 컴포넌트) 제공<br>- 예산 입력 값은 `useState`로 관리, 버튼 클릭 시 입력 값에 따라 결과 처리 구현 |
| **상세 페이지** | **Detail View (상품/후기)**<br>- `useParams`로 URL 파라미터(productId 등) 획득 후 API 호출<br>- 찜 버튼은 `useState`로 토글 상태 관리<br>- 후기 탭은 **조건부 렌더링 + `useEffect`를 통한 백엔드 데이터 갱신** 방식 사용 |

---

(전체 흐름은: 회원가입 → 온보딩 흐름 → 홈 진입 → 탐색/추천)


## 🚀 배포 방법

- Vercel CLI 연결
- npm run build → dist 폴더 생성
- Vercel dashboard에서 새 프로젝트 연결

- GitHub main 브랜치 push 시 자동 배포





## ✍️ 느낀 점

혼자서 온전히 만든 첫 번째 온보딩 앱.
생각보다 CSS랑 페이지 흐름 설계가 제일 오래 걸렸다.
피그마랑 코드가 맞아떨어질 때 작은 희열이 있었음.
아직 개선할 부분이 많지만, "일단 완성"했다는 데에 의의를 둠
