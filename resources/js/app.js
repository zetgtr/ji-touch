import { createApp } from 'vue';
import App from '../vue/src/App.vue';
import { router } from '../vue/src/router';
import store from '../vue/src/store';
import components from '../vue/src/components/UI';

const app = createApp(App)

app.config.globalProperties.$replaceNewLines = function (string) {
  return string.replace(/\/\/n/g, '<br>');
}


app.use(store).use(router).mount('#app');
