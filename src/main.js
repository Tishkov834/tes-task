import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import tooltipDirective from '@/directives/tooltipDirective';
import App from '@/components/App';

const app = createApp(App);

app.use(VueTheMask);
app.use(Toast);
tooltipDirective(app);
app.mount('#app');
