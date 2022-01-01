import Vue from "vue";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Icon from "./Icon.vue";
import Input from "./Input.vue";
import Row from "./Row.vue";
import Col from "./Col.vue";
import Header from "./Header.vue";
import Sider from "./Sider.vue";
import Content from "./Content.vue";
import Layout from "./Layout.vue";
import Footer from "./Footer.vue"
import Toast from "./Toast.vue"
import plugin from './plugin'

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-icon", Icon);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-header", Header);
Vue.component("g-footer", Footer);
Vue.component("g-sider", Sider);
Vue.component("g-content", Content);
Vue.component("g-layout", Layout);
Vue.component("g-toast", Toast);
Vue.use(plugin)

new Vue({
  el: "#app",
  data: {
      loading1: false,
      loading2: false,
      loading3: false,
      message: 'hai',
  },
  methods: {
    // inputChange (e){
    //   console.log(e.target.value);
    // }
    showToast(){
      this.$toast('我是 message')
    }
  },
});
