System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./sys_role-legacy.js",
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
    var t, a, s, n, i, c, o, u, r, d, g, p, y, h, f, m, j, b, w, C, _, k, S;
    return {
      setters: [
        (e) => {
          (t = e.f),
            (a = e.t),
            (s = e.I),
            (n = e.a),
            (i = e.g),
            (c = e.J),
            (o = e.L);
        },
        (e) => {
          (u = e.G), (r = e.E), (d = e.v), (g = e.H);
        },
        (e) => {
          (p = e.l), (y = e.a);
        },
        (e) => {
          h = e._;
        },
        (e) => {
          (f = e.r),
            (m = e.o),
            (j = e.c),
            (b = e.g),
            (w = e._),
            (C = e.a0),
            (_ = e.t),
            (k = e.e),
            (S = e.f);
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
        const l = { class: "pd-20 content-wrap bg-main" };
        e(
          "default",
          h(
            {
              name: "role-index",
              setup: () => ({ Edit: u, Delete: r, View: d, Search: g }),
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
                  this.$router.push({ name: "role-edit", params: { id: l } });
                },
                async handleDel(e) {
                  let l = e.id;
                  try {
                    let e = await y(l);
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
                function (e, u, r, d, g, p) {
                  const y = t,
                    h = f("router-link"),
                    v = a,
                    x = s,
                    D = f("QuestionFilled"),
                    E = n,
                    $ = i,
                    z = c,
                    T = o;
                  return (
                    m(),
                    j("div", l, [
                      b(
                        v,
                        { type: "flex", class: "mt-10 mb-10", justify: "end" },
                        {
                          default: w(() => [
                            b(
                              h,
                              { to: "/role/add" },
                              {
                                default: w(() => [
                                  b(
                                    y,
                                    { type: "primary", round: "" },
                                    { default: w(() => [C("新增")]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      b(
                        z,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: p.handleSelectionChange,
                        },
                        {
                          default: w(() => [
                            b(x, { type: "selection" }),
                            b(x, { prop: "id", width: "100", label: "编号" }),
                            b(x, { prop: "name", width: "300", label: "名称" }),
                            b(x, { prop: "value", label: "角色" }),
                            b(
                              x,
                              { prop: "status", label: "状态" },
                              {
                                default: w((e) => [
                                  C(
                                    _("1" == e.row.status ? "正常" : "停用"),
                                    1
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            b(
                              x,
                              { fixed: "right", width: "150", label: "操作" },
                              {
                                default: w((e) => [
                                  b(
                                    y,
                                    {
                                      icon: d.Edit,
                                      disabled: e.row.id < 4,
                                      circle: "",
                                      onClick: (l) => p.toEdit(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "disabled", "onClick"]
                                  ),
                                  b(
                                    y,
                                    {
                                      icon: d.Delete,
                                      disabled: e.row.id < 4,
                                      circle: "",
                                      onClick: (l) => p.handleDel(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "disabled", "onClick"]
                                  ),
                                  e.row.id < 4
                                    ? (m(),
                                      k(
                                        $,
                                        {
                                          key: 0,
                                          content: "系统默认角色，禁止删除",
                                          effect: "light",
                                          placement: "top-start",
                                        },
                                        {
                                          default: w(() => [
                                            b(
                                              E,
                                              { class: "ml-10 t-4 pointer" },
                                              {
                                                default: w(() => [
                                                  b(D, { class: "c-165dff" }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ))
                                    : S("", !0),
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
                      b(
                        v,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: w(() => [
                            b(
                              T,
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
