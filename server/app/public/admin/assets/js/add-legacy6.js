System.register(["./.pnpm-legacy.js","./friendlink-legacy.js","./index-legacy.js"],(function(e,a){"use strict";var l,s,t,r,m,u,n,d,o,i,c;return{setters:[e=>{l=e._,s=e.o,t=e.b,r=e.a,m=e.w,u=e.h,n=e.a1,d=e.a2,o=e.x,i=e.a0},e=>{c=e.c},null],execute:function(){const a={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",l({name:"friendlink-add",data:()=>({params:{title:"",link:"",sort:0},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await c(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},[["render",function(e,l,c,p,g,f){const h=n,b=d,y=o,V=i;return s(),t("div",a,[r(V,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:m((()=>[r(b,{label:"标题",prop:"title"},{default:m((()=>[r(h,{modelValue:e.params.title,"onUpdate:modelValue":l[0]||(l[0]=a=>e.params.title=a)},null,8,["modelValue"])])),_:1}),r(b,{label:"链接"},{default:m((()=>[r(h,{modelValue:e.params.link,"onUpdate:modelValue":l[1]||(l[1]=a=>e.params.link=a)},null,8,["modelValue"])])),_:1}),r(b,{label:"排序"},{default:m((()=>[r(h,{modelValue:e.params.sort,"onUpdate:modelValue":l[2]||(l[2]=a=>e.params.sort=a)},null,8,["modelValue"])])),_:1}),r(b,null,{default:m((()=>[r(y,{type:"primary",onClick:l[3]||(l[3]=e=>f.submit("params"))},{default:m((()=>[u("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
