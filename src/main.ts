// src/main.ts
import { ViteSSG } from 'vite-ssg'
import { HomeView, DownloadView } from './views'
import App from './App.vue'
import './tailwind.css'

const routes = [
  { path: '/', component: HomeView },
  { path: '/download', component: DownloadView },
]

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App, { routes })
