import Vue from 'vue'
// import directives from './directives'
import components from './components'
import store from './store'

// The main CSS entry point, it will be placed in a separate file.
import './styles/main.scss'

// Bind all global directives.
// directives.forEach((directive) => Vue.directive(directive.name, directive))

// The root Vue instance.
const root = new Vue({
  components,
  store
})

// Mount the Vue application.
root.$mount('#root')
