<template>
  <div class="login fcc">
    <div class="login_box">
      <div class="login_left">
        <!-- 头部图标 -->
        <div class="login_logo">
          <img
            src="	http://www-wms-java.itheima.net/img/title.ef005a7a.png"
            alt=""
          />
        </div>
        <!-- 输入框 -->
        <div class="login_input">
          <el-form :model="inputForm" :rules="inputRules" ref="loginFormRef">
            <!-- 用户名 -->
            <el-form-item prop="username">
              <el-input
                v-model="inputForm.username"
                prefix-icon="iconfont icon-yonghuming"
              ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input
                v-model="inputForm.password"
                type="password"
                show-password="true"
                prefix-icon="iconfont icon-mima"
              ></el-input>
            </el-form-item>
            <!-- 记住密码 -->
            <div class="login_select">
              <el-checkbox>记住密码</el-checkbox>
            </div>
            <!-- 按钮 -->
            <el-form-item class="login_btns">
              <el-button type="primary" @click="loginBtns">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="login_right">
        <img
          src="http://www-wms-java.itheima.net/img/contentBg.1321d126.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录的输入框的数据
      inputForm: {
        username: "admin",
        password: "111111",
      },
      // 表单的验证规则
      inputRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            // 失去焦点的时候触发
            trigger: blur,
          },
          {
            min: 3,
            max: 7,
            message: "长度需要在3~7个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: blur,
          },
          {
            min: 6,
            max: 11,
            message: "长度需要6~11位",
            trigger: blur,
          },
        ],
      },
    };
  },
  methods: {
    loginBtns() {
      this.$router.push({
        name: "Layout",
      });
    },
  },
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  .login_box {
    width: 958px;
    height: 516px;
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    .login_left {
      width: 398px;
      height: 100%;
      border-radius: 40px 0 0 40px;
      .login_logo {
        margin-left: 124px;
        margin-top: 72px;
        img {
          width: 150px;
          height: 60px;
        }
      }
      .login_input {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }
      .login_btns {
        display: flex;
        justify-content: center;
      }
    }
    .login_right {
      // flex: 1;
      width: 560px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0 40px 40px 0;
      }
    }
  }
  /deep/.el-input__inner {
    background-color: #f8f5f5;
  }
}
</style>
