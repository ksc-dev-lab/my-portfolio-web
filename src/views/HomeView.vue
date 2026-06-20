<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import BlogCard from '@/components/BlogCard.vue'
import projectsData from '@/data/projects.json'
import blogPostsData from '@/data/blogPosts.json'
import type { Project, BlogPost } from '@/types'

const projects = projectsData as Project[]
const blogPosts = (blogPostsData as BlogPost[]).slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="min-h-screen flex items-center justify-center px-4 pt-16">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm mt-3 mb-6 tracking-widest uppercase">
          안녕하세요, 저는 김성창입니다.
        </p>
        <img class="mx-auto rounded-full w-60 h-60 object-cover mb-6" src="../../public/avatar.jpg"/>
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span class="text-gray-900 dark:text-gray-100">FullStack</span><br />
          <span class="text-indigo-600 dark:text-indigo-400">Developer</span>
        </h1>
        <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4 font-mono tracking-wide">
          NestJS · PostgreSQL · Redis · React · TypeScript
        </p>
        <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
          풀스택 개발 경험을 바탕으로 서비스를 설계하고 구현합니다.
          게임부터 데이터 대시보드까지, 다양한 도메인의 프로젝트를 경험했습니다.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/projects"
            class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            프로젝트 보기
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
          >
            소개 보기
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Projects</h2>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">주요 프로젝트 3개</p>
          </div>
          <RouterLink
            to="/projects"
            class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            전체 보기 →
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Blog</h2>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">개발 경험을 기록합니다</p>
          </div>
          <RouterLink
            to="/blog"
            class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            전체 보기 →
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
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
            href="mailto:darkgx21@gmail.com"
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
