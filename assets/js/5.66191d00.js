(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{361:function(t,e,n){},362:function(t,e,n){},363:function(t,e,n){},364:function(t,e,n){},365:function(t,e,n){},369:function(t,e,n){"use strict";n(361)},370:function(t,e,n){"use strict";n(362)},371:function(t,e,n){"use strict";n(363)},372:function(t,e,n){"use strict";n(364)},373:function(t,e,n){"use strict";n(365)},376:function(t,e,n){"use strict";var i={name:"LemonSider",data:function(){return{visible:!0}},methods:{}},s=(n(370),n(57)),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"sider"},[this._t("default")],2)])}),[],!1,null,"5b003c3b",null);e.a=a.exports},377:function(t,e,n){"use strict";n(114),n(8),n(115),n(85);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"LemonSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(372),n(57)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"14c51ac0",null);e.a=a.exports},379:function(t,e,n){"use strict";n(369);var i=n(57),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"f0e72a20",null);e.a=s.exports},380:function(t,e,n){"use strict";n(371);var i=n(57),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"7383ca26",null);e.a=s.exports},381:function(t,e,n){"use strict";n(373);var i=n(57),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"414cb13c",null);e.a=s.exports},423:function(t,e,n){},483:function(t,e,n){"use strict";n(423)},517:function(t,e,n){"use strict";n.r(e);var i=n(379),s=n(376),a=n(380),c=n(377),l=n(381),o={name:"LayoutDemo2",components:{"l-header":i.a,"l-footer":l.a,"l-sider":s.a,"l-content":a.a,"l-layout":c.a}},u=(n(483),n(57)),r=Object(u.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"16px"}},[e("l-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("l-header",{staticStyle:{height:"50px",background:"#f2d901"}},[this._v("\n      header\n    ")]),this._v(" "),e("l-layout",[e("l-sider",{staticStyle:{height:"100px",background:"#f2e6c2",width:"200px",color:"black"}},[this._v("\n        sider\n      ")]),this._v(" "),e("l-content",{staticStyle:{height:"100px",background:"#d9a714"}},[this._v("\n        content\n      ")])],1),this._v(" "),e("l-footer",{staticStyle:{height:"50px",background:"#f2d901"}},[this._v("\n      footer\n    ")])],1)],1)}),[],!1,null,"0634d236",null);e.default=r.exports}}]);