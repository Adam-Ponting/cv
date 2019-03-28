import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import font awesome bits
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import fa icons
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

import VeeValidate from "vee-validate";

// add icons to fa library
library.add(faEnvelope, faPhone);
// use font-awesome-icon for icons
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
