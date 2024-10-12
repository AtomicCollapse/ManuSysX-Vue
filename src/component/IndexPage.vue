<template>
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <el-menu :router="true" :unique-opened="false" background-color="#008B8B" text-color="#fff" active-text-color="#fff" :default-active="activePath">
        <el-menu-item index="/home">
          <template slot="title">
            <i class="el-icon-milk-tea"></i>
            <span>ManuSysX</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header" style="background-color: red;">header</el-header>
      <el-main style="background-color: blue;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
    data(){
        return {
            activePath: '/home',
        }
    }
}
</script>

<style lang="less" scoped>
</style>