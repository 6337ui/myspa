<template>
    <div class="fixed top-0 left-0 right-0 shadow-md rounded-lg p-6 mb-4">
      <div class="relative w-full">
        <input
            type="text"
            placeholder="Введите запрос..."
            v-model="searchQuery"
            @input="handleInput"
            class="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IconSearch class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <button
            v-if="showClearButton"
            @click="clearSearch"
            class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IconClear />
        </button>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconSearch from '@/assets/IconsComponents/IconSearch.vue';
import IconClear from '@/assets/IconsComponents/IconClear.vue';

const searchQuery = ref('');

const showClearButton = computed(() => searchQuery.value.length > 0);

const handleInput = () => {
  // Обработка ввода, если требуется
};

const clearSearch = () => {
  searchQuery.value = '';
};
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>