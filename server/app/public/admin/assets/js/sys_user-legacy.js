System.register(["./index-legacy.js"],(function(e,t){"use strict";var s,r;return{setters:[e=>{s=e.h,r=e.A}],execute:function(){e("l",(e=>s({url:`${r.BASE_API}/api/sysUser/list?cur=${e}&pageSize=20`,method:"get"}))),e("c",(e=>s({url:`${r.BASE_API}/api/sysUser/create`,method:"post",data:e}))),e("a",(e=>s({url:`${r.BASE_API}/api/sysUser/delete?id=${e}`,method:"get"}))),e("u",(e=>s({url:`${r.BASE_API}/api/sysUser/update`,method:"post",data:e}))),e("d",(e=>s({url:`${r.BASE_API}/api/sysUser/detail?id=${e}`,method:"get"})))}}}));
