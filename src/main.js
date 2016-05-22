import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NEW from './components/New.vue'
import VueResource from 'vue-resource'
import 'jquery'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/news/:mid': {
    name: 'mid',
    component: NEW
  }
})

router.start(App, '#app')
