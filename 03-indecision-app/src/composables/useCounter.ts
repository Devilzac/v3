import { computed, ref } from 'vue';

export const  useCounter = (initialValue: number = 5)=>{


    const counter = ref(initialValue);
    
    const squaredCounter = computed(() => {  return counter.value * counter.value; });
    
    const sumar = () => { return (counter.value = counter.value + 1); };
    const restar = () => { return (counter.value = counter.value - 1); };
    console.log(initialValue)
    return{
        counter,
        squaredCounter,
        sumar,
        restar
    }
}