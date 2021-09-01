import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import App from './App.vue';
// import App from './App-nameSpaced-Component.vue';
import App from "./09-defineExpose/index.vue";

const app = createApp(App);
app.use(ElementPlus);

app.mount('#app');
