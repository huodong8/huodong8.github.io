webpackJsonp([3],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r=n("woOf"),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},EWfp:function(t,e,n){"use strict";function r(t){n("Qb3Q")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),o=n.n(i),a=n("Dd8w"),s=n.n(a),c=(n("oPmM"),n("tCmt")),u=n("NYxO"),f={name:"app",data:function(){return{kefuLink:this.$utils.isPC()?config.kefuLink_pc:config.kefuLink_h5,regLink:this.$utils.isPC()?config.regLink_pc:config.regLink_h5,qqKefu:"",qqList:[],kefu_window_state:0,isPC:this.$utils.isPC(),swiperOption:{autoplay:!0,speed:300,observer:!0,width:window.innerWidth,on:{resize:function(){this.params.width=window.innerWidth,this.update()}},effect:"fade",fadeEffect:{crossFade:!0}}}},computed:s()({},Object(u.mapState)(["config"]),{swiper:function(){return this.$refs.mySwiper?this.$refs.mySwiper.$swiper:null},kefu_class:function(){return{setHide:0===this.kefu_window_state,animate__zoomIn:1===this.kefu_window_state,animate__zoomOut:2===this.kefu_window_state}}}),created:function(){var t=this;this.config.qq.filter(function(t){return t.length>0}).forEach(function(e){var n={};n.num=e,t.isPC?n.link="http://wpa.qq.com/msgrd?v=3&uin="+e+"&site=qq&menu=yes":n.link="mqqwpa://im/chat?chat_type=wpa&uin="+e+"&&version=1&src_type=web&web_src=oicqzone.com",t.qqList.push(JSON.parse(o()(n)))})},mounted:function(){var t=this;this.$globalClick(function(e){var n=e.target.id;e.target.innerHTML;"kefu_img"!==n&&1===t.kefu_window_state&&(t.kefu_window_state=2)})},methods:{open_kefu_window:function(){this.kefu_window_state=1},formatQQ:function(t){return t.replace(/^(\d+)\d{3}(\d+)/,"$1***$2")},copyText:function(t){var e=this,n=new this.$ClipboardJS("#"+t);n.on("success",function(){e.$message("Toast","已复制好,可贴粘",1500,"middle","icon-success"),n.destroy()}),n.on("error",function(){e.$ClipboardJS.isSupported()?e.$message("Toast","已复制好,可贴粘.",1500,"middle","icon-success"):e.$message("Toast","系统不支持自动复制功能 ,请手动复制",1500,"middle","icon-success"),n.destroy()})}},components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide}},_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[t.isPC?t._e():r("div",{staticClass:"m_only",attrs:{id:"m_only"}},[r("article",{attrs:{id:"article"}},[r("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[r("swiper-slide",[r("img",{attrs:{src:n("lsw9")}})])],1),t._v(" "),r("main",[r("section",{staticClass:"title"},[r("h1",[t._v(t._s(t.config.title))]),t._v(" "),r("h2",[t._v("")])]),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"tableBox"},[r("h1",[t._v("周复存活动")]),t._v(" "),r("h2",[t._v(t._s(t.config.title)+"活动时间：10月1日-10月30")]),t._v(" "),r("table",{staticStyle:{"border-collapse":"collapse"},attrs:{width:"100%"}},[t._m(0),t._v(" "),r("tbody",t._l(t.config.table,function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e[0]))]),t._v(" "),r("td",{staticClass:"red"},[t._v(t._s(e[1]))]),t._v(" "),0===n?r("td",{staticClass:"rowspan",attrs:{rowspan:t.config.table.length}},[t._v(t._s(t.config.require))]):t._e()])}),0)]),t._v(" "),r("h3",{staticClass:"red"},[t._v("*联系客服领取18体验彩金，更多活动请咨询客服")]),t._v(" "),r("h4",[r("img",{staticClass:"logoMain",attrs:{src:n("T9tn")}})])])])]),t._v(" "),r("div",{staticClass:"kefu_window animate__animated animate__repeat-1",class:t.kefu_class,attrs:{id:"kefu_window"}},[r("p",[r("span",[t._v("24x7 在线客服")]),t._v(" "),t.kefuLink?r("a",{attrs:{href:t.kefuLink,target:"_blank"}},[t._v("进入咨询")]):t._e()]),t._v(" "),t._l(t.qqList,function(e,n){return r("div",{key:n},[r("span",[t._v("客服QQ")]),t._v(" "),r("a",{attrs:{id:"qqNum"+n,href:e.link,target:"_blank"}},[t._v("\n            "+t._s(e.num)+"\n          ")]),t._v(" "),r("span",{attrs:{id:"copyQQ","data-clipboard-text":e.num},on:{click:function(e){return t.copyText("copyQQ")}}},[t._v("点击复制")])])})],2)],1),t._v(" "),r("footer",[r("div",{staticClass:"footTop"},[r("a",{staticClass:"regLink  activeEff animate__animated animate__heartBeat animate__repeat-3",attrs:{href:t.regLink,target:"_blank"}},[t._v("立即注册")]),t._v(" "),r("a",{staticClass:"qqKefu activeEff animate__animated animate__heartBeat animate__repeat-3",attrs:{id:"kefu_img",target:"_blank"},on:{click:t.open_kefu_window}},[t._v("QQ客服")])]),t._v(" "),r("div",{staticClass:"footBottom ripple"},[r("img",{staticClass:"logo_bottom",attrs:{src:n("kiv+")}}),t._v(" "),r("span",{staticClass:"sport"},[t._v("专业电竞投注领跑者")])])]),t._v(" "),r("a",{staticClass:"kefu",attrs:{id:"kefu",target:"_blank",href:t.kefuLink}},[r("img",{staticClass:"activeEff animate__animated animate__bounceInLeft ",attrs:{src:n("uhBq"),alt:""}})])]),t._v(" "),t.isPC?r("div",{staticClass:"pc_only",attrs:{id:"pc_only"}},[r("article",{attrs:{id:"article"}},[r("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[r("swiper-slide",[r("img",{attrs:{src:n("uWMO")}})])],1),t._v(" "),r("main",[r("section",{staticClass:"title"},[r("h1",[t._v(t._s(t.config.title))]),t._v(" "),r("h2",[t._v("")])]),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"tableBox"},[r("h1",[t._v("周复存活动")]),t._v(" "),r("h2",[t._v(t._s(t.config.title)+"活动时间：10月1日-10月30")]),t._v(" "),r("table",{staticStyle:{"border-collapse":"collapse"},attrs:{width:"100%"}},[t._m(1),t._v(" "),r("tbody",t._l(t.config.table,function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e[0]))]),t._v(" "),r("td",{staticClass:"red"},[t._v(t._s(e[1]))]),t._v(" "),0===n?r("td",{staticClass:"rowspan",attrs:{rowspan:t.config.table.length}},[t._v(t._s(t.config.require))]):t._e()])}),0)]),t._v(" "),r("h3",{staticClass:"red"},[t._v("*联系客服领取18体验，更多活动请咨询客服")]),t._v(" "),r("h4",[r("img",{staticClass:"logoMain",attrs:{src:n("gnsW")}})])])])]),t._v(" "),r("div",{staticClass:"kefu_window animate__animated animate__repeat-1",class:t.kefu_class,attrs:{id:"kefu_window"}},[r("p",[r("span",[t._v("24x7 在线客服")]),t._v(" "),t.kefuLink?r("a",{attrs:{href:t.kefuLink,target:"_blank"}},[t._v("进入咨询")]):t._e()]),t._v(" "),t._l(t.qqList,function(e,n){return r("div",{key:n},[r("span",[t._v("客服QQ")]),t._v(" "),r("a",{attrs:{id:"qqNum"+n,href:e.link,target:"_blank"}},[t._v("\n            "+t.formatQQ(e.num))+"\n          ")]),t._v(" "),r("span",{attrs:{id:"copyQQ","data-clipboard-text":e.num},on:{click:function(e){return t.copyText("copyQQ")}}},[t._v("点击复制")])])})],2)],1),t._v(" "),r("footer",[r("img",{staticClass:"logo_bottom",attrs:{src:n("vMgM")}}),t._v(" "),r("a",{staticClass:"regLink activeEff animate__animated animate__heartBeat animate__repeat-3",attrs:{href:t.regLink,target:"_blank"}},[t._v("立即注册")]),t._v(" "),r("a",{staticClass:"qqKefu activeEff animate__animated animate__heartBeat animate__repeat-3",attrs:{id:"kefu_img",target:"_blank"},on:{click:t.open_kefu_window}},[t._v("QQ客服")]),t._v(" "),r("span",{staticClass:"sport"},[t._v("专业电竞投注领跑者")])]),t._v(" "),r("a",{staticClass:"kefu",attrs:{id:"kefu",target:"_blank",href:t.kefuLink}},[r("img",{staticClass:"activeEff animate__animated animate__bounceInLeft ",attrs:{src:n("mSHL"),alt:""}})])]):t._e()])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("首累存款")]),t._v(" "),n("th",[t._v("赠送彩金")]),t._v(" "),n("th",[t._v("提款要求")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("首累存款")]),t._v(" "),n("th",[t._v("赠送彩金")]),t._v(" "),n("th",[t._v("提款要求")])])])}],p={render:_,staticRenderFns:l},v=p,d=n("VU/8"),m=r,h=d(f,v,!1,m,null,null);e.default=h.exports},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},Qb3Q:function(t,e){},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},T9tn:function(t,e,n){t.exports=n.p+"static/img/logo_main.c41f2c0.png"},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},To3L:function(t,e,n){"use strict";var r=n("+E39"),i=n("lktj"),o=n("1kS7"),a=n("NpIQ"),s=n("sB3e"),c=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=s(t),u=arguments.length,f=1,_=o.f,l=a.f;u>f;)for(var p,v=c(arguments[f++]),d=_?i(v).concat(_(v)):i(v),m=d.length,h=0;m>h;)p=d[h++],r&&!l.call(v,p)||(n[p]=v[p]);return n}:u},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},"VU/8":function(t,e){t.exports=function(t,e,n,r,i,o){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):r&&(f=r),f){var _=u.functional,l=_?u.render:u.beforeCreate;_?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:a,exports:s,options:u}}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},e8AB:function(t,e,n){var r=n("FeBl"),i=n("7KvD"),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),o=n("MmMw"),a=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},gnsW:function(t,e,n){t.exports=n.p+"static/img/logo_main.7080d0a.png"},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("+ZMJ"),a=n("hJx8"),s=n("D2L2"),c=function(t,e,n){var u,f,_,l=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,m=t&c.B,h=t&c.W,g=p?i:i[e]||(i[e]={}),w=g.prototype,k=p?r:v?r[e]:(r[e]||{}).prototype;p&&(n=e);for(u in n)(f=!l&&k&&void 0!==k[u])&&s(g,u)||(_=f?k[u]:n[u],g[u]=p&&"function"!=typeof k[u]?n[u]:m&&f?o(_,r):h&&k[u]==_?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(_):d&&"function"==typeof _?o(Function.call,_):_,d&&((g.virtual||(g.virtual={}))[u]=_,t&c.R&&w&&!w[u]&&a(w,u,_)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"kiv+":function(t,e,n){t.exports=n.p+"static/img/logo_bottom.0775423.png"},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},lsw9:function(t,e,n){t.exports=n.p+"static/img/bg.831bd50.jpg"},mSHL:function(t,e,n){t.exports=n.p+"static/img/service.781f4ca.png"},oPmM:function(t,e){},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},uWMO:function(t,e,n){t.exports=n.p+"static/img/bg.ca844db.jpg"},uhBq:function(t,e,n){},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),f=o(a,u);if(t&&n!=n){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},vMgM:function(t,e,n){t.exports=n.p+"static/img/logo_bottom.2d200aa.png"},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});