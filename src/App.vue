<script setup>
import Index from "@/components/index.vue";
import {useAuthStore} from '@/stores/auth.js';
import {storeToRefs} from 'pinia';

const authStore = useAuthStore();
const {email, password, loading, error} = storeToRefs(authStore);
</script>

<template>


  <router-view/>


</template>

<style scoped>

</style>
