import{_ as e,r as a,o as l,b as s,a as t,w as r,c as o,f as m,h as i,a1 as d,a2 as u,i as p,ac as n,ad as c,ae as f,x as g,a0 as h}from"./.pnpm.js";import{c as _}from"./slide.js";import{a as b}from"./upload.js";import"./index.js";import"./sys_app.js";const y={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const w=e({name:"slide-add",data:()=>({params:{title:"",img_url:"",link_url:""}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await b(a);200===l.code&&(this.params.img_url=l.data.path)},async create(){try{let e=await _(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,_,b,w,V,v){const x=d,k=u,$=a("MostlyCloudy"),j=p,U=n,q=c,C=f,z=g,A=h;return l(),s("div",y,[t(A,{ref:"params",model:e.params,"label-width":"84px",class:"mt-20"},{default:r((()=>[t(k,{label:"轮播标题",rules:[{required:!0,message:"请输入标题",trigger:"blur"}],prop:"title"},{default:r((()=>[t(x,{modelValue:e.params.title,"onUpdate:modelValue":_[0]||(_[0]=a=>e.params.title=a)},null,8,["modelValue"])])),_:1}),t(k,{class:"row",label:"轮播图"},{default:r((()=>[t(q,{class:"avatar-uploader","http-request":v.upload,"show-file-list":!1,"before-upload":v.beforeUpload},{default:r((()=>[t(U,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:r((()=>[t(j,{class:"avatar-uploader-icon"},{default:r((()=>[t($)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img_url?(l(),o(U,{key:0,placement:"right",width:600,trigger:"hover"},{reference:r((()=>[t(C,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img_url},null,8,["src"])])),default:r((()=>[t(C,{style:{width:"100%"},src:e.params.img_url},null,8,["src"])])),_:1})):m("",!0),t(x,{class:"ml-10 flex-1",modelValue:e.params.img_url,"onUpdate:modelValue":_[1]||(_[1]=a=>e.params.img_url=a)},null,8,["modelValue"])])),_:1}),t(k,{label:"轮播链接"},{default:r((()=>[t(x,{modelValue:e.params.link_url,"onUpdate:modelValue":_[2]||(_[2]=a=>e.params.link_url=a)},null,8,["modelValue"])])),_:1}),t(k,null,{default:r((()=>[t(z,{type:"primary",onClick:_[3]||(_[3]=e=>v.submit("params"))},{default:r((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]);export{w as default};
