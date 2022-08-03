<template>
  <div>
    <el-card>
      <el-steps
        :active="active"
        finish-status="success"
        space="600px"
        :align-center="true"
      >
        <el-step title="基础信息"></el-step>
        <el-step title="分配库位"></el-step>
      </el-steps>
      <el-row style="margin-top: 20px" :gutter="20">
        <el-form
          :model="editList"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <!-- 第一行 -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="货主编号" prop="code">
                <el-input
                  v-model="editList.code"
                  placeholder="请输入"
                  style="width: 270px"
                  disabled
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货主名称" prop="name">
                <el-input
                  v-model="editList.name"
                  placeholder="请输入"
                  style="width: 270px"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="联系人" prop="personName">
                <el-input
                  v-model="editList.personName"
                  placeholder="请输入"
                  style="width: 270px"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="联系人电话" prop="phone">
                <el-input
                  v-model="editList.phone"
                  placeholder="请输入"
                  style="width: 270px"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="联系人邮箱" prop="email">
                <el-input
                  v-model="editList.email"
                  placeholder="请输入"
                  style="width: 270px"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="省/市/区" prop="location">
                <el-cascader
                  v-model="editList.location"
                  :options="options"
                  :props="{
                    expandTrigger: 'hover',
                    value: 'id',
                    label: 'text',
                  }"
                  @change="handleChange"
                ></el-cascader>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="详细地址" prop="address">
                <el-input
                  v-model="editList.address"
                  placeholder="请输入"
                  style="width: 590px"
                ></el-input>
              </el-form-item>
            </el-col>
            <!-- 第三行 -->
            <el-col :span="12">
              <el-form-item label="备注" prop="remark">
                <el-input
                  v-model="editList.remark"
                  placeholder="请输入"
                  style="width: 590px"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>
      <div class="line"></div>
      <el-row type="flex" justify="center">
        <el-button round @click="back">返回</el-button>
        <el-button type="warning" round @click="next">下一步</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { editCurrentInfo } from "@/api/huozhuManage";

export default {
  data() {
    return {
      active: 0,
      editList: {
        code: "",
        name: "",
        personName: "",
        phone: "",
        email: "",
        location: ["zhinan", "shejiyuanze", "yizhi"],
        address: "",
        remark: "",
      },
      rules: {
        code: [{ required: true, trigger: "blur" }],
        name: [{ required: true, trigger: "blur" }],
        personName: [{ required: true, trigger: "blur" }],
        phone: [
          { required: true, trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "联系电话格式不正确",
            trigger: "blur",
          },
        ],
        location: [{ required: true, trigger: "blur" }],
      },
      options: [
        {
          id: "zhinan",
          text: "指南",
          children: [
            {
              id: "shejiyuanze",
              text: "设计原则",
              children: [
                {
                  id: "yizhi",
                  text: "一致",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {
    this.onEditInfo();
  },
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    // 级联选择器
    handleChange(value) {
      console.log(value);
    },

    // 编辑页面数据
    async onEditInfo() {
      console.log(this.$route.query.id);
      const data = await editCurrentInfo(this.$route.query.id);
      this.editList = data.data.data;
      console.log(this.editList.area, "区");
      console.log(this.editList.city, "市");
      console.log(this.editList.province, "省");
    },
  },
};
</script>

<style scoped lang="less">
.line {
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}
</style>
