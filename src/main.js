import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router/router";
import './assets/styles/style.scss'


new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
