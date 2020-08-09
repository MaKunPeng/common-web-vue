<template>
  <div class="base-container">
    <div class="panel">
      <div class="top">
        <el-button>上传数据集</el-button>
        <el-button>训练</el-button>
        <el-button>测试</el-button>
        <div class="add">
          <img
            id="add-img"
            @mouseenter="tipsHover"
            @mouseleave="tipsLeave"
            @click="logout"
            height="20px"
            src="../../assets/image/add.svg"
          />
        </div>
      </div>
      <div class="list">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.base-container {
  position: relative;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.panel {
  position: relative;
  margin:0px auto;
  margin-top: 30px;
  box-shadow: 0px 2px 6px 0px rgba(9, 2, 32, 0.4);
  width: 1200px;
  height: 800px;

}

.top {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-left: 30px;
  height: 50px;
  #add-img {
    margin-left: 30px;
    cursor: pointer;
  }
}

.list {
  position: relative;
  margin: 20px auto;
  width: 1000px;
  height: 600px;
  background-color: blanchedalmond;
}
</style>
