System.register(["./element-plus-legacy.js","./message-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,n,r,m,o,c,d,g;return{setters:[e=>{a=e.q,s=e.r,t=e.f,u=e.p},e=>{n=e.c},e=>{r=e._},e=>{m=e.o,o=e.c,c=e.g,d=e._,g=e.a0},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",r({name:"message-add",data:()=>({params:{name:"",tel:"",company:"",content:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await n(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,n,r,p,i,y){const j=a,f=s,b=t,h=u;return m(),o("div",l,[c(h,{ref:"params",model:e.params,"label-width":"84px",class:"mt-20"},{default:d((()=>[c(f,{label:"姓名",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}],prop:"name"},{default:d((()=>[c(j,{modelValue:e.params.name,"onUpdate:modelValue":n[0]||(n[0]=l=>e.params.name=l)},null,8,["modelValue"])])),_:1}),c(f,{label:"手机号"},{default:d((()=>[c(j,{modelValue:e.params.tel,"onUpdate:modelValue":n[1]||(n[1]=l=>e.params.tel=l)},null,8,["modelValue"])])),_:1}),c(f,{label:"公司名称"},{default:d((()=>[c(j,{modelValue:e.params.company,"onUpdate:modelValue":n[2]||(n[2]=l=>e.params.company=l)},null,8,["modelValue"])])),_:1}),c(f,{label:"留言内容",prop:"content",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:d((()=>[c(j,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.params.content,"onUpdate:modelValue":n[3]||(n[3]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1}),c(f,null,{default:d((()=>[c(b,{type:"primary",onClick:n[4]||(n[4]=e=>y.submit("params"))},{default:d((()=>[g("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]))}}}));
