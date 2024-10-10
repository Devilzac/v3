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

<script lang="ts" src="./MyCounterScript2">
</script>

