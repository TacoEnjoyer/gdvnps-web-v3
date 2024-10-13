import { ViteSSG } from 'vite-ssg'
import { HomeView, DownloadView, NotFoundView } from './views'
import App from './App.vue'
import './tailwind.css'

const routes = [
  { path: '/', component: HomeView },
  { path: '/download', component: DownloadView },
  { path: '/:pathMatch(.*)*', name: 'NotFoundView', component: NotFoundView },
]

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App, { routes })
