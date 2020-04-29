import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import font awesome bits
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
// import fa icons
import {
  faEnvelope,
  faPhone,
  faCoffee,
  faMobileAlt,
  faBug,
  faTerminal,
  faUserTie,
  faSeedling,
  faSpinner,
  faGraduationCap,
  faChevronRight,
  faChevronLeft,
  faBars,
  faTimes,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import {
  faJs,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faSass,
  faGithub,
  faBootstrap,
  faChrome,
  faNpm,
  faFreeCodeCamp,
  faGoogle,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

// import scss
import '@/assets/css/app.scss'

// add icons to fa library
library.add(
  faEnvelope,
  faPhone,
  faVuejs,
  faJs,
  faCoffee,
  faHtml5,
  faCss3Alt,
  faSass,
  faGithub,
  faMobileAlt,
  faBug,
  faTerminal,
  faUserTie,
  faSeedling,
  faBootstrap,
  faChrome,
  faNpm,
  faFreeCodeCamp,
  faGoogle,
  faLinkedin,
  faSpinner,
  faGraduationCap,
  faChevronRight,
  faChevronLeft,
  faBars,
  faTimes,
  faClock
)
// use font-awesome-icon for icons
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

const VueScrollTo = require('vue-scrollto') // https://vue-scrollto.netlify.com/
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
