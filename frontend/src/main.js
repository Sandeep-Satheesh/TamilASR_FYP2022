import Vue from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'
import FileUpload from './components/FileUpload.vue'
import NotFound from './components/NotFound.vue'
//import IntroductionSection from './components/IntroductionSection.vue'

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/fileUpload': FileUpload
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(this.ViewComponent)
})