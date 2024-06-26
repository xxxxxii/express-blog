System.register(
  [
    "./element-plus-legacy.js",
    "./frag-legacy.js",
    "./main-legacy.js",
    "./tinymce-legacy.js",
    "./pinyin-pro-legacy.js",
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
    var l, t, s, n, u, m, r, o, c, p, d, i, g, y, j, f, h, _, V, b, v, x, k;
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
          o = e.c;
        },
        (e) => {
          c = e._;
        },
        (e) => {
          p = e.t;
        },
        (e) => {
          d = e.p;
        },
        (e) => {
          i = e.u;
        },
        (e) => {
          g = e._;
        },
        (e) => {
          (y = e.r),
            (j = e.o),
            (f = e.c),
            (h = e.w),
            (_ = e.e),
            (V = e._),
            (b = e.a),
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
        (a.textContent = "[data-v-6178e948] .tiny-textarea{height:436px}\n"),
          document.head.appendChild(a);
        const w = { class: "mr-10 ml-10 mb-20 pd-10 bg-main" };
        e(
          "default",
          g(
            {
              name: "frag-add",
              components: { Vue3Tinymce: c },
              data: () => ({
                setting: p,
                loading: !0,
                params: {
                  type: "1",
                  name: "",
                  mark: "",
                  content: "欢迎使用ChanCMS系统",
                },
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
                this.setting.images_upload_url = await i();
              },
              created() {},
              unmounted() {},
              watch: {
                "params.name": function (e, a) {
                  this.params.mark = d(e, { toneType: "none" }).replace(
                    /\s+/g,
                    ""
                  );
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
                    let e = await o(this.params);
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
                    if (!e) return console.log("error submit!!"), !1;
                    this.create();
                  });
                },
              },
            },
            [
              [
                "render",
                function (e, a, o, c, p, d) {
                  const i = l,
                    g = t,
                    C = s,
                    U = n,
                    $ = y("vue3-tinymce"),
                    q = u,
                    I = m,
                    S = r;
                  return (
                    j(),
                    f("div", w, [
                      h(
                        (j(),
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
                            default: V(() => [
                              b("div", null, [
                                v(
                                  g,
                                  { label: "碎片名称", prop: "name" },
                                  {
                                    default: V(() => [
                                      v(
                                        i,
                                        {
                                          modelValue: e.params.name,
                                          "onUpdate:modelValue":
                                            a[0] ||
                                            (a[0] = (a) => (e.params.name = a)),
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
                                v(
                                  g,
                                  { label: "碎片标识", prop: "mark" },
                                  {
                                    default: V(() => [
                                      v(
                                        i,
                                        {
                                          modelValue: e.params.mark,
                                          "onUpdate:modelValue":
                                            a[1] ||
                                            (a[1] = (a) => (e.params.mark = a)),
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
                                v(
                                  g,
                                  { label: "碎片类型", prop: "type" },
                                  {
                                    default: V(() => [
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
                                          default: V(() => [
                                            v(
                                              C,
                                              { value: "1" },
                                              {
                                                default: V(() => [x("富文本")]),
                                                _: 1,
                                              }
                                            ),
                                            v(
                                              C,
                                              { value: "2" },
                                              {
                                                default: V(() => [x("文本框")]),
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
                                  ? (j(),
                                    _(
                                      g,
                                      { key: 0, label: "碎片内容" },
                                      {
                                        default: V(() => [
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
                                  ? (j(),
                                    _(
                                      g,
                                      { key: 1, label: "碎片内容" },
                                      {
                                        default: V(() => [
                                          v(
                                            i,
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
                                default: V(() => [
                                  v(
                                    q,
                                    {
                                      type: "primary",
                                      onClick:
                                        a[5] ||
                                        (a[5] = (e) => d.submit("params")),
                                    },
                                    { default: V(() => [x("保存")]), _: 1 }
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
              ["__scopeId", "data-v-6178e948"],
            ]
          )
        );
      },
    };
  }
);
