(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{Ff02:function(e,t,s){"use strict";s.r(t);var n=s("sbtI"),a=s.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(i);t.default=a.a},iSn7:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"config-serverless"},[t("Card",{staticClass:"config-cdn-domain"},[e._v("\n    serverless配置\n  ")]),e._v(" "),t("Card",{staticClass:"config-cdn-domain"},[t("span",{staticClass:"config-cdn-domain__name"},[e._v(" 配置地区 ")]),e._v(" "),t("el-input",{staticClass:"elinput",staticStyle:{height:"36px",width:"400px"},attrs:{size:"small"},model:{value:e.configAddress,callback:function(t){e.configAddress=t},expression:"configAddress"}})],1),e._v(" "),t("Card",{staticClass:"config-cdn-domain"},[t("span",{staticClass:"config-cdn-domain__name"},[e._v(" 配置存储桶名称 ")]),e._v("\n    discuz-ssr- \n    "),t("el-input",{staticClass:"elinput",staticStyle:{height:"36px",width:"200px"},attrs:{placeholder:"请填写appid",size:"small"},model:{value:e.configName,callback:function(t){e.configName=t},expression:"configName"}})],1),e._v(" "),e.configPatn?t("Card",{staticClass:"config-serve"},[t("span",{staticClass:"config-serve__name"},[e._v(" 返回地址 ")]),e._v(" "),t("span",[t("a",{attrs:{href:e.configPatn,target:"_blank"}},[e._v(e._s(e.configPatn))])])]):e._e(),e._v(" "),t("Card",{staticClass:"register-option-btn"},[t("el-button",{attrs:{type:"primary",loading:e.subLoading,size:"medium"},on:{click:e.submitClick}},[e._v("提交")])],1)],1)},a=[]},pPXy:function(e,t,s){"use strict";s.r(t);var n=s("iSn7"),a=s("Ff02");for(var i in a)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(i);var c=s("KHd+"),o=Object(c.a)(a.default,n.a,n.b,!1,null,null,null);t.default=o.exports},rdAg:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(s("4gYi")),a=i(s("pNQN"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{configAddress:"",configName:"",configPatn:""}},created:function(){this.tencentCloudList()},methods:{tencentCloudList:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var s=t.Data;e.configAddress=s.qcloud.qcloudSsrRegion,s.qcloud.qcloudSsrBucket&&(e.configName=s.qcloud.qcloudSsrBucket.replace("discuz-ssr-","")),e.configPatn=s.qcloud.qcloudSsrAccessPath}}))},submitClick:function(){var e=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"qcloud_ssr_region",value:this.configAddress,tag:"qcloud"},{key:"qcloud_ssr_bucket",value:"discuz-ssr-"+this.configName,tag:"qcloud"}]}}).then((function(t){if(e.subLoading=!1,t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"}),e.tencentCloudList()}})).catch((function(t){e.subLoading=!1,e.$message({showClose:!0,message:t})}))}},components:{Card:n.default,CardRow:a.default}}},sbtI:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(s("QbLZ"));s("lpfh");var a=i(s("rdAg"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)({name:"tencent-cloud-server"},a.default)}}]);