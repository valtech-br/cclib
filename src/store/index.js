import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import global from './modules/global'

Vue.use(Vuex)

export default new Store({
  strict: true,
  modules: {
    global
  }
})
