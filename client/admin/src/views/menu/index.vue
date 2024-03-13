<template>
  <div class="mr-10 ml-10 mb-20 pd-20 content-wrap">
    <el-form ref="params" :model="params" label-width="84px">
      <el-form-item label="菜单配置">
        <el-input
          v-model="params.content"
          :rows="18"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { find, update } from "@/api/menu.js";

export default {
  name: "menu-index",
  components: {},
  // 注册组件
  data: () => {
    return {
      hasJsonFlag: true,
      params: {
        //接口入参
        id: 0,
        content: "",
      },
    };
  },
  computed: {},
  async mounted() {},

  async created() {
    await this.find();
  },
  unmounted() {},
  methods: {
    onJsonChange(value) {
      console.log("value:", value);
    },
    // 文章详情
    async find() {
      try {
        let res = await find();
        if (res.code == 200) {
          const { id, content } = res.data;
          this.params = {
            id,
            content: content,
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
    //新增
    async update() {
      try {
        let res = await update(this.params);
        if (res.code == 200) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.update();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style></style>
