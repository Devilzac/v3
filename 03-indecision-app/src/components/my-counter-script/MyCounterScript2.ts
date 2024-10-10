
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
              restar, } = useCounter(props.value)

      return{
        props,
        counter,
        squaredCounter,
        sumar,
        restar,
      }
    }
})
