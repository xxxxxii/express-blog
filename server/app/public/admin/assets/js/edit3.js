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
import { d as i, g as d, a as p, u } from "./collect.js";
import { _ as c } from "./@qiun.js";
import {
  o as g,
  c as n,
  g as h,
  _ as f,
  a as V,
  a0 as b,
  e as _,
  Y as v,
  ab as y,
  t as j,
  f as U,
  p as T,
  b as k,
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
/* empty css        */ const C = {
    name: "collect-edit",
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
    async created() {
      (this.params.id = this.$route.params.id), await this.detail();
    },
    methods: {
      async detail() {
        try {
          let e = await i(this.params.id);
          if (200 === e.code) {
            let a = e.data;
            (a.pages = a.pages.split(",")), (this.params = a);
          }
        } catch (e) {
          console.error(e);
        }
      },
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
      async update() {
        try {
          this.params.pages = this.params.pages.toString();
          let e = await u(this.params);
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
          this.update();
        });
      },
    },
  },
  w = (e) => (T("data-v-f84b18bf"), (e = e()), k(), e),
  N = { class: "mb-20 bg-main pd-20" },
  x = { class: "row w-p100" },
  $ = { class: "row w-p100" },
  q = { class: "row w-p100" },
  P = w(() => V("span", { class: "ml-5 mr-5" }, "至", -1)),
  z = w(() => V("span", { class: "ml-5 mr-5" }, "每页递增", -1)),
  R = ["href"],
  L = { class: "row w-p100" },
  A = w(() => V("p", null, "内容：", -1)),
  S = ["innerHTML"];
const H = c(C, [
  [
    "render",
    function (i, d, p, u, c, T) {
      const k = e,
        C = a,
        w = l,
        H = s,
        M = t,
        O = r,
        E = m,
        G = o;
      return (
        g(),
        n("div", N, [
          h(
            G,
            { ref: "params", model: i.params, "label-width": "84px" },
            {
              default: f(() => [
                h(
                  E,
                  {
                    modelValue: i.activeName,
                    "onUpdate:modelValue":
                      d[14] || (d[14] = (e) => (i.activeName = e)),
                    class: "demo-tabs",
                  },
                  {
                    default: f(() => [
                      h(
                        O,
                        { label: "列表测试", name: "list" },
                        {
                          default: f(() => [
                            h(
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
                                default: f(() => [
                                  h(
                                    k,
                                    {
                                      modelValue: i.params.taskName,
                                      "onUpdate:modelValue":
                                        d[0] ||
                                        (d[0] = (e) => (i.params.taskName = e)),
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
                            h(
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
                                default: f(() => [
                                  V("div", x, [
                                    h(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: i.params.targetUrl,
                                        "onUpdate:modelValue":
                                          d[1] ||
                                          (d[1] = (e) =>
                                            (i.params.targetUrl = e)),
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
                            h(
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
                                default: f(() => [
                                  h(
                                    H,
                                    {
                                      modelValue: i.params.charset,
                                      "onUpdate:modelValue":
                                        d[2] ||
                                        (d[2] = (e) => (i.params.charset = e)),
                                      class: "ml-4",
                                    },
                                    {
                                      default: f(() => [
                                        h(
                                          w,
                                          { value: "1", size: "large" },
                                          {
                                            default: f(() => [b("uft-8")]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          w,
                                          { value: "2", size: "large" },
                                          {
                                            default: f(() => [b("gb2312")]),
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
                            h(
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
                                default: f(() => [
                                  V("div", $, [
                                    h(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: i.params.listTag,
                                        "onUpdate:modelValue":
                                          d[3] ||
                                          (d[3] = (e) =>
                                            (i.params.listTag = e)),
                                        placeholder: "例：.content h4 a",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    h(
                                      M,
                                      {
                                        class: "ml-5",
                                        type: "primary",
                                        onClick: T.getPages,
                                      },
                                      { default: f(() => [b(" 测试 ")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              C,
                              { label: "开始页面" },
                              {
                                default: f(() => [
                                  V("div", q, [
                                    h(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: i.params.startNum,
                                        "onUpdate:modelValue":
                                          d[4] ||
                                          (d[4] = (e) =>
                                            (i.params.startNum = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    P,
                                    h(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: i.params.endNum,
                                        "onUpdate:modelValue":
                                          d[5] ||
                                          (d[5] = (e) => (i.params.endNum = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    z,
                                    h(
                                      k,
                                      {
                                        class: "flex-1 mr-5",
                                        modelValue: i.params.increment,
                                        "onUpdate:modelValue":
                                          d[6] ||
                                          (d[6] = (e) =>
                                            (i.params.increment = e)),
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    h(
                                      M,
                                      {
                                        type: "primary",
                                        onClick: T.getListPages,
                                      },
                                      { default: f(() => [b("测试")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            i.listPages.length > 0
                              ? (g(),
                                _(
                                  C,
                                  { key: 0, label: "列表地址" },
                                  {
                                    default: f(() => [
                                      (g(!0),
                                      n(
                                        v,
                                        null,
                                        y(
                                          i.listPages,
                                          (e, a) => (
                                            g(),
                                            n(
                                              "p",
                                              { class: "mr-30", key: a },
                                              j(e),
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
                              : U("", !0),
                            i.params.pages.length > 0
                              ? (g(),
                                _(
                                  C,
                                  { key: 1, label: "文章地址" },
                                  {
                                    default: f(() => [
                                      (g(!0),
                                      n(
                                        v,
                                        null,
                                        y(
                                          i.params.pages,
                                          (e, a) => (
                                            g(),
                                            n(
                                              "p",
                                              { class: "mr-30", key: a },
                                              j(e),
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
                              : U("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                      h(
                        O,
                        { label: "内容测试", name: "article" },
                        {
                          default: f(() => [
                            h(
                              C,
                              { label: "目标地址" },
                              {
                                default: f(() => [
                                  V(
                                    "a",
                                    {
                                      class: "mr-10",
                                      href: i.params.pages[0],
                                      target: "_blank",
                                    },
                                    j(i.params.pages[0]),
                                    9,
                                    R
                                  ),
                                  b("（默认第一个作为测试） "),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
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
                                default: f(() => [
                                  h(
                                    k,
                                    {
                                      class: "flex-1",
                                      placeholder: "例：.title",
                                      modelValue: i.params.titleTag,
                                      "onUpdate:modelValue":
                                        d[7] ||
                                        (d[7] = (e) => (i.params.titleTag = e)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
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
                                default: f(() => [
                                  h(
                                    k,
                                    {
                                      placeholder: "例：.article",
                                      modelValue: i.params.articleTag,
                                      "onUpdate:modelValue":
                                        d[8] ||
                                        (d[8] = (e) =>
                                          (i.params.articleTag = e)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              C,
                              { label: "清理代码", prop: "removeCode" },
                              {
                                default: f(() => [
                                  h(
                                    k,
                                    {
                                      modelValue: i.params.removeCode,
                                      "onUpdate:modelValue":
                                        d[9] ||
                                        (d[9] = (e) =>
                                          (i.params.removeCode = e)),
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
                            h(
                              C,
                              { label: "清理正则", prop: "clearRegCode" },
                              {
                                default: f(() => [
                                  V("div", L, [
                                    h(
                                      k,
                                      {
                                        class: "flex-1",
                                        modelValue: i.params.clearRegCode,
                                        "onUpdate:modelValue":
                                          d[10] ||
                                          (d[10] = (e) =>
                                            (i.params.clearRegCode = e)),
                                        placeholder: "填写正则",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                    h(
                                      M,
                                      {
                                        class: "ml-5",
                                        type: "primary",
                                        onClick: T.getArticle,
                                      },
                                      { default: f(() => [b("测试")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              C,
                              { class: "show", label: "文章结果" },
                              {
                                default: f(() => [
                                  V(
                                    "p",
                                    null,
                                    "标题：" + j(i.article.title),
                                    1
                                  ),
                                  A,
                                  V(
                                    "div",
                                    { innerHTML: i.article.article },
                                    null,
                                    8,
                                    S
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      h(
                        O,
                        { label: "保存配置", name: "save" },
                        {
                          default: f(() => [
                            h(
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
                                default: f(() => [
                                  h(
                                    k,
                                    {
                                      modelValue: i.params.cid,
                                      "onUpdate:modelValue":
                                        d[11] ||
                                        (d[11] = (e) => (i.params.cid = e)),
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
                            h(
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
                                default: f(() => [
                                  h(
                                    H,
                                    {
                                      modelValue: i.params.status,
                                      "onUpdate:modelValue":
                                        d[12] ||
                                        (d[12] = (e) => (i.params.status = e)),
                                      class: "ml-4",
                                    },
                                    {
                                      default: f(() => [
                                        h(
                                          w,
                                          { value: "1", size: "large" },
                                          {
                                            default: f(() => [b("草稿")]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          w,
                                          { value: "2", size: "large" },
                                          {
                                            default: f(() => [b("发布")]),
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
                            h(C, null, {
                              default: f(() => [
                                h(
                                  M,
                                  {
                                    type: "primary",
                                    onClick:
                                      d[13] ||
                                      (d[13] = (e) => T.submit("params")),
                                  },
                                  { default: f(() => [b("保存")]), _: 1 }
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
  ["__scopeId", "data-v-f84b18bf"],
]);
export { H as default };
