System.register(["./element-plus-legacy.js","./collect-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,r,u,m,d,c,o,i,p,g,n,h,f,y,V,_,b,v,U,j,T,C,k;return{setters:[e=>{l=e.q,s=e.r,t=e.G,r=e.O,u=e.f,m=e.u,d=e.v,c=e.p},e=>{o=e.g,i=e.a,p=e.c},e=>{g=e._},e=>{n=e.o,h=e.c,f=e.g,y=e._,V=e.a,_=e.a0,b=e.e,v=e.Y,U=e.ab,j=e.t,T=e.f,C=e.p,k=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-bda84583] .show .el-form-item__content{flex-direction:column;align-items:start}\n",document.head.appendChild(a);const w={name:"collect-add",data:()=>({activeName:"list",params:{taskName:"",targetUrl:"",listTag:"",startNum:1,endNum:1,increment:1,pages:[],titleTag:"",articleTag:"",charset:"1",clearRegCode:"",status:"1",cid:1},listPages:[],article:{}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getPages(){try{let{targetUrl:e,listTag:a,charset:l}=this.params,s=await o({targetUrl:e,listTag:a,charset:l});if(200==s.code){let a=s.data;const l=/^(.*:\/\/[^\/]+).*$/,t=e.match(l)[1];a[0].includes("http")||(a=a.map((e=>t+e))),this.params.pages=a,this.$message({message:"列表地址获取成功^_^",type:"success"})}}catch(e){console.log(e)}},async getListPages(){try{let{targetUrl:e,startNum:a,endNum:l,increment:s}=this.params,t=[];for(let r=a;r<=l;r+=s){let a=e.replace("${page}",r);t.push(a)}this.listPages=t,this.listPages.map((async(e,a)=>{let{listTag:l,charset:s}=this.params;if(a>0){let a=await o({targetUrl:e,listTag:l,charset:s});200==a.code&&(this.params.pages=[...this.params.pages,...a.data])}}))}catch(e){console.log(e)}},async getArticle(){try{let{taskUrl:e,titleTag:a,articleTag:l,clearRegCode:s,removeCode:t,charset:r}=this.params;e=this.params.pages[0]||"";let u=await i({taskUrl:e,titleTag:a,articleTag:l,removeCode:t,clearRegCode:s,charset:r});200==u.code&&(this.article=u.data,this.$message({message:"内功获取成功^_^",type:"success"}))}catch(e){console.log(e)}},async create(){try{this.params.pages=this.params.pages.toString();let e=await p(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},x=e=>(C("data-v-bda84583"),e=e(),k(),e),N={class:"mb-20 bg-fff pd-20"},q={class:"row w-p100"},$={class:"row w-p100"},P={class:"row w-p100"},z=x((()=>V("span",{class:"ml-5 mr-5"},"至",-1))),R=x((()=>V("span",{class:"ml-5 mr-5"},"每页递增",-1))),L=["href"],S={class:"row w-p100"},A=x((()=>V("p",null,"内容：",-1))),E=["innerHTML"];e("default",g(w,[["render",function(e,a,o,i,p,g){const C=l,k=s,w=t,x=r,H=u,M=m,O=d,G=c;return n(),h("div",N,[f(G,{ref:"params",model:e.params,"label-width":"84px"},{default:y((()=>[f(O,{modelValue:e.activeName,"onUpdate:modelValue":a[14]||(a[14]=a=>e.activeName=a),class:"demo-tabs"},{default:y((()=>[f(M,{label:"列表测试",name:"list"},{default:y((()=>[f(k,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:y((()=>[f(C,{modelValue:e.params.taskName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),f(k,{label:"列表网址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:y((()=>[V("div",q,[f(C,{class:"flex-1",modelValue:e.params.targetUrl,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.targetUrl=a),placeholder:"/SEO/1_${page}.html"},null,8,["modelValue"])])])),_:1}),f(k,{label:"字符集",prop:"charset",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:y((()=>[f(x,{modelValue:e.params.charset,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.charset=a),class:"ml-4"},{default:y((()=>[f(w,{value:"1",size:"large"},{default:y((()=>[_("uft-8")])),_:1}),f(w,{value:"2",size:"large"},{default:y((()=>[_("gb2312")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(k,{label:"列表链接",prop:"listTag",rules:[{required:!0,message:"请输入文章列表标签",trigger:"blur"}]},{default:y((()=>[V("div",$,[f(C,{class:"flex-1",modelValue:e.params.listTag,"onUpdate:modelValue":a[3]||(a[3]=a=>e.params.listTag=a),placeholder:"例：.content h4 a"},null,8,["modelValue"]),f(H,{class:"ml-5",type:"primary",onClick:g.getPages},{default:y((()=>[_(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),f(k,{label:"开始页面"},{default:y((()=>[V("div",P,[f(C,{class:"flex-1",modelValue:e.params.startNum,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.startNum=a)},null,8,["modelValue"]),z,f(C,{class:"flex-1",modelValue:e.params.endNum,"onUpdate:modelValue":a[5]||(a[5]=a=>e.params.endNum=a)},null,8,["modelValue"]),R,f(C,{class:"flex-1 mr-5",modelValue:e.params.increment,"onUpdate:modelValue":a[6]||(a[6]=a=>e.params.increment=a)},null,8,["modelValue"]),f(H,{type:"primary",onClick:g.getListPages},{default:y((()=>[_("测试")])),_:1},8,["onClick"])])])),_:1}),e.listPages.length>0?(n(),b(k,{key:0,label:"列表地址"},{default:y((()=>[(n(!0),h(v,null,U(e.listPages,((e,a)=>(n(),h("p",{class:"mr-30",key:a},j(e),1)))),128))])),_:1})):T("",!0),e.params.pages.length>0?(n(),b(k,{key:1,label:"文章地址"},{default:y((()=>[(n(!0),h(v,null,U(e.params.pages,((e,a)=>(n(),h("p",{class:"mr-30",key:a},j(e),1)))),128))])),_:1})):T("",!0)])),_:1}),f(M,{label:"内容测试",name:"article"},{default:y((()=>[f(k,{label:"目标地址"},{default:y((()=>[V("a",{class:"mr-10",href:e.params.pages[0],target:"_blank"},j(e.params.pages[0]),9,L),_("（默认第一个作为测试） ")])),_:1}),f(k,{label:"文章标题",prop:"titleTag",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:y((()=>[f(C,{class:"flex-1",placeholder:"例：.title",modelValue:e.params.titleTag,"onUpdate:modelValue":a[7]||(a[7]=a=>e.params.titleTag=a)},null,8,["modelValue"])])),_:1}),f(k,{label:"文章内容",prop:"articleTag",rules:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},{default:y((()=>[f(C,{placeholder:"例：.article",modelValue:e.params.articleTag,"onUpdate:modelValue":a[8]||(a[8]=a=>e.params.articleTag=a)},null,8,["modelValue"])])),_:1}),f(k,{label:"清理代码",prop:"removeCode"},{default:y((()=>[f(C,{modelValue:e.params.removeCode,"onUpdate:modelValue":a[9]||(a[9]=a=>e.params.removeCode=a),placeholder:"例：$('div').remove()"},null,8,["modelValue"])])),_:1}),f(k,{label:"清理正则",prop:"clearRegCode"},{default:y((()=>[V("div",S,[f(C,{class:"flex-1",modelValue:e.params.clearRegCode,"onUpdate:modelValue":a[10]||(a[10]=a=>e.params.clearRegCode=a),placeholder:"填写正则"},null,8,["modelValue"]),f(H,{class:"ml-5",type:"primary",onClick:g.getArticle},{default:y((()=>[_("测试")])),_:1},8,["onClick"])])])),_:1}),f(k,{class:"show",label:"文章结果"},{default:y((()=>[V("p",null,"标题："+j(e.article.title),1),A,V("div",{innerHTML:e.article.article},null,8,E)])),_:1})])),_:1}),f(M,{label:"保存配置",name:"save"},{default:y((()=>[f(k,{label:"保存栏目",prop:"articleTag",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:y((()=>[f(C,{modelValue:e.params.cid,"onUpdate:modelValue":a[11]||(a[11]=a=>e.params.cid=a),placeholder:"例：cid"},null,8,["modelValue"])])),_:1}),f(k,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:y((()=>[f(x,{modelValue:e.params.status,"onUpdate:modelValue":a[12]||(a[12]=a=>e.params.status=a),class:"ml-4"},{default:y((()=>[f(w,{value:"1",size:"large"},{default:y((()=>[_("草稿")])),_:1}),f(w,{value:"2",size:"large"},{default:y((()=>[_("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(k,null,{default:y((()=>[f(H,{type:"primary",onClick:a[13]||(a[13]=e=>g.submit("params"))},{default:y((()=>[_("保存")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"])])}],["__scopeId","data-v-bda84583"]]))}}}));
