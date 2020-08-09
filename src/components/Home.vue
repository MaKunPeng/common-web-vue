<template>
  <el-container class="home-container">
    <el-header style="height:44px">
      <div>
        <span style="margin-left: 10px">AI后台智能引擎</span>
      </div>
      <span>[{{ username }}，欢迎你]</span>
      <!-- <el-button type="info" @click="logout">退出</el-button> -->
      <div>
        <img
          id="exit-img"
          @mouseenter="tipsHover"
          @mouseleave="tipsLeave"
          @click="logout"
          height="20px"
          src="../assets/image/tuichu.svg"
        />
        <div class="exit-tips" ref="exitTips">退出</div>
      </div>
    </el-header>
    <el-container class="sidemenu">
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          :default-active=activeIndex
          class="el-menu-vertical-demo"
          :class="{'router-link-exact-active':ind == index}"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理台</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="admin">
            <i class="el-icon-user"></i>
            <span slot="title">管理台</span>
          </el-menu-item>
          <el-menu-item index="knowledgebase">
            <i class="el-icon-document"></i>
            <span slot="title">知识库</span>
          </el-menu-item>
          <el-menu-item index="knowledgegraph">
            <i class="el-icon-orange"></i>
            <span slot="title">知识图谱</span>
          </el-menu-item>
          <el-menu-item index="semantic">
            <i class="el-icon-setting"></i>
            <span slot="title">语义理解</span>
          </el-menu-item>
          <el-menu-item index="emotion">
            <i class="el-icon-setting"></i>
            <span slot="title">情绪感知</span>
          </el-menu-item>
          <el-menu-item index="dialog">
            <i class="el-icon-setting"></i>
            <span slot="title">对话管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
          <div class="page">
            <router-view> </router-view>
          </div>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: "null",
      activeIndex: this.$route.name
    };
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
    },

    tipsHover() {
      console.log("xxxx");
      this.$refs.exitTips.style.display = "block";
    },

    tipsLeave() {
      this.$refs.exitTips.style.display = "none";
    },

    // 导航菜单选择
    handleSelect(key, keyPath) {
      console.log(keyPath);
      switch (key) {
        case "admin":
          this.$router.push("admin");
          break;
        case "knowledgebase":
          this.$router.push("knowledgebase");
          break;
        case "knowledgegraph":
          this.$router.push("knowledgegraph");
          break;
        case "semantic":
          this.$router.push("semantic");
          break;
        case "emotion":
          this.$router.push("emotion");
          break;
        case "dialog":
          this.$router.push("dialog");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/home.less";
</style>
