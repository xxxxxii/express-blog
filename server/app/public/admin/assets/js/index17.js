import {
  f as e,
  t,
  I as s,
  F as a,
  C as l,
  J as i,
  L as o,
} from "./element-plus.js";
import { G as r, E as n, v as c, H as p } from "./@element-plus.js";
import { l as d, a as u } from "./slide.js";
import { _ as m } from "./@qiun.js";
import {
  r as h,
  o as g,
  c as f,
  g as j,
  _ as y,
  a0 as C,
  e as w,
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
/* empty css        */ const b = { class: "pd-20 bg-main content-wrap" };
const k = m(
  {
    name: "slide-index",
    setup: () => ({ Edit: r, Delete: n, View: c, Search: p }),
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
        this.$router.push({ name: "slide-edit", params: { id: t } });
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
      function (r, n, c, p, d, u) {
        const m = e,
          k = h("router-link"),
          v = t,
          S = s,
          x = a,
          D = l,
          E = i,
          $ = o;
        return (
          g(),
          f("div", b, [
            j(
              v,
              { type: "flex", class: "mt-10 mb-10", justify: "end" },
              {
                default: y(() => [
                  j(
                    k,
                    { to: "/slide/add" },
                    {
                      default: y(() => [
                        j(
                          m,
                          { type: "primary", round: "" },
                          { default: y(() => [C("新增")]), _: 1 }
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
              E,
              {
                ref: "multipleTable",
                data: r.tableData,
                "tooltip-effect": "dark",
                "row-key": "id",
                onSelectionChange: u.handleSelectionChange,
              },
              {
                default: y(() => [
                  j(S, { type: "selection" }),
                  j(S, { prop: "id", label: "编号" }),
                  j(S, { prop: "title", label: "标题" }),
                  j(
                    S,
                    { prop: "img_url", label: "图片链接" },
                    {
                      default: y((e) => [
                        e.row.img_url
                          ? (g(),
                            w(
                              D,
                              {
                                key: 0,
                                placement: "right",
                                width: 600,
                                trigger: "hover",
                              },
                              {
                                reference: y(() => [
                                  j(
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
                                default: y(() => [
                                  j(
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
                          : _("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                  j(S, { prop: "link_url", label: "跳转链接" }),
                  j(
                    S,
                    { fixed: "right", width: "100", label: "操作" },
                    {
                      default: y((e) => [
                        j(
                          m,
                          {
                            icon: p.Edit,
                            circle: "",
                            onClick: (t) => u.toEdit(e.row),
                          },
                          null,
                          8,
                          ["icon", "onClick"]
                        ),
                        j(
                          m,
                          {
                            icon: p.Delete,
                            circle: "",
                            onClick: (t) => u.handleDel(e.row),
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
              v,
              { type: "flex", class: "mt-20 align-c", justify: "center" },
              {
                default: y(() => [
                  j(
                    $,
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
export { k as default };
