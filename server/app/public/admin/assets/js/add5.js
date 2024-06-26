import {
  q as e,
  r as a,
  G as s,
  O as t,
  f as m,
  p as o,
  H as r,
} from "./element-plus.js";
import { c as l } from "./frag.js";
import { _ as p } from "./main.js";
import { t as n } from "./tinymce.js";
import { p as i } from "./pinyin-pro.js";
import { u } from "./upload.js";
import { _ as d } from "./@qiun.js";
import {
  r as c,
  o as f,
  c as g,
  w as j,
  e as y,
  _ as h,
  a as _,
  g as V,
  a0 as b,
  f as v,
} from "./@vue.js";
import "./lodash-es.js";
import "./async-validator.js";
import "./@vueuse.js";
import "./dayjs.js";
import "./@element-plus.js";
import "./@ctrl.js";
import "./@popperjs.js";
import "./memoize-one.js";
import "./normalize-wheel-es.js";
import "./index.js";
import "./pinia.js";
import "./vue-demi.js";
import "./pinia-plugin-persist.js";
import "./vue-router.js";
import "./axios.js";
import "./js-cookie.js";
/* empty css        */ import "./sys_app.js";
const x = { class: "mr-10 ml-10 mb-20 pd-10 bg-main" };
const k = d(
  {
    name: "frag-add",
    components: { Vue3Tinymce: p },
    data: () => ({
      setting: n,
      loading: !0,
      params: { type: "1", name: "", mark: "", content: "欢迎使用ChanCMS系统" },
      paramsRules: {
        name: [
          { required: !0, message: "请输入栏目名称", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "名称长度在 2 到 50 个字符之间",
            trigger: "blur",
          },
        ],
      },
    }),
    computed: {},
    async mounted() {
      this.setting.images_upload_url = await u();
    },
    created() {},
    unmounted() {},
    watch: {
      "params.name": function (e, a) {
        this.params.mark = i(e, { toneType: "none" }).replace(/\s+/g, "");
      },
    },
    methods: {
      tinymce() {
        this.loading = !1;
      },
      setContent(e) {
        this.params.content = e;
      },
      handleAttr(e) {
        console.log("e--\x3e", e);
      },
      handleSubCid(e) {
        console.log("e--\x3e", e);
      },
      async create() {
        try {
          let e = await l(this.params);
          200 == e.code
            ? (this.$message({ message: "新增成功^_^", type: "success" }),
              this.$router.go(-1))
            : this.$message({ message: e.msg, type: "success" });
        } catch (e) {
          console.log(e);
        }
      },
      submit(e) {
        this.$refs[e].validate((e) => {
          if (!e) return console.log("error submit!!"), !1;
          this.create();
        });
      },
    },
  },
  [
    [
      "render",
      function (l, p, n, i, u, d) {
        const k = e,
          w = a,
          C = s,
          U = t,
          $ = c("vue3-tinymce"),
          q = m,
          I = o,
          z = r;
        return (
          f(),
          g("div", x, [
            j(
              (f(),
              y(
                I,
                {
                  ref: "params",
                  model: l.params,
                  rules: l.paramsRules,
                  "label-width": "84px",
                  class: "mt-20",
                },
                {
                  default: h(() => [
                    _("div", null, [
                      V(
                        w,
                        { label: "碎片名称", prop: "name" },
                        {
                          default: h(() => [
                            V(
                              k,
                              {
                                modelValue: l.params.name,
                                "onUpdate:modelValue":
                                  p[0] || (p[0] = (e) => (l.params.name = e)),
                                placeholder: "请输入汉字",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      V(
                        w,
                        { label: "碎片标识", prop: "mark" },
                        {
                          default: h(() => [
                            V(
                              k,
                              {
                                modelValue: l.params.mark,
                                "onUpdate:modelValue":
                                  p[1] || (p[1] = (e) => (l.params.mark = e)),
                                placeholder: "模板使用标识",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      V(
                        w,
                        { label: "碎片类型", prop: "type" },
                        {
                          default: h(() => [
                            V(
                              U,
                              {
                                modelValue: l.params.type,
                                "onUpdate:modelValue":
                                  p[2] || (p[2] = (e) => (l.params.type = e)),
                                class: "ml-4",
                              },
                              {
                                default: h(() => [
                                  V(
                                    C,
                                    { value: "1" },
                                    { default: h(() => [b("富文本")]), _: 1 }
                                  ),
                                  V(
                                    C,
                                    { value: "2" },
                                    { default: h(() => [b("文本框")]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      "1" == l.params.type
                        ? (f(),
                          y(
                            w,
                            { key: 0, label: "碎片内容" },
                            {
                              default: h(() => [
                                V(
                                  $,
                                  {
                                    modelValue: l.params.content,
                                    "onUpdate:modelValue":
                                      p[3] ||
                                      (p[3] = (e) => (l.params.content = e)),
                                    setting: l.setting,
                                    onInit: d.tinymce,
                                    "script-src":
                                      "/public/admin/tinymce/tinymce.min.js",
                                  },
                                  null,
                                  8,
                                  ["modelValue", "setting", "onInit"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : v("", !0),
                      "2" == l.params.type
                        ? (f(),
                          y(
                            w,
                            { key: 1, label: "碎片内容" },
                            {
                              default: h(() => [
                                V(
                                  k,
                                  {
                                    type: "textarea",
                                    prop: "textarea",
                                    class: "textarea",
                                    rows: 3,
                                    modelValue: l.params.content,
                                    "onUpdate:modelValue":
                                      p[4] ||
                                      (p[4] = (e) => (l.params.content = e)),
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : v("", !0),
                    ]),
                    V(w, null, {
                      default: h(() => [
                        V(
                          q,
                          {
                            type: "primary",
                            onClick: p[5] || (p[5] = (e) => d.submit("params")),
                          },
                          { default: h(() => [b("保存")]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["model", "rules"]
              )),
              [[z, l.loading]]
            ),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-6178e948"],
  ]
);
export { k as default };
