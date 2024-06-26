System.register(
  [
    "./element-plus-legacy.js",
    "./gather-legacy.js",
    "./@qiun-legacy.js",
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
    "./js-cookie-legacy.js",
    "./saduocss-legacy.js",
  ],
  function (e, a) {
    "use strict";
    var l, t, s, r, u, c, d, i, n, o, m, p, g, y, h, f, j, _, b;
    return {
      setters: [
        (e) => {
          (l = e.q), (t = e.r), (s = e.f), (r = e.G), (u = e.O), (c = e.p);
        },
        (e) => {
          (d = e.d), (i = e.g), (n = e.u);
        },
        (e) => {
          o = e._;
        },
        (e) => {
          (m = e.o),
            (p = e.c),
            (g = e.g),
            (y = e._),
            (h = e.a),
            (f = e.a0),
            (j = e.t),
            (_ = e.p),
            (b = e.b);
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
        null,
      ],
      execute: function () {
        var a = document.createElement("style");
        (a.textContent =
          "[data-v-9736213c] .show .el-form-item__content{flex-direction:column;align-items:start}\n"),
          document.head.appendChild(a);
        const v = {
            name: "gather-edit",
            data: () => ({
              activeName: "list",
              params: {
                taskName: "",
                targetUrl: "",
                parseData: "",
                status: "1",
                cid: 1,
              },
              article: { title: "", content: "" },
            }),
            computed: {},
            mounted() {},
            async created() {
              (this.params.id = this.$route.params.id), await this.detail();
            },
            methods: {
              async detail() {
                try {
                  let e = await d(this.params.id);
                  if (200 === e.code) {
                    let a = e.data;
                    this.params = a;
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
              async getArticle() {
                try {
                  let { targetUrl: e, parseData: a } = this.params,
                    l = await i({ targetUrl: e, parseData: a });
                  200 == l.code &&
                    ((this.article = l.data),
                    this.$message({
                      message: "恭喜你，获取数据成功^_^",
                      type: "success",
                    }));
                } catch (e) {
                  console.log(e);
                }
              },
              async update() {
                try {
                  let e = await n(this.params);
                  200 == e.code
                    ? (this.$message({
                        message: "新增成功^_^",
                        type: "success",
                      }),
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
          V = { class: "mb-20 bg-main pd-20" },
          w = { class: "row w-p100" },
          x = { class: "row w-p100" },
          U = ((e) => (_("data-v-9736213c"), (e = e()), b(), e))(() =>
            h("p", null, "内容：", -1)
          ),
          k = ["innerHTML"];
        e(
          "default",
          o(v, [
            [
              "render",
              function (e, a, d, i, n, o) {
                const _ = l,
                  b = t,
                  v = s,
                  q = r,
                  C = u,
                  D = c;
                return (
                  m(),
                  p("div", V, [
                    g(
                      D,
                      { ref: "params", model: e.params, "label-width": "84px" },
                      {
                        default: y(() => [
                          g(
                            b,
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
                              default: y(() => [
                                g(
                                  _,
                                  {
                                    modelValue: e.params.taskName,
                                    "onUpdate:modelValue":
                                      a[0] ||
                                      (a[0] = (a) => (e.params.taskName = a)),
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
                          g(
                            b,
                            {
                              label: "接口地址",
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
                              default: y(() => [
                                h("div", w, [
                                  g(
                                    _,
                                    {
                                      class: "flex-1",
                                      modelValue: e.params.targetUrl,
                                      "onUpdate:modelValue":
                                        a[1] ||
                                        (a[1] = (a) =>
                                          (e.params.targetUrl = a)),
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
                          g(
                            b,
                            {
                              label: "内容字段",
                              prop: "parseData",
                              rules: [
                                {
                                  required: !0,
                                  message: "请输入内容字段",
                                  trigger: "blur",
                                },
                              ],
                            },
                            {
                              default: y(() => [
                                h("div", x, [
                                  g(
                                    _,
                                    {
                                      class: "flex-1",
                                      type: "textarea",
                                      rows: 13,
                                      modelValue: e.params.parseData,
                                      "onUpdate:modelValue":
                                        a[2] ||
                                        (a[2] = (a) =>
                                          (e.params.parseData = a)),
                                      placeholder: "例：.content h4 a",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  g(
                                    v,
                                    {
                                      class: "ml-5",
                                      type: "primary",
                                      onClick: o.getArticle,
                                    },
                                    { default: y(() => [f(" 测试 ")]), _: 1 },
                                    8,
                                    ["onClick"]
                                  ),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          g(
                            b,
                            { class: "show", label: "测试结果" },
                            {
                              default: y(() => [
                                h("p", null, "标题：" + j(e.article.title), 1),
                                U,
                                h(
                                  "div",
                                  { innerHTML: e.article.content },
                                  null,
                                  8,
                                  k
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          g(
                            b,
                            {
                              label: "保存栏目",
                              prop: "cid",
                              rules: [
                                {
                                  required: !0,
                                  message: "请输入保存栏目",
                                  trigger: "blur",
                                },
                              ],
                            },
                            {
                              default: y(() => [
                                g(
                                  _,
                                  {
                                    modelValue: e.params.cid,
                                    "onUpdate:modelValue":
                                      a[3] ||
                                      (a[3] = (a) => (e.params.cid = a)),
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
                          g(
                            b,
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
                              default: y(() => [
                                g(
                                  C,
                                  {
                                    modelValue: e.params.status,
                                    "onUpdate:modelValue":
                                      a[4] ||
                                      (a[4] = (a) => (e.params.status = a)),
                                    class: "ml-4",
                                  },
                                  {
                                    default: y(() => [
                                      g(
                                        q,
                                        { value: "1", size: "large" },
                                        { default: y(() => [f("草稿")]), _: 1 }
                                      ),
                                      g(
                                        q,
                                        { value: "2", size: "large" },
                                        { default: y(() => [f("发布")]), _: 1 }
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
                          g(b, null, {
                            default: y(() => [
                              g(
                                v,
                                {
                                  type: "primary",
                                  onClick:
                                    a[5] || (a[5] = (e) => o.submit("params")),
                                },
                                { default: y(() => [f("保存")]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }),
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
            ["__scopeId", "data-v-9736213c"],
          ])
        );
      },
    };
  }
);
