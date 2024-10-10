
const { createApp, ref } = Vue;

const app = createApp({
    // template:   `
    //     <h1>{{ message }}</h1>
    //     <p> {{ autor }} </p>
    // `,
    setup(){
        const message = ref("I'm Batman");
        const autor = ref("- Bruce Wayne");

        setTimeout(()=>{
            message.value = "Soy Goku"
            autor.value = "Goku"
        }, 1000)


         return {
            message,
            autor,
         }
    }
});
app.mount('#myApp')