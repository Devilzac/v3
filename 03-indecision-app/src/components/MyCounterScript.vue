<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square {{ squaredCounter }}</h3>

    <div>
      <button @click="sumar">+1</button>
      <button @click="restar">-1</button>
    </div>
  </section>
</template>

<script lang="ts">

import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
      value:{
        type: Number,
        required:true,
      }
    },
    setup( props ){      
        const { counter,
                squaredCounter,
                sumar,
                restar,  } = useCounter(props.value)        
        

      return{
        props,
        counter,
        squaredCounter,
        sumar,
        restar,
      }
    }
})
</script>

