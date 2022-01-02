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
import Tabs from "./Tabs.vue"
import TabsItem from "./TabsItem.vue"
import TabsHead from "./TabsHead.vue"
import TabsBody from "./TabsBody.vue"
import TabsPane from "./TabsPane.vue"
import Popover from "./Popover.vue"

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
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", Popover);

new Vue({
  el: "#app",
  data: {
      loading1: false,
      loading2: false,
      loading3: false,
      message: 'hai',
      selectedTab: 'sports'
  },
  created(){
    

  },
  methods: {
    yyy(){
      console.log('yyy')
    },
  //   showToas(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       // position: 'center',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },
  //   showToast(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       position: 'center',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },
  //   showToast1(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       position: 'top',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },
  //   showToast2(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       position: 'bottom',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },
  //   showToast3(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       position: 'left',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },
  //   showToast4(){
  //     this.$toast(`智商为${parseInt(Math.random() * 100)}智商欠费`, {
  //       position: 'right',
  //       enableHtml: false,  //支持html属性内嵌入标签
  //       closeButton: {
  //         text: '开挂吧',
  //         callback (){
  //           console.log('已提高')
  //         }
  //       },
  //       autoClose: 3
  //    })
  //   },

   }
});
      // this.$toast('<a href="http://qq.com">hehe</a>', {
      // enableHtml: true  //支持html属性内嵌入标签
      //   })