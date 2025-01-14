import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const routes = [
    { path: '/', component: LoginForm },
    { path: '/login', component: LoginForm },
    { path: '/registration', component: RegisterForm },

    // { path: '/about', component: () => import('./views/About.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
