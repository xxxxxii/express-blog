import {
  f as e,
  t,
  I as s,
  a,
  g as l,
  J as i,
  L as o,
} from "./element-plus.js";
import { G as r, E as n, v as c, H as d } from "./@element-plus.js";
import { l as p, a as u } from "./sys_role.js";
import { _ as m } from "./@qiun.js";
import {
  r as h,
  o as f,
  c as g,
  g as j,
  _ as y,
  a0 as b,
  t as w,
  e as C,
  f as _,
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
/* empty css        */ const k = { class: "pd-20 content-wrap bg-main" };
const S = m(
  {
    name: "role-index",
    setup: () => ({ Edit: r, Delete: n, View: c, Search: d }),
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
            ? ((this.tableData = [...e.data.list]), (this.count = e.data.count))
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
        let t = e.id;
        this.$router.push({ name: "role-edit", params: { id: t } });
      },
      async handleDel(e) {
        let t = e.id;
        try {
          let e = await u(t);
          200 === e.code
            ? (this.$message({ message: "删除成功 ^_^", type: "success" }),
              this.list())
            : this.$message({ message: e.msg, type: "success" });
        } catch (s) {
          console.log(s);
        }
      },
    },
  },
  [
    [
      "render",
      function (r, n, c, d, p, u) {
        const m = e,
          S = h("router-link"),
          v = t,
          x = s,
          D = h("QuestionFilled"),
          E = a,
          $ = l,
          z = i,
          T = o;
        return (
          f(),
          g("div", k, [
            j(
              v,
              { type: "flex", class: "mt-10 mb-10", justify: "end" },
              {
                default: y(() => [
                  j(
                    S,
                    { to: "/role/add" },
                    {
                      default: y(() => [
                        j(
                          m,
                          { type: "primary", round: "" },
                          { default: y(() => [b("新增")]), _: 1 }
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
              z,
              {
                ref: "multipleTable",
                data: r.tableData,
                "tooltip-effect": "dark",
                "row-key": "id",
                onSelectionChange: u.handleSelectionChange,
              },
              {
                default: y(() => [
                  j(x, { type: "selection" }),
                  j(x, { prop: "id", width: "100", label: "编号" }),
                  j(x, { prop: "name", width: "300", label: "名称" }),
                  j(x, { prop: "value", label: "角色" }),
                  j(
                    x,
                    { prop: "status", label: "状态" },
                    {
                      default: y((e) => [
                        b(w("1" == e.row.status ? "正常" : "停用"), 1),
                      ]),
                      _: 1,
                    }
                  ),
                  j(
                    x,
                    { fixed: "right", width: "150", label: "操作" },
                    {
                      default: y((e) => [
                        j(
                          m,
                          {
                            icon: d.Edit,
                            disabled: e.row.id < 4,
                            circle: "",
                            onClick: (t) => u.toEdit(e.row),
                          },
                          null,
                          8,
                          ["icon", "disabled", "onClick"]
                        ),
                        j(
                          m,
                          {
                            icon: d.Delete,
                            disabled: e.row.id < 4,
                            circle: "",
                            onClick: (t) => u.handleDel(e.row),
                          },
                          null,
                          8,
                          ["icon", "disabled", "onClick"]
                        ),
                        e.row.id < 4
                          ? (f(),
                            C(
                              $,
                              {
                                key: 0,
                                content: "系统默认角色，禁止删除",
                                effect: "light",
                                placement: "top-start",
                              },
                              {
                                default: y(() => [
                                  j(
                                    E,
                                    { class: "ml-10 t-4 pointer" },
                                    {
                                      default: y(() => [
                                        j(D, { class: "c-165dff" }),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ))
                          : _("", !0),
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
              v,
              { type: "flex", class: "mt-20 align-c", justify: "center" },
              {
                default: y(() => [
                  j(
                    T,
                    {
                      background: "",
                      layout: "prev, pager, next",
                      onCurrentChange: u.handleCurrentChange,
                      "page-size": 10,
                      total: r.count,
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
export { S as default };
