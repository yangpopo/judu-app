import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 路由
import store from './store'; // vuex
const app = createApp(App);
app.use(router).use(store);

app.mount('#app')
