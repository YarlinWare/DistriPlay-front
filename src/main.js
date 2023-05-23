import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Vuetify);

app.mount('#app');