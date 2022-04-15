import { createApp } from 'vue'
import { config } from "vue";
import App from './App.vue'

createApp(App).mount('#app')

config.devtools = true