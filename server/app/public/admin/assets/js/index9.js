import{f as t,t as e,I as a,J as s,L as i}from"./element-plus.js";import{G as o,E as r,v as l,H as n,I as c}from"./@element-plus.js";import{l as p,g as d,a as m}from"./gather.js";import{c as u}from"./article.js";import"./js-cookie.js";import{_ as h}from"./@qiun.js";import{r as g,o as f,c as y,g as j,_ as C,a0 as w,t as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const k={class:"content-wrap"};const b=h({name:"gather-index",setup:()=>({Edit:o,Delete:r,View:l,Search:n,Cpu:c}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,step:0,params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""}}),computed:{},created(){this.list()},methods:{async list(){try{let t=await p(this.cur);200===t.code&&(this.tableData=[...t.data.list],this.count=t.data.count)}catch(t){console.log(t)}},handleCurrentChange(t){this.cur=t,this.list()},toggleSelection(t){t?t.forEach((t=>{this.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(t){this.multipleSelection=t},async toRun(t){try{let{targetUrl:e,title:a,parseData:s,cid:i,status:o}=t,r=await d({targetUrl:e,title:a,parseData:s});if(200==r.code){const{title:t,content:e}=r.data;this.params.attr=this.params.attr.toString(),this.params.title=t,this.params.content=e,this.params.cid=i,this.params.status=1==o?1:0,this.create(this.params),this.$message({message:"内功获取成功^_^",type:"success"})}}catch(e){console.log(e)}},async create(){try{200==(await u({defaultParams:this.params,fieldParams:{}})).code&&this.$message({message:"第一".concat(this.step+1,"条数据完成^_^"),type:"success"})}catch(t){console.log(t)}},toEdit(t){let e=t.id;this.$router.push({name:"gather-edit",params:{id:e}})},async handleDel(t){let e=t.id;try{let t=await m(e);200===t.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:t.msg,type:"success"})}catch(a){console.log(a)}}}},[["render",function(o,r,l,n,c,p){const d=t,m=g("router-link"),u=e,h=a,b=s,S=i;return f(),y("div",k,[j(u,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:C((()=>[j(m,{to:"/gather/add"},{default:C((()=>[j(d,{type:"primary",round:""},{default:C((()=>[w("新增")])),_:1})])),_:1})])),_:1}),j(b,{ref:"multipleTable",data:o.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:p.handleSelectionChange},{default:C((()=>[j(h,{type:"selection"}),j(h,{prop:"id",width:"60",label:"编号"}),j(h,{prop:"taskName",label:"任务名称"}),j(h,{prop:"targetUrl",label:"接口链接"}),j(h,{prop:"status",label:"状态"},{default:C((t=>[w(_(1==t.row.status?"草稿":"发布"),1)])),_:1}),j(h,{prop:"createdAt",label:"发布时间"},{default:C((t=>[w(_(t.row.createdAt),1)])),_:1}),j(h,{fixed:"right",width:"222",label:"操作"},{default:C((t=>[j(d,{icon:n.Edit,circle:"",onClick:e=>p.toEdit(t.row)},null,8,["icon","onClick"]),j(d,{icon:n.Delete,circle:"",onClick:e=>p.handleDel(t.row)},null,8,["icon","onClick"]),j(d,{type:"primary",round:"",icon:n.Cpu,onClick:e=>p.toRun(t.row)},{default:C((()=>[w("执行")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),j(u,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:C((()=>[j(S,{background:"",layout:"prev, pager, next",onCurrentChange:p.handleCurrentChange,"page-size":10,total:o.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]);export{b as default};
