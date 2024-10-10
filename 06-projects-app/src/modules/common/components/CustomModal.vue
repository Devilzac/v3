<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <!-- header -->
        <slot name="header"/>
      </div>

      <div class="dpy-4">
        <!-- body -->
        <slot name="body"/>
      </div>

      <div class="dpy-4">
        <!-- footer -->
        <div class="modal-action">
          <slot name="footer"/>
        </div>
      </div>


     
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black w-screen h-screen opacity-40"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  open?: boolean;
  title: string;
  body: string;
  footer: string;
}

withDefaults(defineProps<Props>(), {
  open: false,
  title: 'Asigne un titulo',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
});
</script>

<style lang="scss" scoped></style>
