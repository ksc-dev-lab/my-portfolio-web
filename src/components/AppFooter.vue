<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span class="font-mono text-sm text-gray-500 dark:text-gray-400">&lt;dev /&gt;</span>
      <p class="text-sm text-gray-500 dark:text-gray-400">© {{ year }} · Built with Vue 3 + Tailwind</p>
      <div class="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:darkgx21@gmail.com"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
