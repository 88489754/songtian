(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"/Qvz":function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return r}));var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",{attrs:{header:"短信配置"}}),e._v(" "),t("Card",{attrs:{header:"SDK AppID:"}},[t("CardRow",{attrs:{description:"SDK AppID是短信应用的唯一标识，调用短信API接口时，需要提供该参数"}},[t("el-input",{attrs:{clearable:""},model:{value:e.sdkAppId,callback:function(t){e.sdkAppId=t},expression:"sdkAppId"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"App Key:"}},[t("CardRow",{attrs:{description:"App Key：App Key是用来校验短信发送合法性的密码，与SDK AppID对应"}},[t("el-input",{attrs:{clearable:""},model:{value:e.appKey,callback:function(t){e.appKey=t},expression:"appKey"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"短信验证码使用模板ID："}},[t("CardRow",{attrs:{description:"填写在腾讯云已配置并审核通过的短信验证码的模板的ID"},scopedSlots:e._u([{key:"tail",fn:function(){return[t("a",{attrs:{href:"https://cloud.tencent.com/product/sms",target:"_blank"}},[e._v("未申请？点此申请")])]},proxy:!0}])},[t("el-input",{attrs:{clearable:""},model:{value:e.smsId,callback:function(t){e.smsId=t},expression:"smsId"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"短信签名："}},[t("CardRow",{attrs:{description:"填写在腾讯云已配置并审核通过的短信签名内容"}},[t("el-input",{attrs:{clearable:""},model:{value:e.smsSignature,callback:function(t){e.smsSignature=t},expression:"smsSignature"}})],1)],1),e._v(" "),t("Card",{staticClass:"footer-btn"},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.Submission}},[e._v("提交")])],1)],1)},r=[]},H7jw:function(e,t,s){"use strict";s.r(t);var a=s("/Qvz"),r=s("hgJm");for(var n in r)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(n);var u=s("KHd+"),d=Object(u.a)(r.default,a.a,a.b,!1,null,null,null);t.default=d.exports},hgJm:function(e,t,s){"use strict";s.r(t);var a=s("w3Ge"),r=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return a[e]}))}(n);t.default=r.a},w3Ge:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(s("QbLZ"));s("lpfh");var r=n(s("z5fL"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"tencent-cloud-config-sms-view"},r.default)},z5fL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(s("4gYi")),r=n(s("pNQN"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{sdkAppId:"",appKey:"",smsId:"",smsSignature:""}},created:function(){var e=this.$route.query.type;this.type=e,this.tencentCloudSms()},methods:{tencentCloudSms:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var s=t.Data;e.sdkAppId=s.qcloud.qcloudSmsAppId,e.appKey=s.qcloud.qcloudSmsAppKey,e.smsId=s.qcloud.qcloudSmsTemplateId,e.smsSignature=s.qcloud.qcloudSmsSign}}))},Submission:function(){var e=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"qcloud_sms_app_id",value:this.sdkAppId,tag:"qcloud"},{key:"qcloud_sms_app_key",value:this.appKey,tag:"qcloud"},{key:"qcloud_sms_template_id",value:this.smsId,tag:"qcloud"},{key:"qcloud_sms_sign",value:this.smsSignature,tag:"qcloud"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"})}}))}},components:{Card:a.default,CardRow:r.default}}}}]);