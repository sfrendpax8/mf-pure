import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import ShellHome from './ShellHome.vue'
import asdf from 'remote/Test';
import Vue2 from 'vue2/TestVue2';
import { vue2ToVue3 } from './utils';


console.log(Vue2);
console.log(vue2ToVue3(Vue2));
console.log(asdf);

const routes = [
  { path: '/home', component: ShellHome },
  { path: '/about', component: asdf },
  { path: '/vue2', component: vue2ToVue3(Vue2, 'test') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router)

app.mount('#app')
