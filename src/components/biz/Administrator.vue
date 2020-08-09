<template>
  <div class="admin-container">
    <el-input class="search" prefix-icon="el-icon-search"></el-input>
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
 
.admin-container {
  position: relative;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /deep/ .el-input__inner {
    border-radius: 0px;
  }
}

.search {
  left:50%;
  transform:translate(-50%,55%);
  width: 800px;
  box-shadow:  0px 2px 2px 0px rgba(0, 0, 0, 0.24);
}
</style>
