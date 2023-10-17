import { createApp } from 'vue' // importa la funcion createApp de vue para crear la app 
import './style.css' // importa el css para que se aplique a toda la app
import App from './App.vue' // importa el componente App.vue que es el componente principal de la app

createApp(App).mount('#app') // mount the app, se usa el # para indicar el id del elemento html
