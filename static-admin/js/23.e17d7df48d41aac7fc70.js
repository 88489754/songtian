(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"14Xm":function(t,e,n){t.exports=n("u938")},"4d7F":function(t,e,n){t.exports={default:n("aW7e"),__esModule:!0}},"8gHz":function(t,e,n){var r=n("5K7Z"),i=n("eaoh"),o=n("UWiX")("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[o])?e:i(n)}},"9oFt":function(t,e,n){"use strict";n.r(e);var r=n("K4W3"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=i.a},"Bg+l":function(t,e,n){"use strict";n.r(e);var r=n("Bhlm"),i=n("9oFt");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n("KHd+"),a=Object(s.a)(i.default,r.a,r.b,!1,null,null,null);e.default=a.exports},Bhlm:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-seo"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#fff","text-color":"#333333","active-text-color":"#336699"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[t._v("站点地图")]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[t._v("静态输出(SSR)")]),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[t._v("使用说明")])],1),t._v(" "),e("Card",{staticClass:"site-seo-explain"},[e("div",{staticClass:"site-seo-explain__box"},[e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("\n        目前"),e("a",{attrs:{href:"https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap",target:"_blank"}},[t._v("站点地图")]),t._v("为系统自动生成，暂不支持Changefreg(更新频率)、Priority(权重)等参数的配置；\n      ")]),t._v(" "),e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("预设生成规则如下：")]),t._v(" "),e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("\n        ·\n        以常驻入口、站点分类、话题、用户拆分创建子Sitemaps，并进行gzip压缩，同时创建"),e("a",{attrs:{href:"https://developers.google.com/search/docs/advanced/sitemaps/large-sitemaps",target:"_blank"}},[t._v("站点地图索引")]),t._v("(Sitemap Index)；\n      ")]),t._v(" "),e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("\n        · lastmod的值取帖子或用户的updatetime；\n      ")]),t._v(" "),e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("\n        · changefreg值为weekly，priority值为0.8；\n      ")]),t._v(" "),e("p",{staticClass:"site-seo-explain__box-introduce"},[t._v("\n        · 每日凌晨3点定时任务自动更新。\n      ")])])]),t._v(" "),e("Card",[e("div",{staticClass:"site-seo-address"},[e("div",{staticClass:"site-seo-address__title"},[e("p",{staticClass:"site-seo-address__title-option"},[t._v("站点地图")])]),t._v(" "),"seat"===t.optionType?e("div",{staticClass:"site-seo-address__textarea"},[e("el-input",{ref:"mapText",attrs:{type:"textarea",autosize:{minRows:10,maxRows:20}},model:{value:t.mapText,callback:function(e){t.mapText=e},expression:"mapText"}})],1):t._e()])]),t._v(" "),e("Card",{staticClass:"footer-btn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.optionBtn}},[t._v("复制")])],1)],1)},i=[]},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("4d7F"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default((function(t,n){return function r(i,s){try{var a=e[i](s),c=a.value}catch(t){return void n(t)}if(!a.done)return o.default.resolve(c).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(c)}("next")}))}}},EXMj:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"JMW+":function(t,e,n){"use strict";var r,i,o,s,a=n("uOPS"),c=n("5T2Y"),u=n("2GTP"),f=n("QMMT"),l=n("Y7ZC"),d=n("93I4"),v=n("eaoh"),p=n("EXMj"),h=n("oioR"),m=n("8gHz"),_=n("QXhf").set,x=n("q6LJ")(),g=n("ZW5q"),y=n("RDmV"),w=n("vBP9"),T=n("zXhZ"),b=c.TypeError,C=c.process,P=C&&C.versions,j=P&&P.v8||"",R=c.Promise,M="process"==f(C),W=function(){},E=i=g.f,k=!!function(){try{var t=R.resolve(1),e=(t.constructor={})[n("UWiX")("species")]=function(t){t(W,W)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(W)instanceof e&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),X=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},Z=function(t,e){if(!t._n){t._n=!0;var n=t._c;x((function(){for(var r=t._v,i=1==t._s,o=0,s=function(e){var n,o,s,a=i?e.ok:e.fail,c=e.resolve,u=e.reject,f=e.domain;try{a?(i||(2==t._h&&B(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),s=!0)),n===e.promise?u(b("Promise-chain cycle")):(o=X(n))?o.call(n,c,u):c(n)):u(r)}catch(t){f&&!s&&f.exit(),u(t)}};n.length>o;)s(n[o++]);t._c=[],t._n=!1,e&&!t._h&&O(t)}))}},O=function(t){_.call(c,(function(){var e,n,r,i=t._v,o=S(t);if(o&&(e=y((function(){M?C.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=M||S(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},S=function(t){return 1!==t._h&&0===(t._a||t._c).length},B=function(t){_.call(c,(function(){var e;M?C.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},J=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),Z(e,!0))},Y=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=X(t))?x((function(){var r={_w:n,_d:!1};try{e.call(t,u(Y,r,1),u(J,r,1))}catch(t){J.call(r,t)}})):(n._v=t,n._s=1,Z(n,!1))}catch(t){J.call({_w:n,_d:!1},t)}}};k||(R=function(t){p(this,R,"Promise","_h"),v(t),r.call(this);try{t(u(Y,this,1),u(J,this,1))}catch(t){J.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("XJU/")(R.prototype,{then:function(t,e){var n=E(m(this,R));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?C.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&Z(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(Y,t,1),this.reject=u(J,t,1)},g.f=E=function(t){return t===R||t===s?new o(t):i(t)}),l(l.G+l.W+l.F*!k,{Promise:R}),n("RfKB")(R,"Promise"),n("TJWN")("Promise"),s=n("WEpk").Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(a||!k),"Promise",{resolve:function(t){return T(a&&this===s?R:this,t)}}),l(l.S+l.F*!(k&&n("TuGD")((function(t){R.all(t).catch(W)}))),"Promise",{all:function(t){var e=this,n=E(e),r=n.resolve,i=n.reject,o=y((function(){var n=[],o=0,s=1;h(t,!1,(function(t){var a=o++,c=!1;n.push(void 0),s++,e.resolve(t).then((function(t){c||(c=!0,n[a]=t,--s||r(n))}),i)})),--s||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=E(e),r=n.reject,i=y((function(){h(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},K4W3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("QbLZ"));n("lpfh");var i=o(n("Y2Lm"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"site-seo-set"},i.default)},MCSJ:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},PBE1:function(t,e,n){"use strict";var r=n("Y7ZC"),i=n("WEpk"),o=n("5T2Y"),s=n("8gHz"),a=n("zXhZ");r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}})},"Q/yX":function(t,e,n){"use strict";var r=n("Y7ZC"),i=n("ZW5q"),o=n("RDmV");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},QXhf:function(t,e,n){var r,i,o,s=n("2GTP"),a=n("MCSJ"),c=n("MvwC"),u=n("Hsns"),f=n("5T2Y"),l=f.process,d=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,h=f.Dispatch,m=0,_={},x=function(){var t=+this;if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},g=function(t){x.call(t.data)};d&&v||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},v=function(t){delete _[t]},"process"==n("a0xu")(l)?r=function(t){l.nextTick(s(x,t,1))}:h&&h.now?r=function(t){h.now(s(x,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=g,r=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),x.call(t)}}:function(t){setTimeout(s(x,t,1),0)}),t.exports={set:d,clear:v}},RDmV:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},TJWN:function(t,e,n){"use strict";var r=n("5T2Y"),i=n("WEpk"),o=n("2faE"),s=n("jmDH"),a=n("UWiX")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"XJU/":function(t,e,n){var r=n("NegM");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},Y2Lm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(n("14Xm")),i=c(n("D3Ub")),o=c(n("4gYi")),s=c(n("pNQN")),a=c(n("vDqi"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Card:o.default,CardRow:s.default},data:function(){return{activeIndex:"1",indexesText:"",mapText:"",optionType:"seat",xmlText:""}},created:function(){this.xmlTextobtain()},methods:{xmlTextobtain:function(){var t=this;(0,a.default)({method:"get",url:"/static-admin/xml/sitemap.xml"}).then((function(e){e.data;t.xmlText=t.$x2js.xml2js(e.data),t.indexesTextHandle(t.xmlText.sitemapindex.sitemap)}))},indexesTextHandle:function(t){var e=this;return(0,i.default)(r.default.mark((function n(){return r.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.forEach((function(t,n){e.mapText+=t.loc.replace("https://discuz.chat",window.location.protocol+"//"+window.location.host)+"\n"}));case 2:case"end":return n.stop()}}),n,e)})))()},handleSelect:function(t){"3"===t?this.$router.push({path:"/admin/site-ssr-explain"}):"2"===t&&this.$router.push({path:"/admin/site-ssr-set"})},optionBtn:function(){this.$refs.mapText.$refs.textarea.select(),document.execCommand("Copy"),this.$message({message:"内容已复制到剪贴板",type:"success"})},jumpDataRules:function(){this.$router.push({path:"/admin/site-sort-set"})}}}},ZW5q:function(t,e,n){"use strict";var r=n("eaoh");function i(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},aW7e:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("JMW+"),n("PBE1"),n("Q/yX"),t.exports=n("WEpk").Promise},oioR:function(t,e,n){var r=n("2GTP"),i=n("sNwI"),o=n("NwJ3"),s=n("5K7Z"),a=n("tEej"),c=n("fNZA"),u={},f={};(e=t.exports=function(t,e,n,l,d){var v,p,h,m,_=d?function(){return t}:c(t),x=r(n,l,e?2:1),g=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(o(_)){for(v=a(t.length);v>g;g++)if((m=e?x(s(p=t[g])[0],p[1]):x(t[g]))===u||m===f)return m}else for(h=_.call(t);!(p=h.next()).done;)if((m=i(h,x,p.value,e))===u||m===f)return m}).BREAK=u,e.RETURN=f},q6LJ:function(t,e,n){var r=n("5T2Y"),i=n("QXhf").set,o=r.MutationObserver||r.WebKitMutationObserver,s=r.process,a=r.Promise,c="process"==n("a0xu")(s);t.exports=function(){var t,e,n,u=function(){var r,i;for(c&&(r=s.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){s.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(u)}}else n=function(){i.call(r,u)};else{var l=!0,d=document.createTextNode("");new o(u).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},u938:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("ls82"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},vBP9:function(t,e,n){var r=n("5T2Y").navigator;t.exports=r&&r.userAgent||""},zXhZ:function(t,e,n){var r=n("5K7Z"),i=n("93I4"),o=n("ZW5q");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}}}]);