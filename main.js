import Vue from 'vue';
import App from './App'
import VueRouter from 'vue-router'
import User from './src/user'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/user', component: User}
    ]
})


let vm = new Vue({
    el:'#app',
    router,
    render: h => h(App)
})