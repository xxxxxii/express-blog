import{_ as e,o as a,b as s,a as l,w as t,h as m,a1 as d,a2 as o,af as r,x as i,a0 as u}from"./.pnpm.js";import{d as n,h as p,u as c}from"./model.js";import"./index.js";const g={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const b=e({name:"model-edit",data:()=>({params:{id:0,old_table_name:"",model_name:"",table_name:"",status:"1"},disable:!1,paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){let e=this.$route.params.id;this.params.id=e,await this.detail(),await this.hasUse(e)},methods:{async detail(){try{let e=await n(this.params.id);if(200===e.code){let a=e.data;this.params={...a,old_table_name:a.table_name}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async hasUse(e){try{let a=await p(e);200==a.code?a.data.count?this.disable=!0:this.disable=!1:this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},async update(){try{let e=await c(this.params);200==e.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:e.msg,type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,n,p,c,b,h){const _=d,f=o,y=r,V=i,x=u;return a(),s("div",g,[l(x,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:t((()=>[l(f,{label:"模型名称",prop:"model_name"},{default:t((()=>[l(_,{modelValue:e.params.model_name,"onUpdate:modelValue":n[0]||(n[0]=a=>e.params.model_name=a)},null,8,["modelValue"])])),_:1}),l(f,{label:"新增表名",prop:"table_name"},{default:t((()=>[l(_,{modelValue:e.params.table_name,"onUpdate:modelValue":n[1]||(n[1]=a=>e.params.table_name=a),disabled:e.disable},null,8,["modelValue","disabled"])])),_:1}),l(f,{label:"是否启用"},{default:t((()=>[l(y,{modelValue:e.params.status,"onUpdate:modelValue":n[2]||(n[2]=a=>e.params.status=a),value:"1"},{default:t((()=>[m("开启")])),_:1},8,["modelValue"]),l(y,{modelValue:e.params.status,"onUpdate:modelValue":n[3]||(n[3]=a=>e.params.status=a),disabled:e.disable,value:"0"},{default:t((()=>[m("禁用")])),_:1},8,["modelValue","disabled"])])),_:1}),l(f,null,{default:t((()=>[l(V,{type:"primary",onClick:n[4]||(n[4]=e=>h.submit("params"))},{default:t((()=>[m("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{b as default};
