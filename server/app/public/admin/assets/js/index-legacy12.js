System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./login_log-legacy.js",
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
    var t, a, n, s, c, o, i, u, r, g, d, h, p, y, j, f, m;
    return {
      setters: [
        (e) => {
          (t = e.I), (a = e.J), (n = e.L), (s = e.t);
        },
        (e) => {
          (c = e.G), (o = e.E), (i = e.v), (u = e.H);
        },
        (e) => {
          (r = e.l), (g = e.d);
        },
        (e) => {
          d = e._;
        },
        (e) => {
          (h = e.o), (p = e.c), (y = e.g), (j = e._), (f = e.a0), (m = e.t);
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
          d(
            {
              name: "loginlog-index",
              setup: () => ({ Edit: c, Delete: o, View: i, Search: u }),
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
                    let e = await r(this.cur);
                    200 === e.code &&
                      ((this.tableData = [...e.data.list]),
                      (this.count = e.data.count),
                      e.data.total > 100 && this.handleDel());
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
                async handleDel() {
                  try {
                    200 === (await g()).code && this.list();
                  } catch (e) {
                    console.log(e);
                  }
                },
              },
            },
            [
              [
                "render",
                function (e, c, o, i, u, r) {
                  const g = t,
                    d = a,
                    b = n,
                    C = s;
                  return (
                    h(),
                    p("div", l, [
                      y(
                        d,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: r.handleSelectionChange,
                        },
                        {
                          default: j(() => [
                            y(g, { type: "selection" }),
                            y(g, { prop: "id", width: "100", label: "编号" }),
                            y(g, { prop: "username", label: "登录用户" }),
                            y(g, { prop: "ip", label: "登录IP" }),
                            y(
                              g,
                              { prop: "createdAt", label: "登录日期" },
                              {
                                default: j((e) => [f(m(e.row.createdAt), 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["data", "onSelectionChange"]
                      ),
                      y(
                        C,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: j(() => [
                            y(
                              b,
                              {
                                background: "",
                                layout: "prev, pager, next",
                                onCurrentChange: r.handleCurrentChange,
                                "page-size": 20,
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
