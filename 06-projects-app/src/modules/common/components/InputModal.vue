<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title ?? 'ingrese un titulo'}}</h3>
      <p v-if="subTitle" class="py-4">{{ subTitle ?? 'ingrese una descripcion' }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            type="text"
            v-model="inputValue"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div v-if="open" class="modal-backdrop fixed top-0 left-0 z-10 bg-black w-screen h-screen opacity-40"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  title: string;
  subTitle?: string;
  open: boolean;
  placeholder?: string;
}
const inputValue = ref('');

const props = defineProps<Props>();
const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const submitValue = () => {
  if (!inputValue.value) {
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};


const closeModal = () => {

  emits('close');
};
</script>
