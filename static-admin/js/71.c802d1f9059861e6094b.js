(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"3DGB":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this,n=t._self._c;return n("div",[n("Card",{attrs:{header:"PC端微信授权登录"}}),t._v(" "),n("Card",{attrs:{header:"APPID："}},[n("CardRow",{attrs:{description:"填写申请PC端微信授权登录后，你获得的APPID"},scopedSlots:t._u([{key:"tail",fn:function(){return[n("span",{staticStyle:{color:"#336699"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[n("el-input")],1)],1),t._v(" "),n("Card",{attrs:{header:"App secret："}},[n("CardRow",{attrs:{description:"填写申请PC端微信授权登录后，你获得的App secret"}},[n("el-input")],1)],1),t._v(" "),n("Card",{staticClass:"footer-btn"},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(n){return t.$router.push({path:"/admin/worth-mentioning-set"})}}},[t._v("提交")])],1)],1)},i=[]},"773k":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(e("4gYi")),i=a(e("pNQN"));function a(t){return t&&t.__esModule?t:{default:t}}n.default={data:function(){return{loginStatus:"default",tableData:[{name:"H5微信授权登录",type:"h5",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!0,icon:"iconH"},{name:"小程序微信授权登录",type:"applets",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!1,icon:"iconxiaochengxu"},{name:"PC端微信扫码登录",type:"pc",description:"用户在PC的网页使用微信扫码登录",status:!0,icon:"iconweixin"}]}},methods:{configClick:function(t){this.$router.push({path:"/admin/worth-mentioning/config",type:"h5"})}},components:{Card:r.default,CardRow:i.default}}},JX18:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(e("QbLZ"));e("lpfh");var i=a(e("773k"));function a(t){return t&&t.__esModule?t:{default:t}}n.default=(0,r.default)({name:"worth-mentioning-config-pc-wx-view"},i.default)},YdTU:function(t,n,e){"use strict";e.r(n);var r=e("3DGB"),i=e("ww6h");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);var u=e("KHd+"),o=Object(u.a)(i.default,r.a,r.b,!1,null,null,null);n.default=o.exports},ww6h:function(t,n,e){"use strict";e.r(n);var r=e("JX18"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n.default=i.a}}]);