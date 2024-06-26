System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./message-legacy.js",
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
    var t, a, s, n, c, i, o, u, r, g, d, p, y, h, m, f, j, C, b;
    return {
      setters: [
        (e) => {
          (t = e.f), (a = e.t), (s = e.I), (n = e.J), (c = e.L);
        },
        (e) => {
          (i = e.G), (o = e.E), (u = e.v), (r = e.H);
        },
        (e) => {
          (g = e.l), (d = e.a);
        },
        (e) => {
          p = e._;
        },
        (e) => {
          (y = e.r),
            (h = e.o),
            (m = e.c),
            (f = e.g),
            (j = e._),
            (C = e.a0),
            (b = e.t);
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
        const l = { class: "pd-20 bg-main" };
        e(
          "default",
          p(
            {
              name: "message-index",
              setup: () => ({ Edit: i, Delete: o, View: u, Search: r }),
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
                    let e = await g(this.cur);
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
                  this.$router.push({
                    name: "message-edit",
                    params: { id: l },
                  });
                },
                async handleDel(e) {
                  let l = e.id;
                  try {
                    let e = await d(l);
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
                function (e, i, o, u, r, g) {
                  const d = t,
                    p = y("router-link"),
                    w = a,
                    S = s,
                    k = n,
                    _ = c;
                  return (
                    h(),
                    m("div", l, [
                      f(
                        w,
                        { type: "flex", class: "mt-10 mb-10", justify: "end" },
                        {
                          default: j(() => [
                            f(
                              p,
                              { to: "/message/add" },
                              {
                                default: j(() => [
                                  f(
                                    d,
                                    { type: "primary", round: "" },
                                    { default: j(() => [C("新增")]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      f(
                        k,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: g.handleSelectionChange,
                        },
                        {
                          default: j(() => [
                            f(S, { type: "selection" }),
                            f(S, { prop: "id", width: "80", label: "编号" }),
                            f(S, {
                              prop: "name",
                              width: "300",
                              label: "联系人",
                            }),
                            f(S, { prop: "tel", label: "手机号" }),
                            f(S, { prop: "company", label: "公司名称" }),
                            f(
                              S,
                              { prop: "createdAt", label: "发布时间" },
                              {
                                default: j((e) => [C(b(e.row.createdAt), 1)]),
                                _: 1,
                              }
                            ),
                            f(
                              S,
                              { fixed: "right", width: "100", label: "操作" },
                              {
                                default: j((e) => [
                                  f(
                                    d,
                                    {
                                      icon: u.View,
                                      circle: "",
                                      onClick: (l) => g.toEdit(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "onClick"]
                                  ),
                                  f(
                                    d,
                                    {
                                      icon: u.Delete,
                                      circle: "",
                                      onClick: (l) => g.handleDel(e.row),
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
                      f(
                        w,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: j(() => [
                            f(
                              _,
                              {
                                background: "",
                                layout: "prev, pager, next",
                                onCurrentChange: g.handleCurrentChange,
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
