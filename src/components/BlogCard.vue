<script setup lang="ts">
import type { BlogPost } from '@/types'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex flex-wrap gap-2 mb-3">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md font-mono"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-snug line-clamp-2">
      {{ post.title }}
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
      {{ post.summary }}
    </p>
    <div class="flex items-center justify-between">
      <time class="text-xs text-gray-500 dark:text-gray-500 font-mono">{{ post.date }}</time>
      <a
        v-if="post.url"
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
      >
        읽기 →
      </a>
      <span v-else class="text-xs text-gray-400 dark:text-gray-600">준비 중</span>
    </div>
  </article>
</template>
