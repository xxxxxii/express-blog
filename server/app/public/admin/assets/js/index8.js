import { f as e, t, I as i, J as a, L as s } from "./element-plus.js";
import { G as l, E as o, v as r, H as n } from "./@element-plus.js";
import { l as c, a as d } from "./friendlink.js";
import { _ as p } from "./@qiun.js";
import {
  r as u,
  o as m,
  c as h,
  g as f,
  _ as g,
  a0 as j,
  t as y,
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
/* empty css        */ const C = { class: "pd-20 bg-main" };
const b = p(
  {
    name: "friendlink-index",
    setup: () => ({ Edit: l, Delete: o, View: r, Search: n }),
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
          let e = await c(this.cur);
          200 === e.code &&
            ((this.tableData = [...e.data.list]), (this.count = e.data.count));
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
        let t = e.id;
        this.$router.push({ name: "friendlink-edit", params: { id: t } });
      },
      async handleDel(e) {
        let t = e.id;
        try {
          let e = await d(t);
          200 === e.code
            ? (this.$message({ message: "删除成功 ^_^", type: "success" }),
              this.list())
            : this.$message({ message: e.msg, type: "success" });
        } catch (i) {
          console.log(i);
        }
      },
    },
  },
  [
    [
      "render",
      function (l, o, r, n, c, d) {
        const p = e,
          b = u("router-link"),
          k = t,
          w = i,
          S = a,
          _ = s;
        return (
          m(),
          h("div", C, [
            f(
              k,
              { type: "flex", class: "mt-10 mb-10", justify: "end" },
              {
                default: g(() => [
                  f(
                    b,
                    { to: "/friendlink/add" },
                    {
                      default: g(() => [
                        f(
                          p,
                          { type: "primary", round: "" },
                          { default: g(() => [j("新增")]), _: 1 }
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
              S,
              {
                ref: "multipleTable",
                data: l.tableData,
                "tooltip-effect": "dark",
                "row-key": "id",
                onSelectionChange: d.handleSelectionChange,
              },
              {
                default: g(() => [
                  f(w, { type: "selection" }),
                  f(w, { prop: "id", width: "60", label: "编号" }),
                  f(w, { prop: "title", width: "120", label: "标题" }),
                  f(w, { prop: "link", width: "260", label: "链接" }),
                  f(w, { prop: "sort", label: "排序" }),
                  f(
                    w,
                    { prop: "createdAt", label: "发布时间" },
                    { default: g((e) => [j(y(e.row.createdAt), 1)]), _: 1 }
                  ),
                  f(
                    w,
                    { fixed: "right", width: "100", label: "操作" },
                    {
                      default: g((e) => [
                        f(
                          p,
                          {
                            icon: n.Edit,
                            circle: "",
                            onClick: (t) => d.toEdit(e.row),
                          },
                          null,
                          8,
                          ["icon", "onClick"]
                        ),
                        f(
                          p,
                          {
                            icon: n.Delete,
                            circle: "",
                            onClick: (t) => d.handleDel(e.row),
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
              k,
              { type: "flex", class: "mt-20 align-c", justify: "center" },
              {
                default: g(() => [
                  f(
                    _,
                    {
                      background: "",
                      layout: "prev, pager, next",
                      onCurrentChange: d.handleCurrentChange,
                      "page-size": 10,
                      total: l.count,
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
);
export { b as default };
