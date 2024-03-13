import{f as t,t as e,I as s,J as a,L as i}from"./element-plus.js";import{G as o,E as l,v as r,H as c,I as n}from"./@element-plus.js";import{l as p,a as d,b as u}from"./collect.js";import{c as m}from"./article.js";import{f as h}from"./index.js";import{_ as g}from"./@qiun.js";import{r as f,o as y,c as j,g as C,_,a0 as w,t as b}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const k={class:"content-wrap"};const S=g({name:"collect-index",setup:()=>({Edit:o,Delete:l,View:r,Search:c,Cpu:n}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,step:0,params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""}}),computed:{},created(){this.list()},methods:{async list(){try{let t=await p(this.cur);200===t.code&&(this.tableData=[...t.data.list],this.count=t.data.count)}catch(t){console.log(t)}},handleCurrentChange(t){this.cur=t,this.list()},toggleSelection(t){t?t.forEach((t=>{this.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(t){this.multipleSelection=t},async toRun(t){try{let{pages:e,titleTag:s,articleTag:a,clearRegCode:i,removeCode:o,charset:l,cid:r,status:c}=t;e=e.split(",");let n=await d({taskUrl:e[this.step],titleTag:s,articleTag:a,removeCode:o,clearRegCode:i,charset:l});if(200==n.code){this.article=n.data;const{title:e,article:s}=n.data;this.params.title=e,this.params.content=s,this.params.cid=r,this.params.status=1==c?1:0,this.create(t)}}catch(e){console.log(e)}},async create(t){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),e.description||(e.description=h(e.content).substr(0,255));let s=await m({defaultParams:e,fieldParams:{}});200==s.code?(this.$message({message:"第一".concat(this.step+1,"条数据完成^_^"),type:"success"}),setTimeout((()=>{let{pages:e}=t;e=e.split(","),console.log(e.length,this.step),this.step<=e.length-1&&(this.toRun(t),this.step=this.step+1)}),3e3)):this.$message({message:s.msg||"第一".concat(this.step+1,"条数据失败^_^"),type:"success"})}catch(e){console.log(e)}},toEdit(t){let e=t.id;this.$router.push({name:"collect-edit",params:{id:e}})},async handleDel(t){let e=t.id;try{let t=await u(e);200===t.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:t.msg,type:"success"})}catch(s){console.log(s)}}}},[["render",function(o,l,r,c,n,p){const d=t,u=f("router-link"),m=e,h=s,g=a,S=i;return y(),j("div",k,[C(m,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:_((()=>[C(u,{to:"/collect/add"},{default:_((()=>[C(d,{type:"primary",round:""},{default:_((()=>[w("新增")])),_:1})])),_:1})])),_:1}),C(g,{ref:"multipleTable",data:o.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:p.handleSelectionChange},{default:_((()=>[C(h,{type:"selection"}),C(h,{prop:"id",width:"60",label:"编号"}),C(h,{prop:"taskName",label:"任务名称"}),C(h,{prop:"charset",label:"编码"},{default:_((t=>[w(b(1==t.row.charset?"UTF-8":"GB2312"),1)])),_:1}),C(h,{prop:"status",label:"状态"},{default:_((t=>[w(b(1==t.row.status?"草稿":"发布"),1)])),_:1}),C(h,{prop:"createdAt",label:"发布时间"},{default:_((t=>[w(b(t.row.createdAt),1)])),_:1}),C(h,{fixed:"right",width:"222",label:"操作"},{default:_((t=>[C(d,{icon:c.Edit,circle:"",onClick:e=>p.toEdit(t.row)},null,8,["icon","onClick"]),C(d,{icon:c.Delete,circle:"",onClick:e=>p.handleDel(t.row)},null,8,["icon","onClick"]),C(d,{type:"primary",round:"",icon:c.Cpu,onClick:e=>p.toRun(t.row)},{default:_((()=>[w("执行")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),C(m,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:_((()=>[C(S,{background:"",layout:"prev, pager, next",onCurrentChange:p.handleCurrentChange,"page-size":10,total:o.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]);export{S as default};
