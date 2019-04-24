import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import font awesome bits
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
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
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
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
} from "@fortawesome/free-brands-svg-icons";
// import swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

import VeeValidate from "vee-validate";

// import scss
import "@/assets/css/app.scss";

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
  faChevronLeft
);
// use font-awesome-icon for icons
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
