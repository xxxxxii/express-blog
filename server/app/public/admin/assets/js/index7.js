import{_ as e,aj as a,ak as t,al as l,am as s,r,aB as o,o as n,b as i,g as c,a as d,w as u,h,t as p,L as m,a1 as f,a2 as g,x as b,a0 as y,ao as C,aq as w,ap as k,ar as _,a4 as S}from"./.pnpm.js";import{s as x,a as D}from"./frag.js";import"./index.js";const j={class:"pd-20 bg-fff"},E={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},$={class:"inline-b ml-5"};const v=e({name:"frag-index",setup:()=>({Edit:a,Delete:t,View:l,Search:s}),data:()=>({params:{keywords:""},tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.search()},async search(){try{let e=await x(this.cur,this.params.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"frag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{let e=await D(a);200===e.code?(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"success"})}catch(t){console.log(t)}}}},[["render",function(e,a,t,l,s,x){const D=f,v=g,V=b,A=y,T=r("router-link"),F=C,q=w,z=k,B=_,I=S,L=o("permission");return n(),i("div",j,[c("div",E,[d(A,{inline:!0,model:e.params,ref:"form"},{default:u((()=>[d(v,{class:"mt-10",label:"标题",prop:"keywords"},{default:u((()=>[d(D,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":l.Search,clearable:"",onClear:x.search,modelValue:e.params.keywords,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.keywords=a)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),d(v,{class:"mt-10"},{default:u((()=>[d(V,{type:"primary",onClick:x.search,round:""},{default:u((()=>[h("搜索")])),_:1},8,["onClick"]),d(V,{onClick:a[1]||(a[1]=e=>x.clearSearch("form")),round:""},{default:u((()=>[h("清空")])),_:1})])),_:1})])),_:1},8,["model"]),d(T,{class:"mt-10",to:"/frag/add"},{default:u((()=>[d(V,{type:"primary",round:""},{default:u((()=>[h("新增")])),_:1})])),_:1})]),d(z,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:x.handleSelectionChange},{default:u((()=>[d(F,{type:"selection"}),d(F,{prop:"id",width:"60",label:"编号"}),d(F,{prop:"name",label:"名称"}),d(F,{prop:"mark",label:"标识"}),d(F,{prop:"createdAt",label:"发布时间"},{default:u((e=>[h(p(e.row.createdAt),1)])),_:1}),d(F,{fixed:"right",width:"120",label:"操作"},{default:u((e=>[d(V,{icon:l.Edit,circle:"",onClick:a=>x.toEdit(e.row)},null,8,["icon","onClick"]),m((n(),i("div",$,[d(q,{width:"220",onConfirm:a=>x.handleDel(e.row),"confirm-button-text":"确定","cancel-button-text":"取消","icon-color":"#626AEF",title:"确定删除吗？如果在使用，删掉会模板会报错"},{reference:u((()=>[d(V,{icon:l.Delete,circle:""},null,8,["icon"])])),_:2},1032,["onConfirm"])])),[[L,"super"]])])),_:1})])),_:1},8,["data","onSelectionChange"]),d(I,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:u((()=>[d(B,{background:"",layout:"prev, pager, next",onCurrentChange:x.handleCurrentChange,"page-size":20,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}],["__scopeId","data-v-73448d10"]]);export{v as default};
