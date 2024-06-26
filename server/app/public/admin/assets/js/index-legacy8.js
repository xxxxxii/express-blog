System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./friendlink-legacy.js",
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
    var t, a, n, i, s, c, o, u, r, d, g, h, p, y, f, j, m, C, b;
    return {
      setters: [
        (e) => {
          (t = e.f), (a = e.t), (n = e.I), (i = e.J), (s = e.L);
        },
        (e) => {
          (c = e.G), (o = e.E), (u = e.v), (r = e.H);
        },
        (e) => {
          (d = e.l), (g = e.a);
        },
        (e) => {
          h = e._;
        },
        (e) => {
          (p = e.r),
            (y = e.o),
            (f = e.c),
            (j = e.g),
            (m = e._),
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
          h(
            {
              name: "friendlink-index",
              setup: () => ({ Edit: c, Delete: o, View: u, Search: r }),
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
                    let e = await d(this.cur);
                    200 === e.code &&
                      ((this.tableData = [...e.data.list]),
                      (this.count = e.data.count));
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
                    name: "friendlink-edit",
                    params: { id: l },
                  });
                },
                async handleDel(e) {
                  let l = e.id;
                  try {
                    let e = await g(l);
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
                function (e, c, o, u, r, d) {
                  const g = t,
                    h = p("router-link"),
                    k = a,
                    w = n,
                    S = i,
                    _ = s;
                  return (
                    y(),
                    f("div", l, [
                      j(
                        k,
                        { type: "flex", class: "mt-10 mb-10", justify: "end" },
                        {
                          default: m(() => [
                            j(
                              h,
                              { to: "/friendlink/add" },
                              {
                                default: m(() => [
                                  j(
                                    g,
                                    { type: "primary", round: "" },
                                    { default: m(() => [C("新增")]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      j(
                        S,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: d.handleSelectionChange,
                        },
                        {
                          default: m(() => [
                            j(w, { type: "selection" }),
                            j(w, { prop: "id", width: "60", label: "编号" }),
                            j(w, {
                              prop: "title",
                              width: "120",
                              label: "标题",
                            }),
                            j(w, { prop: "link", width: "260", label: "链接" }),
                            j(w, { prop: "sort", label: "排序" }),
                            j(
                              w,
                              { prop: "createdAt", label: "发布时间" },
                              {
                                default: m((e) => [C(b(e.row.createdAt), 1)]),
                                _: 1,
                              }
                            ),
                            j(
                              w,
                              { fixed: "right", width: "100", label: "操作" },
                              {
                                default: m((e) => [
                                  j(
                                    g,
                                    {
                                      icon: u.Edit,
                                      circle: "",
                                      onClick: (l) => d.toEdit(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "onClick"]
                                  ),
                                  j(
                                    g,
                                    {
                                      icon: u.Delete,
                                      circle: "",
                                      onClick: (l) => d.handleDel(e.row),
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
                      j(
                        k,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: m(() => [
                            j(
                              _,
                              {
                                background: "",
                                layout: "prev, pager, next",
                                onCurrentChange: d.handleCurrentChange,
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
