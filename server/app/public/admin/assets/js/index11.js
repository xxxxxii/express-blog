import{_ as a,q as e,o as s,b as o,g as t,a as l,h as r,w as n,Z as c,n as i,$ as p,a0 as u,Q as d,R as m,a1 as g,a2 as h,a3 as f,a4 as w,x as _}from"./.pnpm.js";import{h as y,A as C,_ as F,u as b,g as v,s as V}from"./index.js";import{c as k}from"./login_log.js";const q=e({components:{IconLogo:F},data:()=>({loginForm:{username:"",password:"",captcha:""},captcha:""}),created(){this.getCaptcha()},methods:{async getCaptcha(){try{let e=Math.random().toString().slice(4,8),s=await(a=e,y({url:"".concat(C.BASE_API,"/api/captcha?v=").concat(a),method:"get"}));this.captcha=s}catch(e){console.log(e)}var a},async login(){const a=b();this.$refs.loginForm.validate((e=>{if(!e)return!1;{if(this.loginForm.captcha.toLowerCase()!==v("captcha").toLowerCase())return i({message:"验证码错误",type:"warning"}),!1;const{username:e,password:s}=this.loginForm;a.login({username:e,password:s}).then((async a=>{if(500==a.code)return p({title:"提示",message:"登录失败",type:"error"}),!1;await k(),p({title:"提示",message:"登录成功",duration:800,type:"success"}),V("username",e),this.$router.push({path:this.$route.query.redirect||"/"})}))}}))}}}),x={class:"page"},L={class:"login"},M={class:"title row align-c"},S={class:"login-cont"},$=["innerHTML"],j=(a=>(d("data-v-8565a87e"),a=a(),m(),a))((()=>t("footer",{class:"login-footer overflow-h"},[t("p",{class:"f-13 text-c mt-10 c-fff"},[r(" Copyright © 2016-2024 "),t("a",{href:"https://www.chancms.top",class:"mr-5 c-fff",target:"_blank",title:"chanyue"},"ChanCMS"),r(" ● 位于南京 服务全国 ")])],-1)));const A=a(q,[["render",function(a,e,i,p,d,m){const y=F,C=g,b=h,v=f,V=w,k=_,q=u;return s(),o("div",x,[t("div",L,[t("h1",M,[l(y,{class:"icon"}),r(" ChanCMS后台管理系统 ")]),t("div",S,[l(q,{class:"mt-20",ref:"loginForm",model:a.loginForm,"label-width":"70px",onKeyup:c(a.login,["enter"])},{default:n((()=>[l(b,{label:"用户名",prop:"username",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{default:n((()=>[l(C,{modelValue:a.loginForm.username,"onUpdate:modelValue":e[0]||(e[0]=e=>a.loginForm.username=e)},null,8,["modelValue"])])),_:1}),l(b,{label:"密码",prop:"password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{default:n((()=>[l(C,{type:"password",modelValue:a.loginForm.password,"onUpdate:modelValue":e[1]||(e[1]=e=>a.loginForm.password=e)},null,8,["modelValue"])])),_:1}),l(b,{label:"验证码",prop:"captcha",rules:[{required:!0,message:"请输入验证码",trigger:"blur"}]},{default:n((()=>[l(V,{gutter:20},{default:n((()=>[l(v,{span:15},{default:n((()=>[l(C,{modelValue:a.loginForm.captcha,"onUpdate:modelValue":e[2]||(e[2]=e=>a.loginForm.captcha=e),placeholder:"请输入验证码"},null,8,["modelValue"])])),_:1}),l(v,{span:4},{default:n((()=>[t("span",{class:"captcha block pointer",innerHTML:a.captcha,onClick:e[3]||(e[3]=(...e)=>a.getCaptcha&&a.getCaptcha(...e))},null,8,$)])),_:1})])),_:1})])),_:1}),l(b,null,{default:n((()=>[l(k,{type:"primary",size:"large",onClick:a.login},{default:n((()=>[r(" 登录 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","onKeyup"])])]),j])}],["__scopeId","data-v-8565a87e"]]);export{A as default};
