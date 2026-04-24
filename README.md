# 프론트엔드 사전

> 단어를 검색하고 등록 할 수 있는 사전 형식의 웹 서비스🔍

<img width="1303" height="838" alt="image" src="https://github.com/user-attachments/assets/5c660111-8aa2-4919-9150-696078e16c2e" />

<br/>

## 🔗 링크
- **배포 링크**: [바로가기](https://wookly44.github.io/Frontend_Dictionary/)

<br/>

## 📌 프로젝트 소개

개발 관련 단어들을 정리하고 학습 할 수 있도록 도울 수 있는 사전 형식의 웹 서비스입니다.<br/>
원하는 단어를 검색하고 카테고리 별로 확인하며 단어를 학습 할 수 있도록 제작하였습니다. <br/>
기존 단어의 수정 및 삭제가 가능합니다.

<br/>

## 🛠 기술 스택

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)

<br/>

## ✨ 주요 기능

- 단어 검색 기능 (실시간 필터링)
- 단어 추가 / 수정 / 삭제 (CRUD)
- 카테고리(분류) 필터 기능
- 버튼 인터랙션 및 hover 효과

<br/>

## 🖼 화면 구성

### 메인 페이지
- 검색 입력창
- 분류 버튼 영역
- 단어 리스트 출력 영역
- 단어 추가 영역

### 인터랙션 요소
- hover 효과
- 버튼 클릭 시 상태 변화 (Add List ↔ Home)
- 수정 / 삭제 시 확인 알림
- 리스트 동적 렌더링 (map 함수 활용)

<br/>

## 📁 폴더 구조

```bash
Frontend_Dictionary
 ┣ public
 ┣ src
 ┃ ┣ assets        # 이미지 및 정적 파일
 ┃ ┣ hook          # 커스텀 훅
 ┃ ┣ pages         # 주요 페이지 및 컴포넌트
 ┃ ┃ ┣ style.css
 ┃ ┃ ┣ dicitem.jsx
 ┃ ┃ ┣ dicsearch.jsx
 ┃ ┃ ┣ header.jsx
 ┃ ┃ ┣ footer.jsx
 ┃ ┃ ┣ lists.jsx
 ┃ ┃ ┣ main.jsx
 ┃ ┃ ┣ write.jsx
 ┃ ┃ ┗ sortlist.jsx
 ┃ ┣ App.css
 ┃ ┣ App.jsx       # 루트 컴포넌트
 ┃ ┣ data.jsx
 ┃ ┣ main.jsx
 ┃ ┗ utils.jsx
 ┣ index.html
 ┣ package.json
 ┗ vite.config.js
