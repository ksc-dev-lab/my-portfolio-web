1. Overview
- 개인 개발자 포트폴리오 웹사이트를 제작한다.

목표:
- 실제 배포된 프로젝트 3개를 중심으로 개발 역량을 보여주는 
포트폴리오
- 게임 / 서비스 / 데이터 분석 구조로 구성
-개발 블로그 및 기술 경험을 함께 정리하는 개발자 브랜딩 사이트

2. Pages (Vue SPA)
- Home
- Hero Section (이름 / 소개 / CTA)
- 프로젝트 3개 요약 카드
- Blog Preview
- Projects
- 프로젝트 리스트
- 카드 기반 UI
- 상세 페이지 또는 모달
- Blog
- 개발 블로그 리스트
- 글 상세 보기
- 프로젝트 개발기 포함
- About
- 개발자 소개
- 기술 스택
- 개발 철학
- Contact
- GitHub
- Blog
- Email

3. Projects (Portfolio Content)
⚽ 1. 축덕 퀴즈 (MAIN PROJECT - Full Stack)
- Purpose
축구 퀴즈 기반 게임형 웹 서비스

- Features
퀴즈 플레이 시스템
랭킹 시스템 (TOP10)
무한 모드
기록 저장/조회
복구 코드

Architecture
- Backend:
NestJS
PostgreSQL
Prisma
Redis

- Frontend 
React
TypeScript
Tailwind

Key Features
- Redis 캐싱 (TOP10 랭킹 60s TTL)
- Cache-Aside 패턴 적용
- CSRF 방어
- CORS 설정

🧩 2. 레트로 테트리스 (Game Project)
- Purpose
웹 기반 고전 테트리스 게임

- Features
블록 이동 / 회전
점수 시스템
레벨 시스템
게임 오버 처리
랭킹 시스템 (TOP10)
기록 저장/조회
복구 코드 

Architecture
- Backend:
NestJS
PostgreSQL
Prisma

- Frontend 
React
TypeScript

Key Features
- CSRF 방어
- CORS 설정


📊 3. 자산 포트폴리오 벤치마크 (Data Project)
- Purpose
자산 포트폴리오를 시각화하고 벤치마크 지수와 비교하는 분석 대시보드

- Features
자산 포트폴리오 관리
자산 비중 시각화
수익률 분석
벤치마크 비교

Architecture
- Frontend 
React
Next.js
Recharts
TypeScript
Tailwind 

4. Requirements
Vue 기반 SPA 포트폴리오
반응형 UI (mobile-first)
다크모드 지원
카드 기반 UI 구조
SEO meta tag 적용
Lighthouse 90+ 목표
빠른 초기 로딩

5. Data Structure (Static)
projects:
id
title
description
techStack[]
liveUrl
githubUrl
blogUrl

blogPosts:
id
title
date
tags[]
summary
url

6. Future Enhancements
GitHub API 연동
방문자 통계
블로그 검색 기능
프로젝트 필터링
다크모드 개선