import {
  q as e,
  r as a,
  f as t,
  p as s,
  I as o,
  K as r,
  J as l,
  L as i,
  t as n,
} from "./element-plus.js";
import { G as c, E as d, v as p, H as m } from "./@element-plus.js";
import { s as u, a as h } from "./frag.js";
import { _ as f } from "./@qiun.js";
import {
  r as g,
  ar as j,
  o as y,
  c as b,
  a as w,
  g as C,
  _,
  a0 as k,
  t as S,
  w as v,
} from "./@vue.js";
import "./lodash-es.js";
import "./async-validator.js";
import "./@vueuse.js";
import "./dayjs.js";
import "./@ctrl.js";
import "./@popperjs.js";
import "./memoize-one.js";
import "./normalize-wheel-es.js";
import "./index.js";
import "./pinia.js";
import "./vue-demi.js";
import "./pinia-plugin-persist.js";
import "./vue-router.js";
import "./axios.js";
import "./js-cookie.js";
/* empty css        */ const x = { class: "pd-20 bg-main" },
  D = {
    class: "search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20",
  },
  E = { class: "inline-b ml-5" };
const $ = f(
  {
    name: "frag-index",
    setup: () => ({ Edit: c, Delete: d, View: p, Search: m }),
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
          let e = await u(this.cur, this.params.keywords);
          200 === e.code &&
            ((this.tableData = [...e.data.list]), (this.count = e.data.count));
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
        let a = e.id;
        this.$router.push({ name: "frag-edit", params: { id: a } });
      },
      async handleDel(e) {
        let a = e.id;
        try {
          let e = await h(a);
          200 === e.code
            ? (this.$message({ message: "文章删除成功 ^_^", type: "success" }),
              this.search())
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
      function (c, d, p, m, u, h) {
        const f = e,
          $ = a,
          V = t,
          z = s,
          A = g("router-link"),
          T = o,
          q = r,
          F = l,
          I = i,
          G = n,
          H = j("permission");
        return (
          y(),
          b("div", x, [
            w("div", D, [
              C(
                z,
                { inline: !0, model: c.params, ref: "form" },
                {
                  default: _(() => [
                    C(
                      $,
                      { class: "mt-10", label: "标题", prop: "keywords" },
                      {
                        default: _(() => [
                          C(
                            f,
                            {
                              class: "mr-10 w-auto",
                              placeholder: "请输入内容",
                              "suffix-icon": m.Search,
                              clearable: "",
                              onClear: h.search,
                              modelValue: c.params.keywords,
                              "onUpdate:modelValue":
                                d[0] || (d[0] = (e) => (c.params.keywords = e)),
                            },
                            null,
                            8,
                            ["suffix-icon", "onClear", "modelValue"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    C(
                      $,
                      { class: "mt-10" },
                      {
                        default: _(() => [
                          C(
                            V,
                            { type: "primary", onClick: h.search, round: "" },
                            { default: _(() => [k("搜索")]), _: 1 },
                            8,
                            ["onClick"]
                          ),
                          C(
                            V,
                            {
                              onClick:
                                d[1] || (d[1] = (e) => h.clearSearch("form")),
                              round: "",
                            },
                            { default: _(() => [k("清空")]), _: 1 }
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
              C(
                A,
                { class: "mt-10", to: "/frag/add" },
                {
                  default: _(() => [
                    C(
                      V,
                      { type: "primary", round: "" },
                      { default: _(() => [k("新增")]), _: 1 }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            C(
              F,
              {
                ref: "multipleTable",
                data: c.tableData,
                "tooltip-effect": "dark",
                "row-key": "id",
                onSelectionChange: h.handleSelectionChange,
              },
              {
                default: _(() => [
                  C(T, { type: "selection" }),
                  C(T, { prop: "id", width: "60", label: "编号" }),
                  C(T, { prop: "name", label: "名称" }),
                  C(T, { prop: "mark", label: "标识" }),
                  C(
                    T,
                    { prop: "createdAt", label: "发布时间" },
                    { default: _((e) => [k(S(e.row.createdAt), 1)]), _: 1 }
                  ),
                  C(
                    T,
                    { fixed: "right", width: "120", label: "操作" },
                    {
                      default: _((e) => [
                        C(
                          V,
                          {
                            icon: m.Edit,
                            circle: "",
                            onClick: (a) => h.toEdit(e.row),
                          },
                          null,
                          8,
                          ["icon", "onClick"]
                        ),
                        v(
                          (y(),
                          b("div", E, [
                            C(
                              q,
                              {
                                width: "220",
                                onConfirm: (a) => h.handleDel(e.row),
                                "confirm-button-text": "确定",
                                "cancel-button-text": "取消",
                                "icon-color": "#626AEF",
                                title:
                                  "确定删除吗？如果在使用，删掉会模板会报错",
                              },
                              {
                                reference: _(() => [
                                  C(
                                    V,
                                    { icon: m.Delete, circle: "" },
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
            C(
              G,
              { type: "flex", class: "mt-20 align-c", justify: "center" },
              {
                default: _(() => [
                  C(
                    I,
                    {
                      background: "",
                      layout: "prev, pager, next",
                      onCurrentChange: h.handleCurrentChange,
                      "page-size": 20,
                      total: c.count,
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
);
export { $ as default };
