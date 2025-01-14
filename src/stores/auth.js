import { defineStore } from 'pinia';
import { registerUser, loginUser } from '@/stores/authService';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        error: null,
        loading: false,
        token: null,  // Для хранения токена
    }),
    actions: {
        async register(firstName, lastName, email, password) {
            this.loading = true;
            try {
                const data = await registerUser(firstName, lastName, email, password);
                this.user = data.user;
                this.token = data.token;  // Сохранение токена после регистрации
                this.error = null;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        async login(email, password) {
            this.loading = true;
            try {
                const data = await loginUser(email, password);
                this.user = data.user;
                this.token = data.token;  // Сохранение токена после логина
                this.error = null;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
});
