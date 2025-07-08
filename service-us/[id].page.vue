<template>
  <div>
    <h1>This is page {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>()
console.log('✅ from defineProps:', props.id)
</script>
