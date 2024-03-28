import { s, t as a } from "./element-plus.js";
import { t } from "./article.js";
import { r as e } from "./site2.js";
import { _ as l, q as c } from "./@qiun.js";
import "./js-cookie.js";
import {
  r as o,
  o as i,
  e as r,
  _ as m,
  g as n,
  a as d,
  a0 as p,
  t as u,
  p as f,
  b as g,
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
/* empty css        */ const v = {
    name: "home-info",
    components: { qiunVueUcharts: c },
    data: () => ({
      data: {
        week: 0,
        message: 0,
        tag: 0,
        article: 0,
        version: "v.1.6.0",
        appName: "ChanCMS",
        port: "",
        versionTime: "",
        author: "",
      },
      dirname: "",
      loading: !0,
      chartData: {},
      opts: {
        rotate: !1,
        rotateLock: !1,
        color: [
          "#FADC19",
          "#9FDB1D",
          "#00B42A",
          "#3491FA",
          "#165DFF",
          "#722ED1",
        ],
        padding: [5, 5, 5, 5],
        dataLabel: !0,
        enableScroll: !1,
        legend: { show: !0, position: "right", lineHeight: 25 },
        title: { name: "ChanCMS", fontSize: 15, color: "#666666" },
        subtitle: { name: "架构", fontSize: 25, color: "#7cb5ec" },
        extra: {
          ring: {
            ringWidth: 60,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: !0,
            borderWidth: 3,
            borderColor: "#FFFFFF",
          },
        },
      },
    }),
    computed: {},
    created() {
      this.chart();
    },
    mounted() {
      this.tongji(), this.runEnv();
    },
    methods: {
      async tongji() {
        try {
          let s = await t();
          200 === s.code
            ? ((this.data = s.data), (this.loading = !1))
            : this.$message({ message: s.msg, type: "success" });
        } catch (s) {
          console.log(s);
        }
      },
      async runEnv() {
        try {
          let s = await e();
          const { code: a, data: t } = s;
          200 === a
            ? (this.dirname = t.dirname)
            : this.$message({ message: s.msg, type: "success" });
        } catch (s) {
          console.log(s);
        }
      },
      chart() {
        this.chartData = JSON.parse(
          JSON.stringify({
            series: [
              {
                data: [
                  { name: "nodejs", value: 40 },
                  { name: "mysql", value: 10 },
                  { name: "vue3", value: 40 },
                  { name: "javascript", value: 90 },
                  { name: "css3", value: 10 },
                  { name: "html5", value: 10 },
                ],
              },
            ],
          })
        );
      },
    },
  },
  b = (s) => (f("data-v-2240c449"), (s = s()), g(), s),
  h = { class: "bg-main pd-20 radius-6 row justify-around mb-20" },
  j = { class: "row flex-col align-c" },
  x = b(() =>
    d(
      "div",
      { class: "tj-img" },
      [d("img", { src: "/admin/assets/svg/ico-article.svg" })],
      -1
    )
  ),
  y = b(() => d("p", { class: "f-12 text-c mt-5" }, "文章内容", -1)),
  w = { class: "f-20 text-c" },
  _ = b(() => d("sub", { class: "pos-r t-0 f-12" }, "篇", -1)),
  F = { class: "row flex-col align-c" },
  S = b(() =>
    d(
      "div",
      { class: "tj-img" },
      [d("img", { src: "/admin/assets/svg/ico-will.svg" })],
      -1
    )
  ),
  D = b(() => d("p", { class: "f-12 text-c mt-5" }, "文章标签", -1)),
  q = { class: "f-20 text-c" },
  C = b(() => d("sub", { class: "pos-r t-0 f-12" }, "个", -1)),
  k = b(() =>
    d(
      "div",
      { class: "tj-img" },
      [d("img", { src: "/admin/assets/svg/ico-message.svg" })],
      -1
    )
  ),
  E = b(() => d("p", { class: "f-12 text-c mt-5" }, "留言信息", -1)),
  M = { class: "f-20 text-c" },
  z = b(() => d("sub", { class: "pos-r t-0 f-12" }, "条", -1)),
  A = b(() =>
    d(
      "div",
      { class: "tj-img" },
      [d("img", { src: "/admin/assets/svg/ico-up.svg" })],
      -1
    )
  ),
  O = b(() => d("p", { class: "f-12 text-c mt-5" }, "七日更新", -1)),
  L = { class: "f-20 text-c" },
  N = b(() => d("sub", { class: "pos-r t-0 f-12" }, "条", -1)),
  W = { class: "row" },
  B = { class: "bg-main pd-20 radius-6 mb-20 row chart" },
  J = b(() =>
    d(
      "div",
      { class: "bg-main pd-20 radius-6 mb-20" },
      [
        d("div", { class: "mb-12 f-16 c-1d2129 bold" }, "系统特色"),
        d(
          "p",
          { class: "f-13 mb-6 c-4e5969" },
          " ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。 "
        ),
        d("p", { class: "f-13 mb-6 c-4e5969" }, "轻量、灵活、稳定、高性能。"),
        d("p", { class: "f-13 mb-6 c-4e5969" }, [
          d("strong", null, "SEO。"),
          p("专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。 "),
        ]),
        d("p", { class: "f-13 mb-6 c-4e5969" }, [
          d("strong", null, "安全。"),
          p("基于knex,高防sql注入，接口权限校验，为安全提供保障。 "),
        ]),
        d("p", { class: "f-13 mb-6 c-4e5969" }, [
          d("strong", null, "灵活"),
          p("。碎片功能，支持零碎文案配置，方便各类灵活文案配置。 "),
        ]),
        d("p", { class: "f-13 mb-6 c-4e5969" }, [
          d("strong", null, "高扩展。"),
          p("支持扩展模型，字段配置，可动态生成表，超强扩展。 "),
        ]),
        d("p", { class: "f-13 mb-6 c-4e5969" }, [
          d("strong", null, "模块化。"),
          p("一切模块相互独立，互不干扰。 "),
        ]),
        d("p", { class: "f-13 c-4e5969" }, [
          d("strong", null, "插件化。"),
          p("灵活开发，支持完整功能模块。 "),
        ]),
      ],
      -1
    )
  ),
  T = { class: "bg-main pd-20 radius-6 mb-20" },
  $ = b(() => d("div", { class: "mb-12 f-16 c-1d2129 bold" }, "技术架构", -1)),
  H = b(() =>
    d(
      "p",
      { class: "f-13 mb-6 c-4e5969" },
      [d("span", { class: "c-333" }, "服务架构："), p("nodejs express mysql ")],
      -1
    )
  ),
  I = b(() =>
    d(
      "p",
      { class: "f-13 mb-6" },
      [d("span", null, "前端架构："), p("vite vue3 element-plus")],
      -1
    )
  ),
  Q = { class: "f-13 mb-6" },
  R = b(() => d("span", null, "程序路径：", -1)),
  U = { class: "f-13 mb-6" },
  V = b(() => d("span", null, "程序版本：", -1)),
  G = { class: "f-13 mb-6" },
  K = b(() => d("span", null, "发布时间：", -1)),
  P = { class: "f-13 mb-6" },
  X = b(() => d("span", null, "技术开发：", -1)),
  Y = b(() =>
    d(
      "p",
      { class: "f-13 mb-6 row" },
      [d("span", null, "联系微信："), p("yanyutao2014")],
      -1
    )
  ),
  Z = b(() =>
    d(
      "p",
      { class: "f-13 mb-6 row" },
      [d("span", null, "联系邮箱："), p("867528315@qq.com")],
      -1
    )
  ),
  ss = b(() =>
    d(
      "div",
      { class: "bg-main pd-20 radius-6 mb-20" },
      [
        d("div", { class: "mb-12 f-16 c-1d2129 bold" }, "技术服务"),
        d("p", { class: "f-13 mb-6 c-4e5969 row justify-around" }, [
          d("span", { class: "c-1d2129 col-12 mb-10" }, "前端开发"),
          d("span", { class: "c-1d2129 col-12 mb-10" }, "企业建站"),
          d("span", { class: "c-1d2129 col-12 mb-10" }, "小程序开发"),
          d("span", { class: "c-1d2129 col-12 mb-10" }, "技术顾问"),
          d("span", { class: "c-1d2129 col-12" }, "互动玩法2d"),
          d("span", { class: "c-1d2129 col-12" }, "技术交流"),
        ]),
      ],
      -1
    )
  );
const as = l(v, [
  [
    "render",
    function (t, e, l, c, f, g) {
      const v = o("router-link"),
        b = o("qiun-vue-ucharts"),
        as = s,
        ts = a;
      return (
        i(),
        r(
          ts,
          { gutter: 20 },
          {
            default: m(() => [
              n(
                as,
                { xs: 24, sm: 18, md: 18, lg: 18, xl: 18 },
                {
                  default: m(() => [
                    d("div", h, [
                      n(
                        v,
                        { class: "c-1d2129", to: "/article" },
                        {
                          default: m(() => [
                            d("div", j, [
                              x,
                              y,
                              d("p", w, [p(u(t.data.article) + " ", 1), _]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      n(
                        v,
                        { class: "c-1d2129", to: "/tag" },
                        {
                          default: m(() => [
                            d("div", F, [
                              S,
                              D,
                              d("p", q, [p(u(t.data.tag) + " ", 1), C]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      n(
                        v,
                        { class: "c-1d2129", to: "/message" },
                        {
                          default: m(() => [
                            d("div", null, [
                              k,
                              E,
                              d("p", M, [p(u(t.data.message) + " ", 1), z]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      d("div", null, [
                        A,
                        O,
                        d("p", L, [p(u(t.data.week) + " ", 1), N]),
                      ]),
                    ]),
                    d("div", W, [
                      n(
                        ts,
                        { gutter: 20 },
                        {
                          default: m(() => [
                            n(
                              as,
                              { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
                              {
                                default: m(() => [
                                  d("div", B, [
                                    n(
                                      b,
                                      {
                                        type: "ring",
                                        opts: t.opts,
                                        chartData: t.chartData,
                                      },
                                      null,
                                      8,
                                      ["opts", "chartData"]
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            n(
                              as,
                              { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
                              { default: m(() => [J]), _: 1 }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              n(
                as,
                { xs: 24, sm: 6, md: 6, lg: 6, xl: 6 },
                {
                  default: m(() => [
                    d("div", T, [
                      $,
                      H,
                      I,
                      d("p", Q, [R, p(u(t.dirname), 1)]),
                      d("p", U, [V, p(u(t.data.version), 1)]),
                      d("p", G, [K, p(u(t.data.versionTime), 1)]),
                      d("p", P, [X, p(u(t.data.author), 1)]),
                      Y,
                      Z,
                    ]),
                    ss,
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  ],
  ["__scopeId", "data-v-2240c449"],
]);
export { as as default };
