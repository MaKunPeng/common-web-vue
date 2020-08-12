<template>
  <div class="admin-container">
    <!-- <el-input class="search" prefix-icon="el-icon-search"></el-input> -->
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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  min-width: 400px;

  /deep/ .el-input__inner {
    border-radius: 0px;
  }
}

.search {
  display: block;
  position: relative;
  margin: auto;
  width: 400px;
  min-width: 200px;
  box-shadow:  0px 2px 2px 0px rgba(0, 0, 0, 0.24);
}
</style>
