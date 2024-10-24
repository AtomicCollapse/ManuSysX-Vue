<template>
  <section>
    <ToolBar :toolBarButtons="toolBarButtons" :toolBarEvenMap="toolBarEvenMap"></ToolBar>

    <el-table :data="mockData" stripe border highlight-current-row>
      <el-table-column prop="name" label="数据源名称" min-width="180px"></el-table-column>
      <el-table-column prop="type" label="数据库类型" min-width="180px"></el-table-column>
      <el-table-column prop="ipAddr" label="主机" min-width="180px"></el-table-column>
      <el-table-column prop="port" label="端口" min-width="180px"></el-table-column>
      <el-table-column prop="insertTime" label="创建时间" min-width="180px"></el-table-column>
      <el-table-column prop="insertUser" label="创建人" min-width="180px"></el-table-column>
    </el-table>

    <CgDataSourceEdit ref="editDialog" @handleOnEditBack="getList" :parentCmbSource="cmbSource" :editStatus="editStatus"></CgDataSourceEdit>
  </section>
</template>

<script>
import ToolBar from '@/component/ToolBar.vue'
import CgDataSourceEdit from './CgDataSourceEdit.vue'
import { commonList } from '@/common/mixins'
import { constant } from '@/common/constant'
export default {
  mixins: [commonList],
  components: { ToolBar, CgDataSourceEdit },
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
        add: this.handleCommonAdd,
        delete: this.handleDelete,
        search: this.getList
      },
      cmbSource: {
        dbType: constant.dbType
      },
      mockData: []
    }
  },
  methods: {
    handleDelete() {},
    getList() {
      this.mockData = [
        {
          name: '123',
          type: '123',
          ipAddr: '123123',
          port: '2312',
          insertTime: 'fsdf2',
          insertUser: '12312'
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
</style>