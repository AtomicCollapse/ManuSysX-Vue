<template>
  <section>
    <ToolBar :toolBarButtons="toolBarButtons" :toolBarEvenMap="toolBarEvenMap"></ToolBar>

    <el-table :data="mockData" stripe border highlight-current-row>
      <el-table-column prop="name" label="模块名称" min-width="180px"></el-table-column>
      <el-table-column prop="package_name" label="包名" min-width="180px"></el-table-column>
      <el-table-column prop="insertTime" label="创建时间" min-width="180px"></el-table-column>
      <el-table-column prop="insertUser" label="创建人" min-width="180px"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import ToolBar from '@/component/ToolBar.vue'
export default {
  components: { ToolBar },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>