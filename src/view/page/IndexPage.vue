<template>
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <MenuSideBar></MenuSideBar>
    </el-aside>

    <el-container>
      <el-header style="box-shadow: 5px 1px 4px #ccc;">
        <div class="common-center-box-row" style="height: 100%;">
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import MenuSideBar from '@/component/MenuSideBar.vue'
export default {
  components: { MenuSideBar },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>