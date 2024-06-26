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
    var l, s, t, r, u, c, n, d, o, i, m, p, g, y, f, h, j, _;
    return {
      setters: [
        (e) => {
          (l = e.q), (s = e.r), (t = e.f), (r = e.G), (u = e.O), (c = e.p);
        },
        (e) => {
          (n = e.g), (d = e.c);
        },
        (e) => {
          o = e._;
        },
        (e) => {
          (i = e.o),
            (m = e.c),
            (p = e.g),
            (g = e._),
            (y = e.a),
            (f = e.a0),
            (h = e.t),
            (j = e.p),
            (_ = e.b);
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
          "[data-v-702e1585] .show .el-form-item__content{flex-direction:column;align-items:start}\n"),
          document.head.appendChild(a);
        const b = {
            name: "gather-add",
            data: () => ({
              activeName: "list",
              params: {
                taskName: "",
                targetUrl: "",
                parseData: "",
                status: "1",
                cid: 1,
              },
              listPages: [],
              article: { title: "", content: "" },
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
              async getArticle() {
                try {
                  let { targetUrl: e, parseData: a } = this.params,
                    l = await n({ targetUrl: e, parseData: a });
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
              async create() {
                try {
                  let e = await d(this.params);
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
                  this.create();
                });
              },
            },
          },
          v = { class: "mb-20 bg-main pd-20" },
          V = { class: "row w-p100" },
          w = { class: "row w-p100" },
          x = ((e) => (j("data-v-702e1585"), (e = e()), _(), e))(() =>
            y("p", null, "内容：", -1)
          ),
          U = ["innerHTML"];
        e(
          "default",
          o(b, [
            [
              "render",
              function (e, a, n, d, o, j) {
                const _ = l,
                  b = s,
                  k = t,
                  q = r,
                  C = u,
                  D = c;
                return (
                  i(),
                  m("div", v, [
                    p(
                      D,
                      { ref: "params", model: e.params, "label-width": "84px" },
                      {
                        default: g(() => [
                          p(
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
                              default: g(() => [
                                p(
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
                          p(
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
                              default: g(() => [
                                y("div", V, [
                                  p(
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
                          p(
                            b,
                            {
                              label: "处理函数",
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
                              default: g(() => [
                                y("div", w, [
                                  p(
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
                                  p(
                                    k,
                                    {
                                      class: "ml-5",
                                      type: "primary",
                                      onClick: j.getArticle,
                                    },
                                    { default: g(() => [f(" 测试 ")]), _: 1 },
                                    8,
                                    ["onClick"]
                                  ),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          p(
                            b,
                            { class: "show", label: "测试结果" },
                            {
                              default: g(() => [
                                y("p", null, "标题：" + h(e.article.title), 1),
                                x,
                                y(
                                  "div",
                                  { innerHTML: e.article.content },
                                  null,
                                  8,
                                  U
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          p(
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
                              default: g(() => [
                                p(
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
                          p(
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
                              default: g(() => [
                                p(
                                  C,
                                  {
                                    modelValue: e.params.status,
                                    "onUpdate:modelValue":
                                      a[4] ||
                                      (a[4] = (a) => (e.params.status = a)),
                                    class: "ml-4",
                                  },
                                  {
                                    default: g(() => [
                                      p(
                                        q,
                                        { value: "1", size: "large" },
                                        { default: g(() => [f("草稿")]), _: 1 }
                                      ),
                                      p(
                                        q,
                                        { value: "2", size: "large" },
                                        { default: g(() => [f("发布")]), _: 1 }
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
                          p(b, null, {
                            default: g(() => [
                              p(
                                k,
                                {
                                  type: "primary",
                                  onClick:
                                    a[5] || (a[5] = (e) => j.submit("params")),
                                },
                                { default: g(() => [f("保存")]), _: 1 }
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
            ["__scopeId", "data-v-702e1585"],
          ])
        );
      },
    };
  }
);
