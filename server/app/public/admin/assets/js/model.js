import{h as a,A as t}from"./index.js";let e=(e=1)=>a({url:"".concat(t.BASE_API,"/api/model/list?cur=").concat(e),method:"get"}),o=e=>a({url:"".concat(t.BASE_API,"/api/model/create"),method:"post",data:e}),d=(e,o)=>a({url:"".concat(t.BASE_API,"/api/model/delete"),method:"post",data:{id:e,table_name:o}}),c=e=>a({url:"".concat(t.BASE_API,"/api/model/update"),method:"post",data:e}),l=e=>a({url:"".concat(t.BASE_API,"/api/model/detail?id=").concat(e),method:"get"}),m=e=>a({url:"".concat(t.BASE_API,"/api/model/hasUse?id=").concat(e),method:"get"});export{d as a,o as c,l as d,m as h,e as l,c as u};