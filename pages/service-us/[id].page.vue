<template>
  <div>
    <h1>This is page {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
const { id } = defineProps<{ id: string }>()
</script>
