<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/image/管理.svg" width="40px" style="margin-right:5px" alt="" />
        <span>AI后台智能引擎</span>
      </div>
      <span>[{{username}}，欢迎你]</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: "null"
    }
  },
  created() {
    this.username = window.sessionStorage.getItem("username");
  },
  methods: {
    // 用户退出
    logout() {
      // 清空token
      window.sessionStorage.clear();
      // 重定向至/login
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-top: 5px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-family: Microsoft JhengHei;
  > div {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #fafafa;
}
</style>
