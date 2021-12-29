import Vue from "vue";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Icon from "./Icon.vue";

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-icon", Icon);

new Vue({
  el: "#app",
  data: {
      loading1: false,
      loading2: false,
      loading3: false,
  }
});
