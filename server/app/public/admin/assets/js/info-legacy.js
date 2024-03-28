System.register(
  [
    "./element-plus-legacy.js",
    "./article-legacy.js",
    "./site-legacy2.js",
    "./@qiun-legacy.js",
    "./js-cookie-legacy.js",
    "./@vue-legacy.js",
    "./lodash-es-legacy.js",
    "./async-validator-legacy.js",
    "./@vueuse-legacy.js",
    "./dayjs-legacy.js",
    "./@element-plus-legacy.js",
    "./@ctrl-legacy.js",
    "./@popperjs-legacy.js",
    "./memoize-one-legacy.js",
    "./normalize-wheel-es-legacy.js",
    "./index-legacy.js",
    "./pinia-legacy.js",
    "./vue-demi-legacy.js",
    "./pinia-plugin-persist-legacy.js",
    "./vue-router-legacy.js",
    "./axios-legacy.js",
    "./saduocss-legacy.js",
  ],
  function (s, a) {
    "use strict";
    var l, e, t, c, n, i, d, o, r, u, m, g, p, f, v, h;
    return {
      setters: [
        (s) => {
          (l = s.s), (e = s.t);
        },
        (s) => {
          t = s.t;
        },
        (s) => {
          c = s.r;
        },
        (s) => {
          (n = s._), (i = s.q);
        },
        null,
        (s) => {
          (d = s.r),
            (o = s.o),
            (r = s.e),
            (u = s._),
            (m = s.g),
            (g = s.a),
            (p = s.a0),
            (f = s.t),
            (v = s.p),
            (h = s.b);
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {
        var a = document.createElement("style");
        (a.textContent =
          ".radius-6[data-v-2240c449]{border-radius:6px}.c-9ca4bf[data-v-2240c449]{color:#9ca4bf}.chanyue-title[data-v-2240c449],.chanyue-author[data-v-2240c449],.chanyue-txt[data-v-2240c449]{font-family:chanyue}.tj-img[data-v-2240c449]{width:54px;height:54px;background-color:#f2f3f5;border-radius:50%}.chart[data-v-2240c449]{max-width:calc(50vw - 45px);height:330px}@media only screen and (max-width: 992px){.chart[data-v-2240c449]{max-width:calc(100vw - 45px);height:320px}}\n"),
          document.head.appendChild(a);
        const b = {
            name: "home-info",
            components: { qiunVueUcharts: i },
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
                  let s = await c();
                  const { code: a, data: l } = s;
                  200 === a
                    ? (this.dirname = l.dirname)
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
          y = (s) => (v("data-v-2240c449"), (s = s()), h(), s),
          x = { class: "bg-main pd-20 radius-6 row justify-around mb-20" },
          j = { class: "row flex-col align-c" },
          w = y(() =>
            g(
              "div",
              { class: "tj-img" },
              [g("img", { src: "/admin/assets/svg/ico-article.svg" })],
              -1
            )
          ),
          _ = y(() => g("p", { class: "f-12 text-c mt-5" }, "文章内容", -1)),
          S = { class: "f-20 text-c" },
          C = y(() => g("sub", { class: "pos-r t-0 f-12" }, "篇", -1)),
          F = { class: "row flex-col align-c" },
          D = y(() =>
            g(
              "div",
              { class: "tj-img" },
              [g("img", { src: "/admin/assets/svg/ico-will.svg" })],
              -1
            )
          ),
          q = y(() => g("p", { class: "f-12 text-c mt-5" }, "文章标签", -1)),
          k = { class: "f-20 text-c" },
          E = y(() => g("sub", { class: "pos-r t-0 f-12" }, "个", -1)),
          M = y(() =>
            g(
              "div",
              { class: "tj-img" },
              [g("img", { src: "/admin/assets/svg/ico-message.svg" })],
              -1
            )
          ),
          z = y(() => g("p", { class: "f-12 text-c mt-5" }, "留言信息", -1)),
          A = { class: "f-20 text-c" },
          O = y(() => g("sub", { class: "pos-r t-0 f-12" }, "条", -1)),
          L = y(() =>
            g(
              "div",
              { class: "tj-img" },
              [g("img", { src: "/admin/assets/svg/ico-up.svg" })],
              -1
            )
          ),
          N = y(() => g("p", { class: "f-12 text-c mt-5" }, "七日更新", -1)),
          W = { class: "f-20 text-c" },
          B = y(() => g("sub", { class: "pos-r t-0 f-12" }, "条", -1)),
          J = { class: "row" },
          T = { class: "bg-main pd-20 radius-6 mb-20 row chart" },
          $ = y(() =>
            g(
              "div",
              { class: "bg-main pd-20 radius-6 mb-20" },
              [
                g("div", { class: "mb-12 f-16 c-1d2129 bold" }, "系统特色"),
                g(
                  "p",
                  { class: "f-13 mb-6 c-4e5969" },
                  " ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。 "
                ),
                g(
                  "p",
                  { class: "f-13 mb-6 c-4e5969" },
                  "轻量、灵活、稳定、高性能。"
                ),
                g("p", { class: "f-13 mb-6 c-4e5969" }, [
                  g("strong", null, "SEO。"),
                  p("专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。 "),
                ]),
                g("p", { class: "f-13 mb-6 c-4e5969" }, [
                  g("strong", null, "安全。"),
                  p("基于knex,高防sql注入，接口权限校验，为安全提供保障。 "),
                ]),
                g("p", { class: "f-13 mb-6 c-4e5969" }, [
                  g("strong", null, "灵活"),
                  p("。碎片功能，支持零碎文案配置，方便各类灵活文案配置。 "),
                ]),
                g("p", { class: "f-13 mb-6 c-4e5969" }, [
                  g("strong", null, "高扩展。"),
                  p("支持扩展模型，字段配置，可动态生成表，超强扩展。 "),
                ]),
                g("p", { class: "f-13 mb-6 c-4e5969" }, [
                  g("strong", null, "模块化。"),
                  p("一切模块相互独立，互不干扰。 "),
                ]),
                g("p", { class: "f-13 c-4e5969" }, [
                  g("strong", null, "插件化。"),
                  p("灵活开发，支持完整功能模块。 "),
                ]),
              ],
              -1
            )
          ),
          H = { class: "bg-main pd-20 radius-6 mb-20" },
          I = y(() =>
            g("div", { class: "mb-12 f-16 c-1d2129 bold" }, "技术架构", -1)
          ),
          Q = y(() =>
            g(
              "p",
              { class: "f-13 mb-6 c-4e5969" },
              [
                g("span", { class: "c-333" }, "服务架构："),
                p("nodejs express mysql "),
              ],
              -1
            )
          ),
          R = y(() =>
            g(
              "p",
              { class: "f-13 mb-6" },
              [g("span", null, "前端架构："), p("vite vue3 element-plus")],
              -1
            )
          ),
          U = { class: "f-13 mb-6" },
          V = y(() => g("span", null, "程序路径：", -1)),
          G = { class: "f-13 mb-6" },
          K = y(() => g("span", null, "程序版本：", -1)),
          P = { class: "f-13 mb-6" },
          X = y(() => g("span", null, "发布时间：", -1)),
          Y = { class: "f-13 mb-6" },
          Z = y(() => g("span", null, "技术开发：", -1)),
          ss = y(() =>
            g(
              "p",
              { class: "f-13 mb-6 row" },
              [g("span", null, "联系微信："), p("yanyutao2014")],
              -1
            )
          ),
          as = y(() =>
            g(
              "p",
              { class: "f-13 mb-6 row" },
              [g("span", null, "联系邮箱："), p("867528315@qq.com")],
              -1
            )
          ),
          ls = y(() =>
            g(
              "div",
              { class: "bg-main pd-20 radius-6 mb-20" },
              [
                g("div", { class: "mb-12 f-16 c-1d2129 bold" }, "技术服务"),
                g("p", { class: "f-13 mb-6 c-4e5969 row justify-around" }, [
                  g("span", { class: "c-1d2129 col-12 mb-10" }, "前端开发"),
                  g("span", { class: "c-1d2129 col-12 mb-10" }, "企业建站"),
                  g("span", { class: "c-1d2129 col-12 mb-10" }, "小程序开发"),
                  g("span", { class: "c-1d2129 col-12 mb-10" }, "技术顾问"),
                  g("span", { class: "c-1d2129 col-12" }, "互动玩法2d"),
                  g("span", { class: "c-1d2129 col-12" }, "技术交流"),
                ]),
              ],
              -1
            )
          );
        s(
          "default",
          n(b, [
            [
              "render",
              function (s, a, t, c, n, i) {
                const v = d("router-link"),
                  h = d("qiun-vue-ucharts"),
                  b = l,
                  y = e;
                return (
                  o(),
                  r(
                    y,
                    { gutter: 20 },
                    {
                      default: u(() => [
                        m(
                          b,
                          { xs: 24, sm: 18, md: 18, lg: 18, xl: 18 },
                          {
                            default: u(() => [
                              g("div", x, [
                                m(
                                  v,
                                  { class: "c-1d2129", to: "/article" },
                                  {
                                    default: u(() => [
                                      g("div", j, [
                                        w,
                                        _,
                                        g("p", S, [
                                          p(f(s.data.article) + " ", 1),
                                          C,
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                m(
                                  v,
                                  { class: "c-1d2129", to: "/tag" },
                                  {
                                    default: u(() => [
                                      g("div", F, [
                                        D,
                                        q,
                                        g("p", k, [
                                          p(f(s.data.tag) + " ", 1),
                                          E,
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                m(
                                  v,
                                  { class: "c-1d2129", to: "/message" },
                                  {
                                    default: u(() => [
                                      g("div", null, [
                                        M,
                                        z,
                                        g("p", A, [
                                          p(f(s.data.message) + " ", 1),
                                          O,
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                g("div", null, [
                                  L,
                                  N,
                                  g("p", W, [p(f(s.data.week) + " ", 1), B]),
                                ]),
                              ]),
                              g("div", J, [
                                m(
                                  y,
                                  { gutter: 20 },
                                  {
                                    default: u(() => [
                                      m(
                                        b,
                                        {
                                          xs: 24,
                                          sm: 12,
                                          md: 12,
                                          lg: 12,
                                          xl: 12,
                                        },
                                        {
                                          default: u(() => [
                                            g("div", T, [
                                              m(
                                                h,
                                                {
                                                  type: "ring",
                                                  opts: s.opts,
                                                  chartData: s.chartData,
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
                                      m(
                                        b,
                                        {
                                          xs: 24,
                                          sm: 12,
                                          md: 12,
                                          lg: 12,
                                          xl: 12,
                                        },
                                        { default: u(() => [$]), _: 1 }
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
                        m(
                          b,
                          { xs: 24, sm: 6, md: 6, lg: 6, xl: 6 },
                          {
                            default: u(() => [
                              g("div", H, [
                                I,
                                Q,
                                R,
                                g("p", U, [V, p(f(s.dirname), 1)]),
                                g("p", G, [K, p(f(s.data.version), 1)]),
                                g("p", P, [X, p(f(s.data.versionTime), 1)]),
                                g("p", Y, [Z, p(f(s.data.author), 1)]),
                                ss,
                                as,
                              ]),
                              ls,
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
          ])
        );
      },
    };
  }
);
