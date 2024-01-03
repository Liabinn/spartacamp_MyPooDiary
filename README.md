# My Poo Diary (나의 쾌변 일지)

## Overview
내일배움캠프 (심화프로젝트)
🕗 개발기간: 2023. 12. 26 ~ 2024. 01. 03  

## 팀소개

이하빈(팀장): https://github.com/Liabinn

정혜원(팀원):

서준호(팀원): https://github.com/Juno2054

전지현(팀원): https://github.com/jihyun-j



## 프로젝트 소개
### 프로젝트명: My Poo Diary (나의 쾌변 일지)
### 프로젝트 소개:  쾌변을 하기위한 사용자의 일기장 & 급똥 사태를 대비한 화장실 지도 및 리뷰 제공

## Stack

### Environment

<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/></a>

### Config

<img src="https://img.shields.io/badge/YARN-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"/></a>

### Database
JSON server 

### API
Kakao map, reacr-calendar

### Communication

<img src="https://img.shields.io/badge/SLACK-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/></a>
<img src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>

## 화면구성

- 로그인 / 회원가입
  - Supabase를 사용한 로그인 기능과 회원가입 기능
 
- 홈페이지
  - Kakao Map API를 이용해 사용자의 현재 위치를 가져 옴
  - 가져온 현 위치 기준으로 근처의 화장실 데이터를 제공 함

- 지도 페이지
  - 홈페이지와 동일하게 Kakao Map API를 이용해 사용자에게 현 위치와 화장실 및 편의점 위치를 리스트로 제공 함
 
- 프로필 페이지
  - 해당 날짜를 클릭하면 사용자가 쾌변일지 작성 가능
  - 캘린더에 이모티콘이 표시 된 경우, 해당 날짜를 클릭하면 일지 수정 가능
  - reacr-calendar 라이브러리를 이용해 사용자가 작성한 일지 내용을 바탕으로 쾌변 여부가 캘린더에 표시 됨

    



