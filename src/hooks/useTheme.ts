export default function useTheme() {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  const initTheme = () => {
    if (systemTheme) {
      document.documentElement.dataset.theme = 'dark'
    } else {
      document.documentElement.dataset.theme = 'light'
    }
  }

  const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    return theme
  }

  return { initTheme, toggleTheme }
}
