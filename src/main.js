import './assets/style.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
// import 'dotenv/config';

const app = createApp(App);
app.use(Toast);
app.mount('#app');
