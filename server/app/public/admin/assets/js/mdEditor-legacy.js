System.register(["./vditor-legacy.js","./@qiun-legacy.js","./@vue-legacy.js"],(function(e,t){"use strict";var a,o,n,i,r,d;return{setters:[e=>{a=e.V},e=>{o=e._},e=>{n=e.j,i=e.x,r=e.o,d=e.c}],execute:function(){var t=document.createElement("style");t.textContent="#vditor[data-v-db96c191]{width:100%!important;min-height:500px}\n",document.head.appendChild(t);const l={id:"vditor"};e("_",o({__name:"mdEditor",props:{modelValue:String,mode:{type:String,default:"ir"}},emits:["update:modelValue","init"],setup(e,{emit:t}){const o=e,s=t;let c=n(null);return i((()=>{c.value=new a(document.getElementById("vditor"),{height:500,toolbarConfig:{pin:!0},mode:o.mode,cache:{enable:!1},value:o.modelValue,outline:{enable:!0,position:"right"},debugger:!0,typewriterMode:!0,placeholder:"Hello, Vditor!",preview:{markdown:{toc:!0,mark:!0,footnotes:!0,autoSpace:!0},math:{engine:"KaTeX",inlineDigit:!0}},counter:{enable:!0,type:"text"},hint:{emojiPath:"https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji",emojiTail:'<a href="https://ld246.com/settings/function" target="_blank">设置常用表情</a>',parse:!1,extend:[{key:"@",hint:e=>(console.log(e),"vanessa".indexOf(e.toLocaleLowerCase())>-1?[{value:"@Vanessa",html:'<img src="https://avatars0.githubusercontent.com/u/970828?s=60&v=4"/> Vanessa'}]:[])},{key:"#",hint:e=>(console.log(e),"vditor".indexOf(e.toLocaleLowerCase())>-1?[{value:"#Vditor",html:'<span style="color: #999;">#Vditor</span> ♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。'}]:[])}]},tab:"\t",upload:{accept:"image/*,.mp3, .wav, .rar",token:"test",url:"/api/upload",filename:e=>e.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5.)]/g,"").replace(/[?\\/:|<>*[\]()$%{}@~]/g,"").replace("/\\s/g",""),format(e,t){const a=JSON.parse(t),o=e[0].name,n=a.data.domain+a.data.path;return JSON.stringify({code:0,data:{errFiles:"",succMap:{[o]:n}}})}},after:()=>{s("init",!0)},input(e){s("update:modelValue",e)}})})),(e,t)=>(r(),d("div",l))}},[["__scopeId","data-v-db96c191"]]))}}}));
