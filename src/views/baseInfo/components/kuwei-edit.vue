<template>
  <div>
    <Header></Header>
    <el-card>
      <el-row style="margin-top: 20px" :gutter="20">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-form-item label="库区" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="库位编号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="库位名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="温度类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="承重类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用途属性" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="停用状态" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="0">启用</el-radio>
              <el-radio label="1">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="承载体积" prop="desc">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <template slot="append">m³</template>
            </el-input>
          </el-form-item>
          <el-form-item label="承载上限" prop="desc">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <el-button slot="append" icon="el-icon-top"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="承载重量" prop="desc">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <template slot="append">Kg</template>
            </el-input>
          </el-form-item>
          <!-- 第四行 -->
          <el-form-item label="库位排/列/层" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="库位长/宽/高" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <template slot="append">cm</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <template slot="append">cm</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入">
              <template slot="append">cm</template>
            </el-input>
          </el-form-item>
          <div class="line"></div>
          <el-row type="flex" justify="center">
            <el-button round @click="back">返回</el-button>
            <el-button type="warning" round>提交</el-button>
          </el-row>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
export default {
  compoents: { Header },
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
