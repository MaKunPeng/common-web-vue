<template>
  <el-container class="home-container">
    <el-header style="height:60px">
      <div class="home-logo">
        <span id="logo-top">深情</span>
        <span id="logo-bottom">DeepMotion</span>
      </div>
      <div class="left-banner">
        <div>
          <img src="../assets/image/horn.svg"/>
        </div>
        <div>
          <span>【公告】demo施工中</span>
        </div>
      </div>
      <div class="banner-search">
        <el-input placeholder="帮助说明" prefix-icon="el-icon-search" class="search-box"></el-input>
      </div>
      <div class="right-banner">
        <div class="right-banner widget">
          <img src="../assets/image/talk.svg" height="35px" />
        </div>
        <div class="vLine"></div>
        <div class="right-banner widget">
          <span>我的</span>
        </div>
        <div class="vLine"></div>
        <div class="right-banner widget">
          <img src="../assets/image/lingdang.svg" height="25px"/>
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
      </div>
    </el-header>
    <el-container class="sidemenu">
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="black"
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          :class="{'router-link-exact-active':ind == index}"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
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
          <router-view></router-view>
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
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/home.less";
</style>
