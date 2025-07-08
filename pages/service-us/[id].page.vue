<template>
  <div>
    <h1>Service {{ id }}</h1>
    <p>Description: {{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  description: string
}>()
</script>
