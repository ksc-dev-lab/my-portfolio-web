<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
    <div class="p-6 flex flex-col flex-1">
      <p class="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">
        {{ project.subtitle }}
      </p>
      <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
        {{ project.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-1.5 mb-5">
        <span
          v-for="tech in project.techStack.slice(0, 4)"
          :key="tech"
          class="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md font-mono"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.techStack.length > 4"
          class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md font-mono"
        >
          +{{ project.techStack.length - 4 }}
        </span>
      </div>

      <div class="flex items-center gap-3">
        <RouterLink
          :to="'/projects/' + project.id"
          class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          자세히 보기 →
        </RouterLink>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Live ↗
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  </article>
</template>
