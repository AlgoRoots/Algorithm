# Node.js로 백준 알고리즘 문제 편하게 풀기

> 백준 알고리즘 문제를 더 효율적으로 관리하고 실행하기 위한 디렉토리 구조와 자동 변환 시스템입니다.

---

## 📁 폴더 구조

```bash
백준/
├── @template/               # 공통 템플릿 (문제 복사)
│   ├── app.js               # 문제 풀이 작성 파일
│   └── input.txt            # 로컬 테스트용 입력
│
├── dfs-bfs/                 # 문제 유형별 디렉토리
│   ├── DFS와BFS/            # 개별 문제 디렉토리
│   │   ├── app.js
│   │   ├── input.txt
│   │   └── solution.js      # build.js 실행 시 자동 생성됨 (백준 제출용)
│   ├── 단지번호붙이기/
│   ├── 미로찾기/
│   └── 바이러스/
│
├── 구현/
├── 브루트포스/
└── ...
```

---

## 🚀 사용 방법

### 1.새로운 문제 디렉토리 생성

템플릿을 복사해서 빠르게 문제를 시작할 수 있습니다.

기본 실행 (기본 입력 파일: @template)

```bash
npm run new or pnpm new
```

output 폴더 이름 지정 (-o: output 폴더 이름 지정)

```bash

npm run new -o 문제이름
# 또는
pnpm new -o 문제이름
```

- @template/ 폴더의 파일들이 지정한 이름의 디렉토리로 복사됩니다.

- 예: npm run create -o 단지번호붙이기 → dfs-bfs/단지번호붙이기/ 폴더가 생성됨

> 내부적으로는 create-template.js 스크립트가 실행됩니다.

### 2. 문제 풀이 작성

```js
// app.js
const { createInput } = require("#helper/create-input");

const input = createInput().여러줄(Number);
```

> `createInput()`을 사용하면 입력 파싱이 훨씬 간편해집니다.

---

### 3. 변환 실행 (백준 제출용 `solution.js` 생성)

기본 실행 (기본 입력 파일: app.js)

```bash
npm run build or pnpm build
```

다른 입력 파일 지정 (-i: input 파일명 지정)

```bash
npm run build -- -i xx.js
# 또는
pnpm build -i xx.js
```

- `app.js` → `solution.js`로 변환
- `createInput().여러줄(Number)` 등의 구문이 `fs.readFileSync()` 기반 코드로 자동 대체됩니다

---

## 지원하는 파서 목록

| 파서 이름                 | 설명                                       |
| ------------------------- | ------------------------------------------ |
| `문자()`                  | 전체 입력을 문자열로 받기                  |
| `한줄(mapper)`            | 한 줄을 공백 기준으로 나눠 배열로 받기     |
| `여러줄(mapper)`          | 여러 줄을 한 줄씩 배열로 받기              |
| `여러줄_띄어쓰기(mapper)` | 줄마다 공백으로 나눈 2차원 배열로 받기     |
| `커스텀(fn)`              | 직접 파싱 함수 전달해서 자유롭게 파싱 가능 |

> `mapper`에는 기본적으로 `String`, `Number`, `parseInt` 등을 사용할 수 있습니다.

---

## 추천 워크플로우

### 새로운 문제 시작할 때

1. `@template` 폴더 복사 → `npm run new -o 문제이름`
2. `app.js`에 문제 풀이 작성
3. `input.txt`에 예제 입력 넣기
4. `npm run build`로 변환 후 `solution.js` 제출
74` 