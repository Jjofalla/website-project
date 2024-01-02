// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
// import router from './router'

library.add(fas);

const pinia = createPinia();
const app = createApp(App);

// app.use(router)
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
