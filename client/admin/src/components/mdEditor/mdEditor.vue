<template>
  <div id="vditor"></div>
</template>

<script setup>
import { onMounted,ref } from "vue";
import Vditor from 'vditor';
import "../../../node_modules/vditor/src/assets/less/index.less";

const props = defineProps({
  modelValue:String,
  mode:{
    type:String,
    default: "ir",
  }
})
const emits = defineEmits(['update:modelValue','init'])


let vditor = ref(null)
onMounted(()=>{
  vditor.value =  new Vditor(document.getElementById('vditor'), {
      height: 500,
      toolbarConfig: {
        pin: true,
      },
      "mode":props.mode,
      cache: {
        enable: false,
      },
      value:props.modelValue,
      outline: {
            enable: true,
            position: 'right',
        },
        debugger: true,
        typewriterMode: true,
        placeholder: 'Hello, Vditor!',
        preview: {
            markdown: {
                toc: true,
                mark: true,
                footnotes: true,
                autoSpace: true,
            },
            math: {
                engine: 'KaTeX',
                inlineDigit: true,
            },
        },
        toolbarConfig: {
            pin: true,
        },
        counter: {
            enable: true,
            type: 'text',
        },
        hint: {
            emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji',
            emojiTail: '<a href="https://ld246.com/settings/function" target="_blank">设置常用表情</a>',
            // emoji: {
            //     'sd': '💔',
            //     'j': 'https://cdn.jsdelivr.net/npm/vditor@1.3.1/dist/images/emoji/j.png',
            // },
            parse: false,
            extend: [
                {
                    key: '@',
                    hint: (key) => {
                        console.log(key)
                        if ('vanessa'.indexOf(key.toLocaleLowerCase()) > -1) {
                            return [
                                {
                                    value: '@Vanessa',
                                    html: '<img src="https://avatars0.githubusercontent.com/u/970828?s=60&v=4"/> Vanessa',
                                }]
                        }
                        return []
                    },
                },
                {
                    key: '#',
                    hint: (key) => {
                        console.log(key)
                        if ('vditor'.indexOf(key.toLocaleLowerCase()) > -1) {
                            return [
                                {
                                    value: '#Vditor',
                                    html: '<span style="color: #999;">#Vditor</span> ♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。',
                                }]
                        }
                        return []
                    },
                }],
        },
        tab: '\t',
        upload: {
            accept: 'image/*,.mp3, .wav, .rar',
            token: 'test',
            url: '/api/upload',
            // linkToImgUrl: '/public/uploads/',
        filename(name) {
              return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').replace('/\\s/g', '');
        },
        // 数据转换
        format(files, responseText) {
          const res = JSON.parse(responseText);
          const name = files[0].name;
          const url = res.data.domain + res.data.path;
          const result = JSON.stringify({
            code: 0,
            data: { errFiles: '', succMap: { [name]: url } },
          });
          return result;
        },
            // success(editor, msg){
            //   console.log(editor,msg)
            // }
        },
      after: () => {
        emits('init',true)
      },
      input (md) {
        emits('update:modelValue',md)
      }
    })
})


</script>

<style scoped>
#vditor {
  width: 100% !important;
  min-height: 500px;
}
</style>