import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from "vue";




export default defineComponent({
  setup: ()=>{

        const counter = ref(0);
        console.log("setup");

      onMounted(() => {        
        console.log("onMounted");
      })
      
      onUpdated(() => {
        console.log('onUpdated');
      });
      onUnmounted(() => {
        console.log('onUnmounted');
      });
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
      });
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
      });
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
      });
      onErrorCaptured(() => {
        console.log('onErrorCaptured');
      });
      onRenderTracked(() => {
        console.log('onRenderTracked');
      });
      onRenderTriggered(() => {
        console.log('onRenderTriggered');
      });
      onActivated(() => {
        console.log('onActivated');
      });
      onDeactivated(() => {
        console.log('onDeactivated');
      });
  

    return  {
        counter
    }
  }
})