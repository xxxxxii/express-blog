System.register(["./.pnpm-legacy.js","./site-legacy2.js","./sys_app-legacy.js","./index-legacy.js"],(function(e,a){"use strict";var l,t,s,o,d,u,i,m,r,c,n,p,f,g,y,h,b,V,_,w,x,v;return{setters:[e=>{l=e._,t=e.r,s=e.o,o=e.b,d=e.a,u=e.w,i=e.h,m=e.a1,r=e.a2,c=e.af,n=e.av,p=e.i,f=e.ac,g=e.x,y=e.a0,h=e.a5,b=e.a6},e=>{V=e.s,_=e.u,w=e.a},e=>{x=e.f,v=e.u},null],execute:function(){const a={class:"mr-10 ml-10"},k={class:"mr-10 ml-10"},U={class:"mr-10 ml-10"},q={class:"pd-20 content-wrap"};e("default",l({name:"sys-index",components:{ConfigSet:l({name:"ConfigSet",data:()=>({loading:!0,set:{template:"default",maxAge:"1",dataCache:"1",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await x();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await v(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,l,b,V,_,w){const x=m,v=r,k=c,U=n,q=t("QuestionFilled"),C=p,$=f,K=g,j=y,S=h;return s(),o("div",a,[d(S,{label:"应用配置",class:"mt-20",name:"config"},{default:u((()=>[d(j,{ref:"set",model:e.set,"label-width":"120px"},{default:u((()=>[d(v,{prop:"template",label:"模板"},{default:u((()=>[d(x,{modelValue:e.set.template,"onUpdate:modelValue":l[0]||(l[0]=a=>e.set.template=a),placeholder:"默认模板default不用填写"},null,8,["modelValue"])])),_:1}),d(v,{label:"上传方式"},{default:u((()=>[d(U,{modelValue:e.set.uploadWay,"onUpdate:modelValue":l[1]||(l[1]=a=>e.set.uploadWay=a),class:"ml-4"},{default:u((()=>[d(k,{value:"1"},{default:u((()=>[i("普通")])),_:1}),d(k,{value:"2"},{default:u((()=>[i("七牛云")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(v,{label:"文件缓存"},{default:u((()=>[d(U,{modelValue:e.set.maxAge,"onUpdate:modelValue":l[2]||(l[2]=a=>e.set.maxAge=a),class:"ml-4"},{default:u((()=>[d(k,{value:"1"},{default:u((()=>[i("开启")])),_:1}),d(k,{value:"2"},{default:u((()=>[i("关闭")])),_:1})])),_:1},8,["modelValue"]),d($,{placement:"top-start",title:"静态资源缓存",width:200,trigger:"hover",content:"css,js,img等模板静态资源缓存。建议：线上环境开启"},{reference:u((()=>[d(C,{class:"ml-20 pointer c-165dff"},{default:u((()=>[d(q)])),_:1})])),_:1})])),_:1}),d(v,{label:"数据缓存"},{default:u((()=>[d(U,{modelValue:e.set.dataCache,"onUpdate:modelValue":l[3]||(l[3]=a=>e.set.dataCache=a),class:"ml-4"},{default:u((()=>[d(k,{value:"1"},{default:u((()=>[i("开启")])),_:1}),d(k,{value:"2"},{default:u((()=>[i("关闭")])),_:1})])),_:1},8,["modelValue"]),d($,{placement:"top-start",title:"全局模板数据缓存",width:200,trigger:"hover",content:"站点，分类，配置，友情链接，碎片，标签等数据。建议：线上环境开启"},{reference:u((()=>[d(C,{class:"ml-20 pointer c-165dff"},{default:u((()=>[d(q)])),_:1})])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(K,{type:"primary",onClick:l[4]||(l[4]=e=>w.submit("set"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),QiNiu:l({name:"QiNiu",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await x();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await v(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,a,l,t,c,n){const p=m,f=r,b=g,V=y,_=h;return s(),o("div",k,[d(_,{label:"七牛云配置",class:"mt-20",name:"qiniu"},{default:u((()=>[d(V,{ref:"set",model:e.set,"label-width":"80px"},{default:u((()=>[d(f,{prop:"accessKey",label:"accessKey(AK)"},{default:u((()=>[d(p,{modelValue:e.set.accessKey,"onUpdate:modelValue":a[0]||(a[0]=a=>e.set.accessKey=a)},null,8,["modelValue"])])),_:1}),d(f,{prop:"secretKey",label:"secretKey(SK)"},{default:u((()=>[d(p,{modelValue:e.set.secretKey,"onUpdate:modelValue":a[1]||(a[1]=a=>e.set.secretKey=a)},null,8,["modelValue"])])),_:1}),d(f,{prop:"domain",label:"域名"},{default:u((()=>[d(p,{modelValue:e.set.domain,"onUpdate:modelValue":a[2]||(a[2]=a=>e.set.domain=a)},null,8,["modelValue"])])),_:1}),d(f,{prop:"bucket",label:"空间"},{default:u((()=>[d(p,{modelValue:e.set.bucket,"onUpdate:modelValue":a[3]||(a[3]=a=>e.set.bucket=a)},null,8,["modelValue"])])),_:1}),d(f,null,{default:u((()=>[d(b,{type:"primary",onClick:a[4]||(a[4]=e=>n.submit("set"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),WeChat:l({name:"WeChat",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await x();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await v(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,a,l,t,c,n){const p=m,f=r,b=g,V=y,_=h;return s(),o("div",U,[d(_,{label:"微信配置",class:"mt-20",name:"wechat"},{default:u((()=>[d(V,{ref:"set",model:e.set,"label-width":"80px"},{default:u((()=>[d(f,{label:"appid",prop:"appid",rules:[{required:!0,message:"请输入appid",trigger:"blur"}]},{default:u((()=>[d(p,{modelValue:e.set.appid,"onUpdate:modelValue":a[0]||(a[0]=a=>e.set.appid=a)},null,8,["modelValue"])])),_:1}),d(f,{prop:"secret",label:"secret"},{default:u((()=>[d(p,{modelValue:e.set.secret,"onUpdate:modelValue":a[1]||(a[1]=a=>e.set.secret=a)},null,8,["modelValue"])])),_:1}),d(f,null,{default:u((()=>[d(b,{type:"primary",onClick:a[2]||(a[2]=e=>n.submit("set"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]])},data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await V();if(200===e.code){this.loading=!1;let{id:a,name:l,domain:t,email:s,icp:o,police:d,copyright:u,json:i,code:m,title:r,keywords:c,description:n}=e.data;this.info={id:a,name:l,domain:t,email:s,icp:o,police:d,copyright:u,code:m,json:i},this.seo={id:a,title:r,keywords:c,description:n}}else this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateInfo(){try{let e=await _(this.info);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateSeo(){try{let e=await w(this.seo);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(e,a,l,c,n,p){const f=m,V=r,_=g,w=y,x=h,v=t("ConfigSet"),k=t("QiNiu"),U=t("WeChat"),C=b;return s(),o("div",q,[d(C,{modelValue:e.activeName,"onUpdate:modelValue":a[11]||(a[11]=a=>e.activeName=a),onTabClick:p.handleClick},{default:u((()=>[d(x,{label:"基本设置",class:"mt-20",name:"first"},{default:u((()=>[d(w,{ref:"info",model:e.info,"label-width":"84px"},{default:u((()=>[d(V,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:u((()=>[d(f,{modelValue:e.info.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.info.name=a)},null,8,["modelValue"])])),_:1}),d(V,{prop:"domain",label:"网站域名"},{default:u((()=>[d(f,{modelValue:e.info.domain,"onUpdate:modelValue":a[1]||(a[1]=a=>e.info.domain=a)},null,8,["modelValue"])])),_:1}),d(V,{prop:"email",label:"站长邮箱"},{default:u((()=>[d(f,{modelValue:e.info.email,"onUpdate:modelValue":a[2]||(a[2]=a=>e.info.email=a),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),d(V,{prop:"icp",label:"ICP备案号"},{default:u((()=>[d(f,{modelValue:e.info.icp,"onUpdate:modelValue":a[3]||(a[3]=a=>e.info.icp=a)},null,8,["modelValue"])])),_:1}),d(V,{prop:"code",label:"统计代码"},{default:u((()=>[d(f,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.info.code,"onUpdate:modelValue":a[4]||(a[4]=a=>e.info.code=a)},null,8,["modelValue"])])),_:1}),d(V,{prop:"json",label:"其他配置"},{default:u((()=>[d(f,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.info.json,"onUpdate:modelValue":a[5]||(a[5]=a=>e.info.json=a)},null,8,["modelValue"])])),_:1}),d(V,null,{default:u((()=>[d(_,{type:"primary",onClick:a[6]||(a[6]=e=>p.submitInfo("info"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d(x,{label:"SEO设置",class:"mt-20",name:"second"},{default:u((()=>[d(w,{ref:"seo",model:e.seo,"label-width":"84px"},{default:u((()=>[d(V,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:u((()=>[d(f,{modelValue:e.seo.title,"onUpdate:modelValue":a[7]||(a[7]=a=>e.seo.title=a)},null,8,["modelValue"])])),_:1}),d(V,{label:"关键词",prop:"keywords"},{default:u((()=>[d(f,{modelValue:e.seo.keywords,"onUpdate:modelValue":a[8]||(a[8]=a=>e.seo.keywords=a)},null,8,["modelValue"])])),_:1}),d(V,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:u((()=>[d(f,{type:"textarea",rows:3,class:"textarea",modelValue:e.seo.description,"onUpdate:modelValue":a[9]||(a[9]=a=>e.seo.description=a)},null,8,["modelValue"])])),_:1}),d(V,null,{default:u((()=>[d(_,{type:"primary",onClick:a[10]||(a[10]=e=>p.submitSeo("seo"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d(v),d(k),d(U)])),_:1},8,["modelValue","onTabClick"])])}]]))}}}));
