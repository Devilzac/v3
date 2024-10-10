<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
    <InputModal
      :open="modalOpen"
      @close="closeModal"
      @value="onNewValue"
      placeholder="Nombre del proyecto"
      title="Nuevo Proyecto"
      sub-title="Dale un nombre a tu proyecto"
    />
    <custom-modal :open="customModalOpen">
      <template #header>
        <h1 class="text-3xl">Titulo del modal</h1>
      </template>
      <template #body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consectetur repellat,
          voluptatibus porro, aliquid sed id animi hic blanditiis asperiores quisquam facilis illo
          esse tempore ipsa laudantium fuga. Consequatur, mollitia.
        </p>
      </template>
      <template #footer>
          <div class="flex justify-end mt-5">
            <button @click="customModalOpen=false" class="btn mr-4">Close</button>
            <button @click="customModalOpen=false"  class="btn btn-primary">Aceptar</button>
          </div>
      </template>
    </custom-modal>
    <fav-button @click="customModalOpen = true" position="bottom-left">
      <add-circle />
    </fav-button>
    <fav-button @click="modalOpen = true">
      <add-circle />
    </fav-button>
  </div>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FavButton from '@/modules/common/components/FavButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const closeModal = () => {
  modalOpen.value = false;
  console.log(modalOpen.value);
  return modalOpen.value;
};

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
