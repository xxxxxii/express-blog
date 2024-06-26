import {
  q as e,
  r as a,
  G as l,
  O as s,
  f as t,
  u as r,
  v as m,
  p as o,
} from "./element-plus.js";
import { g as d, a as p, c as i } from "./collect.js";
import { _ as u } from "./@qiun.js";
import {
  o as c,
  c as g,
  g as n,
  _ as h,
  a as f,
  a0 as V,
  e as _,
  Y as b,
  ab as v,
  t as y,
  f as j,
  p as U,
  b as T,
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
/* empty css        */ const k = {
    name: "collect-add",
    data: () => ({
      activeName: "list",
      params: {
        taskName: "",
        targetUrl: "",
        listTag: "",
        startNum: 1,
        endNum: 1,
        increment: 1,
        pages: [],
        titleTag: "",
        articleTag: "",
        charset: "1",
        clearRegCode: "",
        status: "1",
        cid: 1,
      },
      listPages: [],
      article: {},
    }),
    computed: {},
    mounted() {},
    async created() {},
    methods: {
      handleAttr(e) {
        console.log("e--\x3e", e);
      },
      handleSubCid(e) {
        console.log("e--\x3e", e);
      },
      async getPages() {
        try {
          let { targetUrl: e, listTag: a, charset: l } = this.params,
            s = await d({ targetUrl: e, listTag: a, charset: l });
          if (200 == s.code) {
            let a = s.data;
            const l = /^(.*:\/\/[^\/]+).*$/,
              t = e.match(l)[1];
            a[0].includes("http") || (a = a.map((e) => t + e)),
              (this.params.pages = a),
              this.$message({
                message: "列表地址获取成功^_^",
                type: "success",
              });
          }
        } catch (e) {
          console.log(e);
        }
      },
      async getListPages() {
        try {
          let {
              targetUrl: e,
              startNum: a,
              endNum: l,
              increment: s,
            } = this.params,
            t = [];
          for (let r = a; r <= l; r += s) {
            let a = e.replace("${page}", r);
            t.push(a);
          }
          (this.listPages = t),
            this.listPages.map(async (e, a) => {
              let { listTag: l, charset: s } = this.params;
              if (a > 0) {
                let a = await d({ targetUrl: e, listTag: l, charset: s });
                200 == a.code &&
                  (this.params.pages = [...this.params.pages, ...a.data]);
              }
            });
        } catch (e) {
          console.log(e);
        }
      },
      async getArticle() {
        try {
          let {
            taskUrl: e,
            titleTag: a,
            articleTag: l,
            clearRegCode: s,
            removeCode: t,
            charset: r,
          } = this.params;
          e = this.params.pages[0] || "";
          let m = await p({
            taskUrl: e,
            titleTag: a,
            articleTag: l,
            removeCode: t,
            clearRegCode: s,
            charset: r,
          });
          200 == m.code &&
            ((this.article = m.data),
            this.$message({ message: "内功获取成功^_^", type: "success" }));
        } catch (e) {
          console.log(e);
        }
      },
      async create() {
        try {
          this.params.pages = this.params.pages.toString();
          let e = await i(this.params);
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
          if (!e) return !1;
          this.create();
        });
      },
    },
  },
  C = (e) => (U("data-v-bda84583"), (e = e()), T(), e),
  w = { class: "mb-20 bg-main pd-20" },
  N = { class: "row w-p100" },
  x = { class: "row w-p100" },
  q = { class: "row w-p100" },
  $ = C(() => f("span", { class: "ml-5 mr-5" }, "至", -1)),
  P = C(() => f("span", { class: "ml-5 mr-5" }, "每页递增", -1)),
  z = ["href"],
  R = { class: "row w-p100" },
  L = C(() => f("p", null, "内容：", -1)),
  A = ["innerHTML"];
const S = u(k, [
  [
    "render",
    function (d, p, i, u, U, T) {
      const k = e,
        C = a,
        S = l,
        H = s,
        M = t,
        O = r,
        E = m,
        G = o;
      return (
        c(),
        g("div", w, [
          n(
            G,
            { ref: "params", model: d.params, "label-width": "84px" },
            {
              default: h(() => [
                n(
                  E,
                  {
                    modelValue: d.activeName,
                    "onUpdate:modelValue":
                      p[14] || (p[14] = (e) => (d.activeName = e)),
                    class: "demo-tabs",
                  },
                  {
                    default: h(() => [
                      n(
                        O,
                        { label: "列表测试", name: "list" },
                        {
                          default: h(() => [
                            n(
                              C,
                              {
                                label: "任务名称",
                                prop: "taskName",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入任务名称",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    k,
                                    {
                                      modelValue: d.params.taskName,
                                      "onUpdate:modelValue":
                                        p[0] ||
                                        (p[0] = (e) => (d.params.taskName = e)),
                                      placeholder: "例：前端库-chat问答",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              {
                                label: "列表网址",
                                prop: "targetUrl",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入匹配网址",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  f("div", N, [
                                    n(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: d.params.targetUrl,
                                        "onUpdate:modelValue":
                                          p[1] ||
                                          (p[1] = (e) =>
                                            (d.params.targetUrl = e)),
                                        placeholder: "/SEO/1_${page}.html",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              {
                                label: "字符集",
                                prop: "charset",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请选择字符集",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    H,
                                    {
                                      modelValue: d.params.charset,
                                      "onUpdate:modelValue":
                                        p[2] ||
                                        (p[2] = (e) => (d.params.charset = e)),
                                      class: "ml-4",
                                    },
                                    {
                                      default: h(() => [
                                        n(
                                          S,
                                          { value: "1", size: "large" },
                                          {
                                            default: h(() => [V("uft-8")]),
                                            _: 1,
                                          }
                                        ),
                                        n(
                                          S,
                                          { value: "2", size: "large" },
                                          {
                                            default: h(() => [V("gb2312")]),
                                            _: 1,
                                          }
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
                            n(
                              C,
                              {
                                label: "列表链接",
                                prop: "listTag",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入文章列表标签",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  f("div", x, [
                                    n(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: d.params.listTag,
                                        "onUpdate:modelValue":
                                          p[3] ||
                                          (p[3] = (e) =>
                                            (d.params.listTag = e)),
                                        placeholder: "例：.content h4 a",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    n(
                                      M,
                                      {
                                        class: "ml-5",
                                        type: "primary",
                                        onClick: T.getPages,
                                      },
                                      { default: h(() => [V(" 测试 ")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              { label: "开始页面" },
                              {
                                default: h(() => [
                                  f("div", q, [
                                    n(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: d.params.startNum,
                                        "onUpdate:modelValue":
                                          p[4] ||
                                          (p[4] = (e) =>
                                            (d.params.startNum = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    $,
                                    n(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: d.params.endNum,
                                        "onUpdate:modelValue":
                                          p[5] ||
                                          (p[5] = (e) => (d.params.endNum = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    P,
                                    n(
                                      k,
                                      {
                                        class: "flex-1 mr-5",
                                        modelValue: d.params.increment,
                                        "onUpdate:modelValue":
                                          p[6] ||
                                          (p[6] = (e) =>
                                            (d.params.increment = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    n(
                                      M,
                                      {
                                        type: "primary",
                                        onClick: T.getListPages,
                                      },
                                      { default: h(() => [V("测试")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            d.listPages.length > 0
                              ? (c(),
                                _(
                                  C,
                                  { key: 0, label: "列表地址" },
                                  {
                                    default: h(() => [
                                      (c(!0),
                                      g(
                                        b,
                                        null,
                                        v(
                                          d.listPages,
                                          (e, a) => (
                                            c(),
                                            g(
                                              "p",
                                              { class: "mr-30", key: a },
                                              y(e),
                                              1
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : j("", !0),
                            d.params.pages.length > 0
                              ? (c(),
                                _(
                                  C,
                                  { key: 1, label: "文章地址" },
                                  {
                                    default: h(() => [
                                      (c(!0),
                                      g(
                                        b,
                                        null,
                                        v(
                                          d.params.pages,
                                          (e, a) => (
                                            c(),
                                            g(
                                              "p",
                                              { class: "mr-30", key: a },
                                              y(e),
                                              1
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : j("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                      n(
                        O,
                        { label: "内容测试", name: "article" },
                        {
                          default: h(() => [
                            n(
                              C,
                              { label: "目标地址" },
                              {
                                default: h(() => [
                                  f(
                                    "a",
                                    {
                                      class: "mr-10",
                                      href: d.params.pages[0],
                                      target: "_blank",
                                    },
                                    y(d.params.pages[0]),
                                    9,
                                    z
                                  ),
                                  V("（默认第一个作为测试） "),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              {
                                label: "文章标题",
                                prop: "titleTag",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入文章标题",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    k,
                                    {
                                      class: "flex-1",
                                      placeholder: "例：.title",
                                      modelValue: d.params.titleTag,
                                      "onUpdate:modelValue":
                                        p[7] ||
                                        (p[7] = (e) => (d.params.titleTag = e)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              {
                                label: "文章内容",
                                prop: "articleTag",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入文章内容",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    k,
                                    {
                                      placeholder: "例：.article",
                                      modelValue: d.params.articleTag,
                                      "onUpdate:modelValue":
                                        p[8] ||
                                        (p[8] = (e) =>
                                          (d.params.articleTag = e)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              { label: "清理代码", prop: "removeCode" },
                              {
                                default: h(() => [
                                  n(
                                    k,
                                    {
                                      modelValue: d.params.removeCode,
                                      "onUpdate:modelValue":
                                        p[9] ||
                                        (p[9] = (e) =>
                                          (d.params.removeCode = e)),
                                      placeholder: "例：$('div').remove()",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              { label: "清理正则", prop: "clearRegCode" },
                              {
                                default: h(() => [
                                  f("div", R, [
                                    n(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: d.params.clearRegCode,
                                        "onUpdate:modelValue":
                                          p[10] ||
                                          (p[10] = (e) =>
                                            (d.params.clearRegCode = e)),
                                        placeholder: "填写正则",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    n(
                                      M,
                                      {
                                        class: "ml-5",
                                        type: "primary",
                                        onClick: T.getArticle,
                                      },
                                      { default: h(() => [V("测试")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              { class: "show", label: "文章结果" },
                              {
                                default: h(() => [
                                  f(
                                    "p",
                                    null,
                                    "标题：" + y(d.article.title),
                                    1
                                  ),
                                  L,
                                  f(
                                    "div",
                                    { innerHTML: d.article.article },
                                    null,
                                    8,
                                    A
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      n(
                        O,
                        { label: "保存配置", name: "save" },
                        {
                          default: h(() => [
                            n(
                              C,
                              {
                                label: "保存栏目",
                                prop: "articleTag",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请输入保存栏目",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    k,
                                    {
                                      modelValue: d.params.cid,
                                      "onUpdate:modelValue":
                                        p[11] ||
                                        (p[11] = (e) => (d.params.cid = e)),
                                      placeholder: "例：cid",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              C,
                              {
                                label: "发布状态",
                                prop: "status",
                                rules: [
                                  {
                                    required: !0,
                                    message: "请选择字符集",
                                    trigger: "blur",
                                  },
                                ],
                              },
                              {
                                default: h(() => [
                                  n(
                                    H,
                                    {
                                      modelValue: d.params.status,
                                      "onUpdate:modelValue":
                                        p[12] ||
                                        (p[12] = (e) => (d.params.status = e)),
                                      class: "ml-4",
                                    },
                                    {
                                      default: h(() => [
                                        n(
                                          S,
                                          { value: "1", size: "large" },
                                          {
                                            default: h(() => [V("草稿")]),
                                            _: 1,
                                          }
                                        ),
                                        n(
                                          S,
                                          { value: "2", size: "large" },
                                          {
                                            default: h(() => [V("发布")]),
                                            _: 1,
                                          }
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
                            n(C, null, {
                              default: h(() => [
                                n(
                                  M,
                                  {
                                    type: "primary",
                                    onClick:
                                      p[13] ||
                                      (p[13] = (e) => T.submit("params")),
                                  },
                                  { default: h(() => [V("保存")]), _: 1 }
                                ),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
              _: 1,
            },
            8,
            ["model"]
          ),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-bda84583"],
]);
export { S as default };
