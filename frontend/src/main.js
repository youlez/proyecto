import { createApp } from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(LoadScript).mount('#app');

App.loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js");
App.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js");

