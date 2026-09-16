<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const projects = projectsData as Project[]

const goals = [
  {
    title: '서비스로 키우기',
    description: '사이드 프로젝트 중 하나를 실사용자가 있는 서비스로 성장시키는 것이 목표입니다.'
  },
  {
    title: '경험 확장하기',
    description: '게임, 데이터, SaaS 등 다양한 도메인에서 풀스택 경험을 계속 넓혀갑니다.'
  },
  {
    title: '꾸준히 기록하기',
    description: '프로젝트를 만들며 겪은 문제와 해결 과정을 계속 글로 남깁니다.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="min-h-screen flex items-center justify-center px-4 pt-16">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          <span class="text-gray-900 dark:text-gray-100">생각만 하지 않고</span><br />
          <span class="text-indigo-600 dark:text-indigo-400">직접 만들어보는 개발자</span>
        </h1>
        <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4 font-mono tracking-wide">
          NestJS · PostgreSQL · Redis · React · TypeScript
        </p>
        <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
          백엔드를 중심으로 풀스택 사이드 프로젝트를 만들어왔습니다. 게임부터 데이터 대시보드, SaaS까지 —
          아이디어가 떠오르면 일단 만들어보고, 배포까지 진행합니다.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            사이드 프로젝트 보기
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=dev8603d@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
          >
            이메일 보내기
          </a>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-20 px-4 scroll-mt-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-xl mx-auto mb-12">
          <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">
            Side Projects
          </p>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">만들고 있는 것들</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm">직접 기획부터 배포까지 진행한 사이드 프로젝트입니다.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Aspiration -->
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aspiration</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-8">다음으로 만들고 싶은 것들</p>
          <p class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed text-balance">
            만든 것을 <span class="text-indigo-600 dark:text-indigo-400">실제로 쓰는 사람이 있는 서비스</span>로 키우고 싶습니다.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="goal in goals"
            :key="goal.title"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">{{ goal.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ goal.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-10">새로운 기회나 협업에 대해 이야기 나눠요.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&to=dev8603d@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            이메일 보내기
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
          >
            GitHub 방문
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
