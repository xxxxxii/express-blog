System.register(
  [
    "./element-plus-legacy.js",
    "./@element-plus-legacy.js",
    "./frag-legacy.js",
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
    var a,
      t,
      s,
      n,
      r,
      c,
      o,
      i,
      u,
      d,
      p,
      g,
      h,
      m,
      f,
      y,
      j,
      C,
      b,
      w,
      _,
      k,
      v,
      S,
      x,
      E;
    return {
      setters: [
        (e) => {
          (a = e.q),
            (t = e.r),
            (s = e.f),
            (n = e.p),
            (r = e.I),
            (c = e.K),
            (o = e.J),
            (i = e.L),
            (u = e.t);
        },
        (e) => {
          (d = e.G), (p = e.E), (g = e.v), (h = e.H);
        },
        (e) => {
          (m = e.s), (f = e.a);
        },
        (e) => {
          y = e._;
        },
        (e) => {
          (j = e.r),
            (C = e.ar),
            (b = e.o),
            (w = e.c),
            (_ = e.a),
            (k = e.g),
            (v = e._),
            (S = e.a0),
            (x = e.t),
            (E = e.w);
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
        var l = document.createElement("style");
        (l.textContent = "[data-v-73448d10] .el-form-item{margin-bottom:0}\n"),
          document.head.appendChild(l);
        const D = { class: "pd-20 bg-main" },
          $ = {
            class:
              "search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20",
          },
          V = { class: "inline-b ml-5" };
        e(
          "default",
          y(
            {
              name: "frag-index",
              setup: () => ({ Edit: d, Delete: p, View: g, Search: h }),
              data: () => ({
                params: { keywords: "" },
                tableData: [],
                multipleSelection: [],
                count: 0,
                cur: 1,
              }),
              computed: {},
              created() {
                this.search();
              },
              methods: {
                clearSearch(e) {
                  e && this.$refs.form.resetFields(), this.search();
                },
                async search() {
                  try {
                    let e = await m(this.cur, this.params.keywords);
                    200 === e.code &&
                      ((this.tableData = [...e.data.list]),
                      (this.count = e.data.count));
                  } catch (e) {
                    console.log(e);
                  }
                },
                handleCurrentChange(e) {
                  (this.cur = e), this.search();
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
                  this.$router.push({ name: "frag-edit", params: { id: l } });
                },
                async handleDel(e) {
                  let l = e.id;
                  try {
                    let e = await f(l);
                    200 === e.code
                      ? (this.$message({
                          message: "文章删除成功 ^_^",
                          type: "success",
                        }),
                        this.search())
                      : this.$message({ message: e.msg, type: "success" });
                  } catch (a) {
                    console.log(a);
                  }
                },
              },
            },
            [
              [
                "render",
                function (e, l, d, p, g, h) {
                  const m = a,
                    f = t,
                    y = s,
                    z = n,
                    A = j("router-link"),
                    T = r,
                    q = c,
                    F = o,
                    I = i,
                    G = u,
                    H = C("permission");
                  return (
                    b(),
                    w("div", D, [
                      _("div", $, [
                        k(
                          z,
                          { inline: !0, model: e.params, ref: "form" },
                          {
                            default: v(() => [
                              k(
                                f,
                                {
                                  class: "mt-10",
                                  label: "标题",
                                  prop: "keywords",
                                },
                                {
                                  default: v(() => [
                                    k(
                                      m,
                                      {
                                        class: "mr-10 w-auto",
                                        placeholder: "请输入内容",
                                        "suffix-icon": p.Search,
                                        clearable: "",
                                        onClear: h.search,
                                        modelValue: e.params.keywords,
                                        "onUpdate:modelValue":
                                          l[0] ||
                                          (l[0] = (l) =>
                                            (e.params.keywords = l)),
                                      },
                                      null,
                                      8,
                                      ["suffix-icon", "onClear", "modelValue"]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              k(
                                f,
                                { class: "mt-10" },
                                {
                                  default: v(() => [
                                    k(
                                      y,
                                      {
                                        type: "primary",
                                        onClick: h.search,
                                        round: "",
                                      },
                                      { default: v(() => [S("搜索")]), _: 1 },
                                      8,
                                      ["onClick"]
                                    ),
                                    k(
                                      y,
                                      {
                                        onClick:
                                          l[1] ||
                                          (l[1] = (e) => h.clearSearch("form")),
                                        round: "",
                                      },
                                      { default: v(() => [S("清空")]), _: 1 }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["model"]
                        ),
                        k(
                          A,
                          { class: "mt-10", to: "/frag/add" },
                          {
                            default: v(() => [
                              k(
                                y,
                                { type: "primary", round: "" },
                                { default: v(() => [S("新增")]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      k(
                        F,
                        {
                          ref: "multipleTable",
                          data: e.tableData,
                          "tooltip-effect": "dark",
                          "row-key": "id",
                          onSelectionChange: h.handleSelectionChange,
                        },
                        {
                          default: v(() => [
                            k(T, { type: "selection" }),
                            k(T, { prop: "id", width: "60", label: "编号" }),
                            k(T, { prop: "name", label: "名称" }),
                            k(T, { prop: "mark", label: "标识" }),
                            k(
                              T,
                              { prop: "createdAt", label: "发布时间" },
                              {
                                default: v((e) => [S(x(e.row.createdAt), 1)]),
                                _: 1,
                              }
                            ),
                            k(
                              T,
                              { fixed: "right", width: "120", label: "操作" },
                              {
                                default: v((e) => [
                                  k(
                                    y,
                                    {
                                      icon: p.Edit,
                                      circle: "",
                                      onClick: (l) => h.toEdit(e.row),
                                    },
                                    null,
                                    8,
                                    ["icon", "onClick"]
                                  ),
                                  E(
                                    (b(),
                                    w("div", V, [
                                      k(
                                        q,
                                        {
                                          width: "220",
                                          onConfirm: (l) => h.handleDel(e.row),
                                          "confirm-button-text": "确定",
                                          "cancel-button-text": "取消",
                                          "icon-color": "#626AEF",
                                          title:
                                            "确定删除吗？如果在使用，删掉会模板会报错",
                                        },
                                        {
                                          reference: v(() => [
                                            k(
                                              y,
                                              { icon: p.Delete, circle: "" },
                                              null,
                                              8,
                                              ["icon"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["onConfirm"]
                                      ),
                                    ])),
                                    [[H, "super"]]
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
                      k(
                        G,
                        {
                          type: "flex",
                          class: "mt-20 align-c",
                          justify: "center",
                        },
                        {
                          default: v(() => [
                            k(
                              I,
                              {
                                background: "",
                                layout: "prev, pager, next",
                                onCurrentChange: h.handleCurrentChange,
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
              ["__scopeId", "data-v-73448d10"],
            ]
          )
        );
      },
    };
  }
);
