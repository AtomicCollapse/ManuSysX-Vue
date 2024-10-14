<template>
  <section>
    <ToolBar :toolBarButtons="toolBarButtons" :toolBarEvenMap="toolBarEvenMap"></ToolBar>
  </section>
</template>

<script>
import ToolBar from '@/component/ToolBar.vue'
export default {
  components: { ToolBar },
  data() {
    return {
      toolBarButtons: [
        { name: '新增', code: 'add', icon: 'el-icon-plus' },
        { name: '删除', code: 'delete', icon: 'el-icon-delete' },
    ],
      toolBarEvenMap: {
        add: this.handleAdd,
        delete: this.handleDelete,
      }
    }
  },
  methods: {
    handleAdd() {
        
    },
    handleDelete(){

    }
  }
}
</script>

<style lang="less" scoped>
</style>