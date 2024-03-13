import{q as e,r as a,G as s,f as t,p as l}from"./element-plus.js";import{d as m,h as o,u as r}from"./model.js";import{_ as i}from"./@qiun.js";import{o as d,c as p,g as u,_ as n,a0 as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const g={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const b=i({name:"model-edit",data:()=>({params:{id:0,old_table_name:"",model_name:"",table_name:"",status:"1"},disable:!1,paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){let e=this.$route.params.id;this.params.id=e,await this.detail(),await this.hasUse(e)},methods:{async detail(){try{let e=await m(this.params.id);if(200===e.code){let a=e.data;this.params={...a,old_table_name:a.table_name}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async hasUse(e){try{let a=await o(e);200==a.code?a.data.count?this.disable=!0:this.disable=!1:this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},async update(){try{let e=await r(this.params);200==e.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:e.msg,type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(m,o,r,i,b,h){const _=e,j=a,f=s,y=t,V=l;return d(),p("div",g,[u(V,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"100px",class:"mt-20"},{default:n((()=>[u(j,{label:"模型名称",prop:"model_name"},{default:n((()=>[u(_,{modelValue:m.params.model_name,"onUpdate:modelValue":o[0]||(o[0]=e=>m.params.model_name=e)},null,8,["modelValue"])])),_:1}),u(j,{label:"新增表名",prop:"table_name"},{default:n((()=>[u(_,{modelValue:m.params.table_name,"onUpdate:modelValue":o[1]||(o[1]=e=>m.params.table_name=e),disabled:m.disable},null,8,["modelValue","disabled"])])),_:1}),u(j,{label:"是否启用"},{default:n((()=>[u(f,{modelValue:m.params.status,"onUpdate:modelValue":o[2]||(o[2]=e=>m.params.status=e),value:"1"},{default:n((()=>[c("开启")])),_:1},8,["modelValue"]),u(f,{modelValue:m.params.status,"onUpdate:modelValue":o[3]||(o[3]=e=>m.params.status=e),disabled:m.disable,value:"0"},{default:n((()=>[c("禁用")])),_:1},8,["modelValue","disabled"])])),_:1}),u(j,null,{default:n((()=>[u(y,{type:"primary",onClick:o[4]||(o[4]=e=>h.submit("params"))},{default:n((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{b as default};
