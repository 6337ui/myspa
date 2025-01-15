<template>
  <div class="border-gray-900 shadow-md rounded-lg p-6">
    <h3 class="text-lg font-bold">{{ product.name }}</h3>
    <p class="text-gray-600">{{ product.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>