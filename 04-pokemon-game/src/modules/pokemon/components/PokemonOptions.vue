import { Pokemon } from '../interfaces/pokemon.interface';
<template>
  <section class="mt-5 grid grid-cols-4 gap-2">
 <button
      :disabled="blockSelection"
      @click="$emit('selectedOption', id)"
      v-for="{ name, id } in options"
      :key="id"
      :class="['capitalize disabled:shadow-none disabled:bg-gray-100 disabled:cursor-not-allowed', {
        correct: id===correctAnswer && blockSelection,
        wrong: id!==correctAnswer && blockSelection,
      }]">{{
      name
      }}</button> </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}
const props = defineProps<Props>();

const emits = defineEmits<{
  selectedOption: [id:number]
}>();
</script>

<style scoped>

.correct{
  @apply bg-green-500 text-white;
}
.wrong{
  @apply bg-red-100;
}
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>
