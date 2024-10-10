<template>
  <section>
    <h1>
      Pokemon <small class="text-blue-500">#{{ pokemonN }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonN}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
    />

    <RouterLink
      :to="{
        name: 'pokemon',
        params: { id: id + 1 },
      }"
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center"
    >Siguiente</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

interface Props {
  id: string;
}
const props = defineProps<Props>();

const pokemonN = computed(() => props.id);
</script>

<style lang="scss" scoped></style>
