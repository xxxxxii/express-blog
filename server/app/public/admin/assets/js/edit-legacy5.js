System.register(
  [
    "./element-plus-legacy.js",
    "./frag-legacy.js",
    "./main-legacy.js",
    "./tinymce-legacy.js",
    "./upload-legacy.js",
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
    "./sys_app-legacy.js",
  ],
  function (e, a) {
    "use strict";
    var l, t, s, n, u, m, r, i, o, c, d, p, g, y, h, j, f, _, b, V, v, x, k;
    return {
      setters: [
        (e) => {
          (l = e.q),
            (t = e.r),
            (s = e.G),
            (n = e.O),
            (u = e.f),
            (m = e.p),
            (r = e.H);
        },
        (e) => {
          (i = e.d), (o = e.u);
        },
        (e) => {
          c = e._;
        },
        (e) => {
          d = e.t;
        },
        (e) => {
          p = e.u;
        },
        (e) => {
          g = e._;
        },
        (e) => {
          (y = e.r),
            (h = e.o),
            (j = e.c),
            (f = e.w),
            (_ = e.e),
            (b = e._),
            (V = e.a),
            (v = e.g),
            (x = e.a0),
            (k = e.f);
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
        null,
      ],
      execute: function () {
        var a = document.createElement("style");
        (a.textContent = "[data-v-cf3478bc] .tiny-textarea{height:436px}\n"),
          document.head.appendChild(a);
        const w = { class: "mr-10 ml-10 mb-20 pd-10 bg-main" };
        e(
          "default",
          g(
            {
              name: "frag-edit",
              components: { Vue3Tinymce: c },
              data: () => ({
                setting: d,
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
                    {
                      required: !0,
                      message: "请输入栏目名称",
                      trigger: "blur",
                    },
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
                this.setting.images_upload_url = await p();
              },
              async created() {
                (this.params.id = this.$route.params.id), await this.detail();
              },
              unmounted() {},
              methods: {
                tinymce() {
                  this.loading = !1;
                },
                setContent(e) {
                  this.params.content = e;
                },
                async detail() {
                  try {
                    let e = await i(this.params.id);
                    200 === e.code &&
                      ((this.params = e.data),
                      "2" == this.params.type && (this.loading = !1));
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
                async update() {
                  try {
                    let e = await o(this.params);
                    200 == e.code
                      ? (this.$message({
                          message: "更新成功^_^",
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
                    if (!e) return console.log("error submit!!"), !1;
                    this.update();
                  });
                },
              },
            },
            [
              [
                "render",
                function (e, a, i, o, c, d) {
                  const p = l,
                    g = t,
                    C = s,
                    U = n,
                    $ = y("vue3-tinymce"),
                    q = u,
                    I = m,
                    S = r;
                  return (
                    h(),
                    j("div", w, [
                      f(
                        (h(),
                        _(
                          I,
                          {
                            ref: "params",
                            model: e.params,
                            rules: e.paramsRules,
                            "label-width": "84px",
                            class: "mt-20",
                          },
                          {
                            default: b(() => [
                              V("div", null, [
                                v(
                                  g,
                                  { label: "碎片名称", prop: "name" },
                                  {
                                    default: b(() => [
                                      v(
                                        p,
                                        {
                                          modelValue: e.params.name,
                                          "onUpdate:modelValue":
                                            a[0] ||
                                            (a[0] = (a) => (e.params.name = a)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                v(
                                  g,
                                  { label: "碎片标识", prop: "mark" },
                                  {
                                    default: b(() => [
                                      v(
                                        p,
                                        {
                                          modelValue: e.params.mark,
                                          "onUpdate:modelValue":
                                            a[1] ||
                                            (a[1] = (a) => (e.params.mark = a)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                v(
                                  g,
                                  { label: "碎片类型", prop: "type" },
                                  {
                                    default: b(() => [
                                      v(
                                        U,
                                        {
                                          modelValue: e.params.type,
                                          "onUpdate:modelValue":
                                            a[2] ||
                                            (a[2] = (a) => (e.params.type = a)),
                                          class: "ml-4",
                                        },
                                        {
                                          default: b(() => [
                                            v(
                                              C,
                                              { value: "1" },
                                              {
                                                default: b(() => [x("富文本")]),
                                                _: 1,
                                              }
                                            ),
                                            v(
                                              C,
                                              { value: "2" },
                                              {
                                                default: b(() => [x("文本框")]),
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
                                "1" == e.params.type
                                  ? (h(),
                                    _(
                                      g,
                                      { key: 0, label: "碎片内容" },
                                      {
                                        default: b(() => [
                                          v(
                                            $,
                                            {
                                              modelValue: e.params.content,
                                              "onUpdate:modelValue":
                                                a[3] ||
                                                (a[3] = (a) =>
                                                  (e.params.content = a)),
                                              setting: e.setting,
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
                                  : k("", !0),
                                "2" == e.params.type
                                  ? (h(),
                                    _(
                                      g,
                                      { key: 1, label: "碎片内容" },
                                      {
                                        default: b(() => [
                                          v(
                                            p,
                                            {
                                              type: "textarea",
                                              prop: "textarea",
                                              class: "textarea",
                                              rows: 3,
                                              modelValue: e.params.content,
                                              "onUpdate:modelValue":
                                                a[4] ||
                                                (a[4] = (a) =>
                                                  (e.params.content = a)),
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : k("", !0),
                              ]),
                              v(g, null, {
                                default: b(() => [
                                  v(
                                    q,
                                    {
                                      type: "primary",
                                      onClick:
                                        a[5] ||
                                        (a[5] = (e) => d.submit("params")),
                                    },
                                    { default: b(() => [x("保存")]), _: 1 }
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
                        [[S, e.loading]]
                      ),
                    ])
                  );
                },
              ],
              ["__scopeId", "data-v-cf3478bc"],
            ]
          )
        );
      },
    };
  }
);
