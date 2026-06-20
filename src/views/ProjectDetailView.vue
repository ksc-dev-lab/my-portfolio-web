<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const route = useRoute()
const projects = projectsData as Project[]

const project = computed(() => {
  const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  return projects.find(p => p.id === id)
})
</script>

<template>
  <div class="pt-24 pb-20 px-4">
    <div class="max-w-4xl mx-auto">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
      >
        ← Projects
      </RouterLink>

      <div v-if="project">
        <div class="mb-10">
          <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-3">{{ project.subtitle }}</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ project.title }}</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{{ project.description }}</p>
        </div>

        <img v-if="project.portfolioImg" :src="project.portfolioImg" class="my-2"/>
        <div class="flex flex-wrap gap-3 mb-10">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg font-medium transition-colors"
          >
            Live Demo →
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2 border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
        <div v-if="project.blogUrlArr.length > 0" class="font-bold">
            Blog :
            <div v-for="({ url, title }, index) in project.blogUrlArr" class="my-4">
              <a
                :index="index"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="px-5 py-2 border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium transition-colors"
              >
                {{ title }}
              </a>
            </div>
          </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Tech Stack</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-mono"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">주요 기능</h2>
            <ul class="space-y-2">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
              >
                <span class="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">기술적 포인트</h2>
          <ul class="space-y-3">
            <li
              v-for="highlight in project.highlights"
              :key="highlight"
              class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <span class="text-indigo-600 dark:text-indigo-400 font-mono mt-0.5 flex-shrink-0">✦</span>
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 mb-4">프로젝트를 찾을 수 없습니다.</p>
        <RouterLink to="/projects" class="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
          Projects로 돌아가기
        </RouterLink>
      </div>
    </div>
  </div>
</template>
