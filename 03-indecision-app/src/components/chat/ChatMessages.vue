<template>
      <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">

          <!-- Messages go here -->
          <ChatBubble v-for="message in messages" v-bind="message" :key="message.id" />


        </div>
      </div>
</template>

<script lang="ts" setup>
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();
const chatRef = ref<HTMLDivElement|null>(null);
watch( messages, ()=>{
  setTimeout(()=>{    
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    })
  },100)
} )
</script>