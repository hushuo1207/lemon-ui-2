(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{361:function(t,n,e){},362:function(t,n,e){},363:function(t,n,e){},364:function(t,n,e){},365:function(t,n,e){},369:function(t,n,e){"use strict";e(361)},370:function(t,n,e){"use strict";e(362)},371:function(t,n,e){"use strict";e(363)},372:function(t,n,e){"use strict";e(364)},373:function(t,n,e){"use strict";e(365)},376:function(t,n,e){"use strict";var s={name:"LemonSider",data:function(){return{visible:!0}},methods:{}},i=(e(370),e(57)),a=Object(i.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"sider"},[this._t("default")],2)])}),[],!1,null,"5b003c3b",null);n.a=a.exports},377:function(t,n,e){"use strict";e(114),e(8),e(115),e(85);var s={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"LemonSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(e(372),e(57)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"14c51ac0",null);n.a=a.exports},379:function(t,n,e){"use strict";e(369);var s=e(57),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"f0e72a20",null);n.a=i.exports},380:function(t,n,e){"use strict";e(371);var s=e(57),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"7383ca26",null);n.a=i.exports},381:function(t,n,e){"use strict";e(373);var s=e(57),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"414cb13c",null);n.a=i.exports},424:function(t,n,e){},484:function(t,n,e){"use strict";e(424)},518:function(t,n,e){"use strict";e.r(n);var s=e(379),i=e(376),a=e(380),c=e(377),u=e(381),o={name:"LayoutDemo",components:{"l-header":s.a,"l-footer":u.a,"l-sider":i.a,"l-content":a.a,"l-layout":c.a}},r=(e(484),e(57)),l=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{"padding-top":"16px"}},[n("l-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("l-header",{staticStyle:{height:"50px",background:"#f2d901"}},[this._v("\n      header\n    ")]),this._v(" "),n("l-content",{staticStyle:{height:"100px",background:"#d9a714"}},[this._v("\n      content\n    ")]),this._v(" "),n("l-footer",{staticStyle:{height:"50px",background:"#f2d901"}},[this._v("\n      footer\n    ")])],1)],1)}),[],!1,null,"091b54d0",null);n.default=l.exports}}]);