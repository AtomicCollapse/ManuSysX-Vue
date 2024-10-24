<template>
  <section>login</section>
</template>

<script>
import { ApiConstant } from '@/common/api'
export default {
  data() {
    return {
      apiUrl: {
        menusList: ApiConstant.pmsUrl.menus.list
      }
    }
  },
  created() {
    //设置测试用token
    window.sessionStorage.setItem(
      'token',
      '1f762ec9-9b8c-411d-8d58-7ab0527136cd'
    )

    //设置测试用菜单
    window.sessionStorage.setItem(
      'userMenus',
      JSON.stringify([
        {
          name: '代码生成',
          path: '/system/codeGen',
          icon: 'el-icon-ice-drink',
          sub: [
            {
              name: '数据源管理',
              path: '/system/codeGen/dataSource',
              icon: 'el-icon-ice-drink'
            },
            {
              name: '项目管理',
              path: '/system/codeGen/module',
              icon: 'el-icon-ice-drink'
            }
          ]
        }
      ])
    )
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>