import { createApp } from 'vue';
import App from './App.vue';
import stroe , { key }from "./store";
import router from "./router"



createApp(App).use(stroe,key).use(router).mount('#app')


