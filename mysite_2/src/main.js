import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);
const prerender = require('prerender-node').set('prerenderToken', 'GWDsbEPbZb2cPQicefeX').whitelisted(['/contact']);
const app = createApp(App)

app.use(router, prerender)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
