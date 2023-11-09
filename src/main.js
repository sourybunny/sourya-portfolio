import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted(){
    AOS.init({
    })
  },
}).$mount('#app')
