<template>
  <div style="text-align: center; margin-top: 50px;">
    <h1>Oops! Something went wrong.</h1>
    <p>{{ error?.message || 'An unexpected error occurred.' }}</p>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
