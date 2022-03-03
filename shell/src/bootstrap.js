import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import ShellHome from './ShellHome.vue'
import asdf from 'remote/Test';


const routes = [
  { path: '/home', component: ShellHome },
  { path: '/about', component: asdf },
  // { path: '/vue2', component: Vue2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router)

app.mount('#app')
