<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemon</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-lg font-bold">Score: {{ score }}</h1>
    <h1 class="m-5">¿Quien es este pokémon?</h1>
    <NextRoundButton v-if="gameStatus !== GameStatus.Playing" @play-again="playAgain" />
    <!-- pokemon picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- Pokemon options -->
    <PokemonOptions
      :block-selection="selected"
      :correct-answer="randomPokemon.id"
      :options="options"
      @selectedOption="selectedOption"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import NextRoundButton from '@/modules/pokemon/components/NextRoundButton.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';
import { ref } from 'vue';

const {
  gameStatus,
  isLoading,
  pokemonOptions: options,
  randomPokemon,
  getNextRound,
  checkAnswer,
} = usePokemonGame();

const selected = ref(false);
const counter = ref(4);
const score = ref(0);

const playAgain = () => {
  selected.value = false;
  if (gameStatus.value === GameStatus.Won) {
    score.value = Math.floor((counter.value + score.value) * 1.5);
    if (counter.value<9) {
      counter.value = counter.value + 1;      
    }
  }
  else{    
    score.value = 0;
    counter.value = 4;
  }
  getNextRound(counter.value);
};
const selectedOption = (id: number) => {
  selected.value = true;
  console.log(selected.value);
  checkAnswer(id);
};
</script>
