import yesnoApi from '@/api/yesno';
import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { MessageResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onNewMessage = async (texto: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: texto,
    });
    await sleep(1.5);
    if (texto.endsWith('?')) messageResponse();
  };

  const messageResponse = async () => {
    try {
      const { data } = await yesnoApi.get<MessageResponse>('');
      messages.value.push({
        id: new Date().getTime() + 1,
        itsMine: false,
        message: data.answer,
        image: data.image,
      });
    } catch (error) {
      console.log('error al hacer la peticion: ', error);
    }
  };
  return {
    //Properties
    messages,
    // Methods
    onNewMessage,
  };
};
