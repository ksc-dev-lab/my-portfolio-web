<script setup lang="ts">
const techStack: Record<string, string[]> = {
  backend: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'JWT', 'REST API'],
  frontend: ['React', 'Next.js', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
  infra: ['EC2', 'GitHub Pages', 'Vercel', 'Git']
}

const philosophies = [
  {
    title: '실제로 동작하는 코드',
    description: '완벽한 설계보다 실제로 돌아가는 서비스가 먼저입니다. 배포하고 개선합니다.'
  },
  {
    title: '백엔드 중심의 설계',
    description: '데이터 흐름과 API 설계를 먼저 생각하고 프론트엔드를 맞춥니다.'
  },
  {
    title: '기록하는 개발',
    description: '문제 해결 과정을 글로 남깁니다. 나와 팀 모두를 위한 투자입니다.'
  }
]
</script>

<template>
  <div class="pt-24 pb-20 px-4">
    <div class="max-w-4xl mx-auto">

      <section class="mb-16">
        <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-4">about.me</p>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          안녕하세요.
        </h1>
        <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          <p>
            백엔드를 중심으로 풀스택 개발을 공부하고 있는 개발자입니다.
            NestJS와 PostgreSQL 기반의 서버 개발 경험이 있으며,
            AWS EC2 배포와 JWT 인증 시스템 구축 경험이 있습니다.
          </p>
          <p>
            게임(테트리스, 축구 퀴즈)부터 데이터 시각화 대시보드까지 다양한 도메인에서
            프로젝트를 만들어왔습니다.
          </p>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Tech Stack</h2>
        <div class="space-y-6">
          <div v-for="(techs, category) in techStack" :key="category">
            <p class="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-widest">
              {{ category }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in techs"
                :key="tech"
                class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-700"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">개발 철학</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="item in philosophies"
            :key="item.title"
            class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
