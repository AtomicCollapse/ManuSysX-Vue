<template>
  <el-menu :router="true" :unique-opened="false" background-color="#008B8B" text-color="#fff" active-text-color="#fff" :default-active="activePath">
    <el-menu-item index="/index">
      <template slot="title">
        <i class="el-icon-milk-tea"></i>
        <span>ManuSysX</span>
      </template>
    </el-menu-item>

    <!-- 一级菜单 -->
    <el-submenu v-for="item in userMenus" :key="item.name" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item v-for="subItem in item.sub" :key="subItem.title" :index="subItem.path">
        <template slot="title">
          <i :class="subItem.icon"></i>
          <span>{{ subItem.name }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activePath: '/home',
      userMenus: []
    }
  },
  created() {
    this.getMenusList()
  },
  methods: {
    //渲染菜单
    getMenusList() {
      this.userMenus = JSON.parse(window.sessionStorage.getItem('userMenus'))
    }
  }
}
</script>

<style lang="less" scoped>
</style>