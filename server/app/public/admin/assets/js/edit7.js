import {
  q as e,
  r as a,
  f as s,
  G as t,
  O as l,
  p as r,
} from "./element-plus.js";
import { d as o, g as i, u as m } from "./gather.js";
import { _ as p } from "./@qiun.js";
import {
  o as d,
  c as u,
  g as c,
  _ as n,
  a as g,
  a0 as h,
  t as f,
  p as j,
  b as _,
} from "./@vue.js";
import "./lodash-es.js";
import "./async-validator.js";
import "./@vueuse.js";
import "./dayjs.js";
import "./@element-plus.js";
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
/* empty css        */ const b = {
    name: "gather-edit",
    data: () => ({
      activeName: "list",
      params: {
        taskName: "",
        targetUrl: "",
        parseData: "",
        status: "1",
        cid: 1,
      },
      article: { title: "", content: "" },
    }),
    computed: {},
    mounted() {},
    async created() {
      (this.params.id = this.$route.params.id), await this.detail();
    },
    methods: {
      async detail() {
        try {
          let e = await o(this.params.id);
          if (200 === e.code) {
            let a = e.data;
            this.params = a;
          }
        } catch (e) {
          console.error(e);
        }
      },
      handleAttr(e) {
        console.log("e--\x3e", e);
      },
      handleSubCid(e) {
        console.log("e--\x3e", e);
      },
      async getArticle() {
        try {
          let { targetUrl: e, parseData: a } = this.params,
            s = await i({ targetUrl: e, parseData: a });
          200 == s.code &&
            ((this.article = s.data),
            this.$message({
              message: "恭喜你，获取数据成功^_^",
              type: "success",
            }));
        } catch (e) {
          console.log(e);
        }
      },
      async update() {
        try {
          let e = await m(this.params);
          200 == e.code
            ? (this.$message({ message: "新增成功^_^", type: "success" }),
              this.$router.go(-1))
            : this.$message({ message: e.msg, type: "success" });
        } catch (e) {
          console.log(e);
        }
      },
      submit(e) {
        this.$refs[e].validate((e) => {
          if (!e) return !1;
          this.update();
        });
      },
    },
  },
  y = { class: "mb-20 bg-main pd-20" },
  v = { class: "row w-p100" },
  V = { class: "row w-p100" },
  w = ((e) => (j("data-v-9736213c"), (e = e()), _(), e))(() =>
    g("p", null, "内容：", -1)
  ),
  U = ["innerHTML"];
const x = p(b, [
  [
    "render",
    function (o, i, m, p, j, _) {
      const b = e,
        x = a,
        k = s,
        q = t,
        D = l,
        $ = r;
      return (
        d(),
        u("div", y, [
          c(
            $,
            { ref: "params", model: o.params, "label-width": "84px" },
            {
              default: n(() => [
                c(
                  x,
                  {
                    label: "任务名称",
                    prop: "taskName",
                    rules: [
                      {
                        required: !0,
                        message: "请输入任务名称",
                        trigger: "blur",
                      },
                    ],
                  },
                  {
                    default: n(() => [
                      c(
                        b,
                        {
                          modelValue: o.params.taskName,
                          "onUpdate:modelValue":
                            i[0] || (i[0] = (e) => (o.params.taskName = e)),
                          placeholder: "例：前端库-chat问答",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                c(
                  x,
                  {
                    label: "接口地址",
                    prop: "targetUrl",
                    rules: [
                      {
                        required: !0,
                        message: "请输入匹配网址",
                        trigger: "blur",
                      },
                    ],
                  },
                  {
                    default: n(() => [
                      g("div", v, [
                        c(
                          b,
                          {
                            class: "flex-1",
                            modelValue: o.params.targetUrl,
                            "onUpdate:modelValue":
                              i[1] || (i[1] = (e) => (o.params.targetUrl = e)),
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                c(
                  x,
                  {
                    label: "内容字段",
                    prop: "parseData",
                    rules: [
                      {
                        required: !0,
                        message: "请输入内容字段",
                        trigger: "blur",
                      },
                    ],
                  },
                  {
                    default: n(() => [
                      g("div", V, [
                        c(
                          b,
                          {
                            class: "flex-1",
                            type: "textarea",
                            rows: 13,
                            modelValue: o.params.parseData,
                            "onUpdate:modelValue":
                              i[2] || (i[2] = (e) => (o.params.parseData = e)),
                            placeholder: "例：.content h4 a",
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                        c(
                          k,
                          {
                            class: "ml-5",
                            type: "primary",
                            onClick: _.getArticle,
                          },
                          { default: n(() => [h(" 测试 ")]), _: 1 },
                          8,
                          ["onClick"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                c(
                  x,
                  { class: "show", label: "测试结果" },
                  {
                    default: n(() => [
                      g("p", null, "标题：" + f(o.article.title), 1),
                      w,
                      g("div", { innerHTML: o.article.content }, null, 8, U),
                    ]),
                    _: 1,
                  }
                ),
                c(
                  x,
                  {
                    label: "保存栏目",
                    prop: "cid",
                    rules: [
                      {
                        required: !0,
                        message: "请输入保存栏目",
                        trigger: "blur",
                      },
                    ],
                  },
                  {
                    default: n(() => [
                      c(
                        b,
                        {
                          modelValue: o.params.cid,
                          "onUpdate:modelValue":
                            i[3] || (i[3] = (e) => (o.params.cid = e)),
                          placeholder: "例：cid",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                c(
                  x,
                  {
                    label: "发布状态",
                    prop: "status",
                    rules: [
                      {
                        required: !0,
                        message: "请选择字符集",
                        trigger: "blur",
                      },
                    ],
                  },
                  {
                    default: n(() => [
                      c(
                        D,
                        {
                          modelValue: o.params.status,
                          "onUpdate:modelValue":
                            i[4] || (i[4] = (e) => (o.params.status = e)),
                          class: "ml-4",
                        },
                        {
                          default: n(() => [
                            c(
                              q,
                              { value: "1", size: "large" },
                              { default: n(() => [h("草稿")]), _: 1 }
                            ),
                            c(
                              q,
                              { value: "2", size: "large" },
                              { default: n(() => [h("发布")]), _: 1 }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                c(x, null, {
                  default: n(() => [
                    c(
                      k,
                      {
                        type: "primary",
                        onClick: i[5] || (i[5] = (e) => _.submit("params")),
                      },
                      { default: n(() => [h("保存")]), _: 1 }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ["model"]
          ),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-9736213c"],
]);
export { x as default };
