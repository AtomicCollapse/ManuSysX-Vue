<template>
  <section>
    <ToolBar :toolBarButtons="toolBarButtons" :toolBarEvenMap="toolBarEvenMap"></ToolBar>

    <el-table :data="mockData" stripe border>
      <el-table-column v-for="item in totalColumn" :prop="item.prop" :label="item.label" :min-width="item.minWidth"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import ToolBar from '@/component/ToolBar.vue'
import { column } from './js/CodeGenColumn.js'
export default {
  mixins: [column],
  components: { ToolBar },
  data() {
    return {
      toolBarButtons: [
        { name: '新增', code: 'add', icon: 'el-icon-plus' },
        { name: '删除', code: 'delete', icon: 'el-icon-delete' },
        {
          name: '查询',
          code: 'search',
          icon: 'el-icon-search',
          type: 'primary',
          round: true
        }
      ],
      toolBarEvenMap: {
        add: this.handleAdd,
        delete: this.handleDelete,
        search: this.handleSearch
      },
      mockData: []
    }
  },
  methods: {
    handleAdd() {},
    handleDelete() {},
    handleSearch() {
      this.mockData = [
        { a: '123', b: '123', c: '123123', d: '2312', e: 'fsdf2', f: '12312' },
        { a: '123', b: '123', c: '123123', d: '2312', e: 'fsdf2', f: '12312' },
        { a: '123', b: '123', c: '123123', d: '2312', e: 'fsdf2', f: '12312' },
        { a: '123', b: '123', c: '123123', d: '2312', e: 'fsdf2', f: '12312' },
        { a: '123', b: '123', c: '123123', d: '2312', e: 'fsdf2', f: '12312' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>