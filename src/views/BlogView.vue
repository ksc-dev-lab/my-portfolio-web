<script setup lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import blogPostsData from '@/data/blogPosts.json'
import type { BlogPost } from '@/types'

const blogPosts = blogPostsData as BlogPost[]
</script>

<template>
  <div class="pt-24 pb-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Blog</h1>
        <p class="text-gray-500 dark:text-gray-400">
          개발 과정에서 얻은 인사이트와 경험을 기록합니다.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>
