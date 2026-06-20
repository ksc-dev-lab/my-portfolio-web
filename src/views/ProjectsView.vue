<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const projects = projectsData as Project[]
</script>

<template>
  <div class="pt-24 pb-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Projects</h1>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl">
          게임, 서비스, 데이터 분석 영역에서 진행한 프로젝트들입니다.
          각 프로젝트는 풀스택 개발 경험을 담고 있습니다.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>
