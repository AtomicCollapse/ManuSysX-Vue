<template>
  <el-menu :router="true" :unique-opened="false" background-color="#008B8B" text-color="#fff" active-text-color="#fff" :default-active="activePath">
    <el-menu-item index="/index">
      <template slot="title">
        <i class="el-icon-milk-tea"></i>
        <span>ManuSysX</span>
      </template>
    </el-menu-item>

    <el-menu-item v-for="item in userMenus" :key="item.name" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
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