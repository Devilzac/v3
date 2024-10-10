<template>
    <button @click="$emit('playAgain')">
        Play again!
    </button>
</template>

<script setup lang="ts">

const emit = defineEmits(['playAgain']);

</script>

<style scoped>

button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 mb-5 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>