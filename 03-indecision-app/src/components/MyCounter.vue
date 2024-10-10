<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square {{ squaredCounter }}</h3>

    <div>
      <button class="btn" @click="sumar">+1</button>
      <button class="btn" @click="restar">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';


    interface Props {
      value: number;
    }
    
    const props = defineProps<Props>();

const { counter,
        squaredCounter,
        sumar,
        restar } = useCounter(10);

</script>


<style scoped>
  .btn{
    @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-900;
  }
</style>