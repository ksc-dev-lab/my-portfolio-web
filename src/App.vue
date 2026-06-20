<script setup lang="ts">
import { onMounted } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { init } = useDarkMode()
onMounted(init)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <AppNavbar />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
