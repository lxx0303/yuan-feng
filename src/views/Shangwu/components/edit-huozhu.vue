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
                <el-select
                  v-model="editList.location"
                  placeholder="请选择库区"
                  style="width: 270px"
                >
                  <el-cascader
                    v-model="value"
                    :options="options"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange"
                  ></el-cascader>
                </el-select>
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
        location: "",
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
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
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
