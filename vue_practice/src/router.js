import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    }
  ]
})
