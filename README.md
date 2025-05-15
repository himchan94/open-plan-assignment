# 📦 Open Plan Assignment

> 지원자: **김힘찬**  
> 📧 Email: [himchan9494@gmail.com](mailto:himchan9494@gmail.com)

---

## 🚦 실행 방법

1. 패키지 설치

```bash
pnpm install
```

2. 개발 서버 실행

```bash
pnpm run dev
```

---

## ⏱️ 작업 시간

- 2025년 5월 14일 21:30 ~ 5월 15일 05:00

---

## 🚀 주요 구현 사항

### 🔍 특이사항

- 필수 요구사항 중 **Storybook 작업은 완료하지 못했습니다.**
  - Tailwind CSS v4와 Storybook 연동 시 **PostCSS 관련 런타임 에러**가 발생하였고,
  - 주어진 시간 내에 디버깅이 어려워 작업을 보류하였습니다.

---

### 🧠 구현 중 고민한 포인트

- API 호출 결과를 localStorage에 저장
  → zustand의 persist 미들웨어를 활용하여, 새로고침 시에도 조회 데이터를 유지하도록 구현했습니다.

- API 호출 버튼에 디바운스 적용을 위한 커스텀 훅 제작
  → leading, trailing 옵션이 적용 가능한 useDebounceCallback 훅을 직접 구현하여 불필요한 중복 호출을 방지했습니다.

---

## ✅ 완료된 작업

- [x] **Turborepo 설치 (pnpm 기반)**
- [x] **워크스페이스 구성: `web`, `storybook`**
- [x] **피그마 기반 UI 구현 (web)**
- [x] **UI 패키지에 버튼 컴포넌트 생성**
- [x] **web에서 버튼 컴포넌트 사용**
- [x] **사진 조회 API 연동 및 `/result`로 데이터 전달 처리**
- [x] **Github Public 저장소 생성**
- [x] **Vercel 배포**
- [x] **메일 회신 완료**

---

## ❌ 미작업 항목 (사유 포함)

- [ ] **버튼 Storybook 작성**  
       → Tailwind CSS v4와 Storybook 연동 시 PostCSS 런타임 오류 발생. 해결 시간 부족으로 보류.

- [ ] **정보 영역에 Skeleton UI 처리**  
       → 구현 우선순위 조정으로 작업 보류.

- [ ] **ESLint / Prettier 설정 적용**  
       → 초기 세팅 외 마무리 작업은 시간 부족으로 미완료.

- [ ] **조회 이력 시 `/result` 자동 이동**  
       → 상태 기반 리디렉션 로직 설계 중 시간이 부족하여 구현 미완료.

---

## 🟡 선택 구현 사항

- [x] **Tanstack Query로 상태 관리**
- [x] **Zustand로 사진 전역 상태 관리**
- [x] **새로고침 시 데이터 유지 처리**
- [x] **사진 조회 버튼에 디바운스/스로틀링 적용**
- [x] **디바운스 시 로딩 애니메이션 처리**
- [x] **조회 이력 없이 `/result` 진입 시 1초 후 `/`로 이동 처리**
- [x] **조회 이미지로 `/result` 페이지 배경 처리**
- [x] **404 페이지 구현**
- [x] **README 문서 작성**

---

## 🛠️ 기술 스택

| 항목          | 사용 기술               |
| ------------- | ----------------------- |
| 프레임워크    | Next.js 15, React 19    |
| 스타일링      | Tailwind CSS v4         |
| 상태관리      | Zustand, Tanstack Query |
| 개발 환경     | TypeScript, Turborepo   |
| 패키지 매니저 | pnpm                    |

---

## 🏗️ 프로젝트 구조

```
apps/                  # 애플리케이션 디렉토리
└── web/               # 웹 애플리케이션 (Next.js)
    ├── app/           # Next.js App Router
    └── features/      # 기능별 컴포넌트 및 상태

packages/              # 공유 패키지
├── ui/                # UI 컴포넌트 라이브러리
├── hooks/             # 공통 커스텀 훅
└── configs/           # 프로젝트 설정 파일
```

---

## 🔄 페이지 흐름 요약

- `/` : 사진 조회 버튼이 있는 메인 페이지
- `/result` : 조회된 사진 정보가 출력되는 결과 페이지
  - 조회 이력 없을 시 1초 후 `/`로 자동 이동
  - 조회된 이미지가 배경으로 사용됨
- `404` : 존재하지 않는 경로 접근 시 사용자 정의 Not Found 페이지 노출

---

## 💭 느낀 점

- 프로젝트 설정에 너무 많은 시간이 소요되었습니다.
  특히 Turborepo 환경에서 storybook 워크스페이스 설정을 완수하지 못해 아쉬움이 남습니다.

- TanStack Query와 같은 최신 기술 스택을 직접 적용해볼 수 있어 유익했습니다.
  비동기 상태관리와 서버 캐시 전략에 대해 이해를 넓힐 수 있었습니다.

- Next.js와 상태관리 라이브러리의 SSR 호환성에 대해 고민하게 되었습니다.
  Zustand는 클라이언트와 서버의 상태 동기화(hydration)가 중요한데,
  SSR 시 어떻게 hydration을 처리하는지 추후 더 깊이 있게 살펴보고 싶습니다.

---

## 🌐 배포 및 저장소

- 🔗 [Vercel 배포 링크](https://open-plan-assignment-web.vercel.app/)
- 📂 [Github 저장소 링크](https://github.com/himchan94/open-plan-assignment)
