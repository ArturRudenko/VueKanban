import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router/router";
import seeder from "@/utils/seeder";
import './assets/styles/style.scss'
seeder.run(store);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
