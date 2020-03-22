<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/image/智能云.svg" alt="" />
      </div>
      <div>
        <!-- 登录表单区域 -->
        <el-form
          ref="loginFormRef"
          :rules="loginFormRules"
          :model="loginForm"
          class="login-form"
          label-width="0px"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user-solid"
              placeholder="用户名/邮箱"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item v-if="visible" prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              placeholder="密码"
              style="display: inline-block;"
              type="password"
            >
              <i
                slot="suffix"
                title="显示密码"
                class="iconfont icon-eye1"
                style="cursor:pointer"
                @click="changePwdVisible('show')"
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item v-else prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              placeholder="密码"
              style="display: inline-block;"
              type="text"
              ><i
                slot="suffix"
                title="隐藏密码"
                class="iconfont icon-eye"
                style="cursor:pointer"
                @click="changePwdVisible('hide')"
              ></i
            ></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btns">
            <el-button class="login-Btn" type="primary" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="register">
        <el-link
          style="position: absolute; left: 0px"
          type="primary"
          class="register-text"
          href="http://localhost:8080/#/forgot"
          >忘记密码？</el-link
        >
        <p
          type="info"
          style="position: absolute; right: 55px; bottom: 4px; font-size:12px; color:grey; width:70px; float:left; "
        >
          没有帐号?
        </p>
        <el-link
          style="position: absolute; right: 0px"
          type="primary"
          class="register-text"
          href="http://localhost:8080/#/signup"
          >创建帐户</el-link
        >
      </div>
    </div>
    <div class="login-footer">
      <p id="f1">Copyright &copy; Your Company 2020.</p>
      <p id="f2">如有问题，请联系：mkptning@163.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据对象
      loginForm: {
        username: "",
        password: ""
      },
      // 验证规则
      loginFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名/邮箱地址",
            trigger: "change"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      },
      // 密码可见性
      visible: true
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登录方法
    login() {
      this.$refs.loginFormRef.validate(valid => {
        // 如果表单验证未通过，直接返回
        if (!valid) return;
        // 如果表单验证通过，发起登录请求
        this.$http.post("login", this.loginForm).then(resp => {
          if (resp.data.code != 200) return this.$message.error(resp.data.message);
          // 如果登陆成功
          this.$message.success("登录成功！");
          // 1. 将后台返回的token保存至客户端的sessionStorage中
          //  1.1 前后端分离用token，不用cookie。token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
          console.log(resp);
          window.sessionStorage.setItem("token", resp.data.data.token);
          window.sessionStorage.setItem("username", resp.data.data.user.username);
          // 2. 跳转到管理后台主页，地址为/home
          this.$router.push("/home");
        });
      });
    },
    // 控制密码框可见
    changePwdVisible(value) {
      this.visible = !(value === "show");
    }
  }
};
</script>

// 加上scoped，只会在当前节点生效
<style lang="less" scoped>
.login-container {
  background-color: #fafafa;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 320px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar-box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.login-Btn {
  width: 410px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 10px;
}
.login-form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
}
.register {
  position: absolute;
  width: 410px;
  height: 40px;
  bottom: 0px;
  right: 20px;
  box-sizing: border-box;
  padding: 10px 10px;
}
p {
  color: lightgrey;
  font-size: 12px;
  text-align: center;
  margin: 8px 0px;
}
.login-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 80px;
}
</style>
