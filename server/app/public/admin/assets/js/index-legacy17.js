System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./slide-legacy.js",
    "./@qiun-legacy.js",
    "./@vue-legacy.js",
    "./lodash-es-legacy.js",
    "./async-validator-legacy.js",
    "./@vueuse-legacy.js",
    "./dayjs-legacy.js",
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
  function (e, l) {
    "use strict";
    var t, a, s, n, i, c, o, r, u, d, g, p, h, y, m, f, j, C, w, _, b, k;
    return {
      setters: [
        (e) => {
          (t = e.f),
            (a = e.t),
            (s = e.I),
            (n = e.F),
            (i = e.C),
            (c = e.J),
            (o = e.L);
        },
        (e) => {
          (r = e.G), (u = e.E), (d = e.v), (g = e.H);
        },
        (e) => {
          (p = e.l), (h = e.a);
        },
        (e) => {
          y = e._;
        },
        (e) => {
          (m = e.r),
            (f = e.o),
            (j = e.c),
            (C = e.g),
            (w = e._),
            (_ = e.a0),
            (b = e.e),
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
      ],
      execute: function () {
        const l = { class: "pd-20 bg-main content-wrap" };
        e(
          "default",
          y(
            {
              name: "slide-index",
              setup: () => ({ Edit: r, Delete: u, View: d, Search: g }),
              data: () => ({
                keywords: "",
                tableData: [],
                multipleSelection: [],
                count: 0,
                cur: 1,
              }),
              computed: {},
              created() {
                this.list();
              },
              methods: {
                async list() {
                  try {
                    let e = await p(this.cur);
                    200 === e.code
                      ? ((this.tableData = [...e.data.list]),
                        (this.count = e.data.count))
                      : this.$message({ message: e.msg, type: "success" });
                  } catch (e) {
                    console.log(e);
                  }
                },
                handleCurrentChange(e) {
                  (this.cur = e), this.list();
                },
                toggleSelection(e) {
                  e
                    ? e.forEach((e) => {
                        this.$refs.multipleTable.toggleRowSelection(e);
                      })
                    : this.$refs.multipleTable.clearSelection();
                },
                handleSelectionChange(e) {
                  this.multipleSelection = e;
                },
                toEdit(e) {
                  let l = e.id;
                  this.$router.push({ name: "slide-edit", params: { id: l } });
                },
                async handleDel(e) {
                  let l = e.id;
                  try {
                    let e = await h(l);
                    200 === e.code
                      ? (this.$message({
                          message: "删除成功 ^_^",
                          type: "success",
                        }),
                        this.list())
                      : this.$message({ message: e.msg, type: "success" });
                  } catch (t) {
                    console.log(t);
                  }
                },
              },
            },
            [
              [
                "render",
                function (e, r, u, d, g, p) {
                  const h = t,
                    y = m("router-link"),
                    v = a,
                    S = s,
                    x = n,
                    D = i,
                    E = c,
                    $ = o;
                  return (
                    f(),
                    j("div", l, [
                      C(
                        v,
                        { type: "flex", class: "mt-10 mb-10", justify: "end" },
                        {
                          default: w(() => [
                            C(
                              y,
                              { to: "/slide/add" },
                              {
                                default: w(() => [
                                  C(
                                    h,
                                    { type: "primary", round: "" },
                                    { default: w(() => [_("新增")]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      C(
                        E,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: p.handleSelectionChange,
                        },
                        {
                          default: w(() => [
                            C(S, { type: "selection" }),
                            C(S, { prop: "id", label: "编号" }),
                            C(S, { prop: "title", label: "标题" }),
                            C(
                              S,
                              { prop: "img_url", label: "图片链接" },
                              {
                                default: w((e) => [
                                  e.row.img_url
                                    ? (f(),
                                      b(
                                        D,
                                        {
                                          key: 0,
                                          placement: "right",
                                          width: 600,
                                          trigger: "hover",
                                        },
                                        {
                                          reference: w(() => [
                                            C(
                                              x,
                                              {
                                                class:
                                                  "avatar-uploader-icon pointer ml-10",
                                                src: e.row.img_url,
                                              },
                                              null,
                                              8,
                                              ["src"]
                                            ),
                                          ]),
                                          default: w(() => [
                                            C(
                                              x,
                                              {
                                                style: { width: "100%" },
                                                src: e.row.img_url,
                                              },
                                              null,
                                              8,
                                              ["src"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : k("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                            C(S, { prop: "link_url", label: "跳转链接" }),
                            C(
                              S,
                              { fixed: "right", width: "100", label: "操作" },
                              {
                                default: w((e) => [
                                  C(
                                    h,
                                    {
                                      icon: d.Edit,
                                      circle: "",
                                      onClick: (l) => p.toEdit(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "onClick"]
                                  ),
                                  C(
                                    h,
                                    {
                                      icon: d.Delete,
                                      circle: "",
                                      onClick: (l) => p.handleDel(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "onClick"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["data", "onSelectionChange"]
                      ),
                      C(
                        v,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: w(() => [
                            C(
                              $,
                              {
                                background: "",
                                layout: "prev, pager, next",
                                onCurrentChange: p.handleCurrentChange,
                                "page-size": 10,
                                total: e.count,
                                "hide-on-single-page": "",
                              },
                              null,
                              8,
                              ["onCurrentChange", "total"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ])
                  );
                },
              ],
            ]
          )
        );
      },
    };
  }
);
