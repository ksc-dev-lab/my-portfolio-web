import { ref } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggle = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const init = () => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved === 'dark' || (!saved && prefersDark)
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  }

  return { isDark, toggle, init }
}
