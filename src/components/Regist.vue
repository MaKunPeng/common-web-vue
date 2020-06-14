<template>
  <div class="regist-container">
    <div class="logo-section">
      <a>
        <img
          src="../assets/image/智能云.svg"
          width="100px"
          style="margin-top: 50px;"
          alt=""
        />
      </a>
    </div>

    <div class="regist-box">
      <span class="single-title">创建帐户</span>
      <el-form ref="form" :model="registForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="registForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="registForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            type="password"
            v-model="registForm.confirmedPassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="regist-footer">
      <p id="f1">Copyright &copy; Your Company 2020.</p>
      <p id="f2">如有问题，请联系：mkptning@163.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registForm: {
        username: "",
        email: "",
        password: "",
        confirmedPassword: ""
      }
    };
  },
  methods: {
    // 提交表单
    onSubmit() {
      this.$message({
        showClose: true,
        duration: 0,
        message:
          "注册成功！将会有一封激活邮件发送至您的邮箱，请点击激活链接激活后登录。",
        type: "success"
      });
      console.log(this.registForm);
      this.$http.post("signup", this.registForm).then(resp => {
        console.log(resp);
        if (resp.data.code != 200)
          return this.$message.error(resp.data.message);
        // 如果登陆成功
        this.$message({
          showClose: true,
          message:
            "注册成功！将会有一封激活邮件发送至您的邮箱，请点击激活链接激活后登录。",
          type: "success"
        });
      });
    },
    cancel() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
body,
html {
  height: 100%;
  font-family: "Helvetica Neue", "Hiragino Sans GB", stheiti, "Microsoft Yahei",
    "微软雅黑", tahoma, sans-serif;
  line-height: 1.5;
  color: #333;
  margin: 0;
  padding: 0;
  border: 0;
}
.regist-container {
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
.regist-box {
  width: 500px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  position: relative;
  border-radius: 8px;
  margin: 0 auto 20px;
  padding: 17px 40px 40px;
  background: #fff;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.regist-footer {
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  > p {
    color: lightgrey;
    font-size: 12px;
    text-align: center;
    margin: 13px 0px;
  }
}
.single-title {
  display: block;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 13px;
  word-break: break-all;
  border-bottom: 1px solid #eee;
  margin-bottom: 25px;
}
.logo-section {
  width: 100%;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
</style>
