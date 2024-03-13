import{q as e,r as s,f as a,p as t}from"./element-plus.js";import{d as r,u as l}from"./friendlink.js";import{_ as o}from"./@qiun.js";import{o as i,c as m,g as p,_ as d,a0 as u}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const n={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const c=o({name:"friendlink-edit",data:()=>({params:{id:0,title:"",link:"",sort:0},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await r(this.params.id);200===e.code&&(this.params=e.data)}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await l(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(r,l,o,c,j,h){const f=e,g=s,b=a,y=t;return i(),m("div",n,[p(y,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"80px",class:"mt-20"},{default:d((()=>[p(g,{label:"标题",prop:"title"},{default:d((()=>[p(f,{modelValue:r.params.title,"onUpdate:modelValue":l[0]||(l[0]=e=>r.params.title=e)},null,8,["modelValue"])])),_:1}),p(g,{label:"链接"},{default:d((()=>[p(f,{modelValue:r.params.link,"onUpdate:modelValue":l[1]||(l[1]=e=>r.params.link=e)},null,8,["modelValue"])])),_:1}),p(g,{label:"排序"},{default:d((()=>[p(f,{modelValue:r.params.sort,"onUpdate:modelValue":l[2]||(l[2]=e=>r.params.sort=e)},null,8,["modelValue"])])),_:1}),p(g,null,{default:d((()=>[p(b,{type:"primary",onClick:l[3]||(l[3]=e=>h.submit("params"))},{default:d((()=>[u("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{c as default};
