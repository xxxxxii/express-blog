import {
  q as a,
  r as e,
  G as s,
  O as t,
  f as m,
  p as o,
  H as l,
} from "./element-plus.js";
import { d as r, u as i } from "./frag.js";
import { _ as p } from "./main.js";
import { t as n } from "./tinymce.js";
import { u as d } from "./upload.js";
import { _ as u } from "./@qiun.js";
import {
  r as c,
  o as g,
  c as f,
  w as y,
  e as j,
  _ as h,
  a as _,
  g as b,
  a0 as V,
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
const k = u(
  {
    name: "frag-edit",
    components: { Vue3Tinymce: p },
    data: () => ({
      setting: n,
      loading: !0,
      params: {
        id: 0,
        type: "1",
        name: 0,
        mark: "",
        content: "欢迎使用ChanCMS系统",
      },
      dialogVisible: !1,
      disabled: !1,
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
      this.setting.images_upload_url = await d();
    },
    async created() {
      (this.params.id = this.$route.params.id), await this.detail();
    },
    unmounted() {},
    methods: {
      tinymce() {
        this.loading = !1;
      },
      setContent(a) {
        this.params.content = a;
      },
      async detail() {
        try {
          let a = await r(this.params.id);
          200 === a.code &&
            ((this.params = a.data),
            "2" == this.params.type && (this.loading = !1));
        } catch (a) {
          console.error(a);
        }
      },
      handleAttr(a) {
        console.log("e--\x3e", a);
      },
      handleSubCid(a) {
        console.log("e--\x3e", a);
      },
      async update() {
        try {
          let a = await i(this.params);
          200 == a.code
            ? (this.$message({ message: "更新成功^_^", type: "success" }),
              this.$router.go(-1))
            : this.$message({ message: a.msg, type: "success" });
        } catch (a) {
          console.log(a);
        }
      },
      submit(a) {
        this.$refs[a].validate((a) => {
          if (!a) return console.log("error submit!!"), !1;
          this.update();
        });
      },
    },
  },
  [
    [
      "render",
      function (r, i, p, n, d, u) {
        const k = a,
          w = e,
          C = s,
          U = t,
          $ = c("vue3-tinymce"),
          q = m,
          I = o,
          z = l;
        return (
          g(),
          f("div", x, [
            y(
              (g(),
              j(
                I,
                {
                  ref: "params",
                  model: r.params,
                  rules: r.paramsRules,
                  "label-width": "84px",
                  class: "mt-20",
                },
                {
                  default: h(() => [
                    _("div", null, [
                      b(
                        w,
                        { label: "碎片名称", prop: "name" },
                        {
                          default: h(() => [
                            b(
                              k,
                              {
                                modelValue: r.params.name,
                                "onUpdate:modelValue":
                                  i[0] || (i[0] = (a) => (r.params.name = a)),
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      b(
                        w,
                        { label: "碎片标识", prop: "mark" },
                        {
                          default: h(() => [
                            b(
                              k,
                              {
                                modelValue: r.params.mark,
                                "onUpdate:modelValue":
                                  i[1] || (i[1] = (a) => (r.params.mark = a)),
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      b(
                        w,
                        { label: "碎片类型", prop: "type" },
                        {
                          default: h(() => [
                            b(
                              U,
                              {
                                modelValue: r.params.type,
                                "onUpdate:modelValue":
                                  i[2] || (i[2] = (a) => (r.params.type = a)),
                                class: "ml-4",
                              },
                              {
                                default: h(() => [
                                  b(
                                    C,
                                    { value: "1" },
                                    { default: h(() => [V("富文本")]), _: 1 }
                                  ),
                                  b(
                                    C,
                                    { value: "2" },
                                    { default: h(() => [V("文本框")]), _: 1 }
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
                      "1" == r.params.type
                        ? (g(),
                          j(
                            w,
                            { key: 0, label: "碎片内容" },
                            {
                              default: h(() => [
                                b(
                                  $,
                                  {
                                    modelValue: r.params.content,
                                    "onUpdate:modelValue":
                                      i[3] ||
                                      (i[3] = (a) => (r.params.content = a)),
                                    setting: r.setting,
                                    onInit: u.tinymce,
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
                      "2" == r.params.type
                        ? (g(),
                          j(
                            w,
                            { key: 1, label: "碎片内容" },
                            {
                              default: h(() => [
                                b(
                                  k,
                                  {
                                    type: "textarea",
                                    prop: "textarea",
                                    class: "textarea",
                                    rows: 3,
                                    modelValue: r.params.content,
                                    "onUpdate:modelValue":
                                      i[4] ||
                                      (i[4] = (a) => (r.params.content = a)),
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
                    b(w, null, {
                      default: h(() => [
                        b(
                          q,
                          {
                            type: "primary",
                            onClick: i[5] || (i[5] = (a) => u.submit("params")),
                          },
                          { default: h(() => [V("保存")]), _: 1 }
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
              [[z, r.loading]]
            ),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-cf3478bc"],
  ]
);
export { k as default };
