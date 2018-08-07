import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import header from '@/components/my_header';

Vue.config.productionTip = false

Vue.use(router);
Vue.use(ElementUI);
Vue.component("myHeader", header);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
