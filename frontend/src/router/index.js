import { createRouter, createWebHistory } from 'vue-router'
import FileUpload from '../components/FileUpload.vue'
const routes = [
  {
    path: '/',
    name: 'FileUpload',
    component: FileUpload
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router