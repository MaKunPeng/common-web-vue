<template>
  <div class="regist-container">
    <div class="logo-section">
      <!-- <a>
        <img
          src="../assets/image/智能云.svg"
          width="100px"
          style="margin-top: 50px;"
          alt=""
        />
      </a> -->
      <div class="logo">科学炼丹机器人</div>
    </div>

    <div class="regist-box">
      <span class="single-title">创建帐户</span>
      <el-form
        ref="registFormRef"
        :model="registForm"
        label-width="100px"
        :rules="registFormRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmedPassword">
          <el-input
            type="password"
            v-model="registForm.confirmedPassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" id="confirm"
            >立即创建</el-button
          >
          <el-button @click="cancel" id="cancel">取消</el-button>
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
        confirmedPassword: "",
      },
      // 验证规则
      registFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱地址",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        confirmedPassword: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    // 提交表单
    onSubmit() {
      this.$refs.registFormRef.validate() (valid => {
        // 如果表单验证未通过，直接返回
        if (!valid) return;
        this.$message({
          showClose: true,
          duration: 0,
          message:
            "注册成功！将会有一封激活邮件发送至您的邮箱，请点击激活链接激活后登录。",
          type: "success",
        });
        console.log(this.registForm);
        this.$http.post("signup", this.registForm).then((resp) => {
          console.log(resp);
          if (resp.data.code != 200)
            return this.$message.error(resp.data.message);
          // 如果登陆成功
          this.$message({
            showClose: true,
            message:
              "注册成功！将会有一封激活邮件发送至您的邮箱，请点击激活链接激活后登录。",
            type: "success",
          });
        });
        }
      )
    },
    cancel() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/regist.less";
</style>
