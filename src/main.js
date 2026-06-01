import App from '@/App.vue';
import router from '@router/index.js';
import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@plugins/fontawesome.js';
import '@assets/tailwind/style.css';


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.use(router);

app.mount('#app');
