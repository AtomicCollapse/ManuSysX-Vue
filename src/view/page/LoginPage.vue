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
      '98997ed8-aeb0-4d90-8801-bfc724f60689'
    )

    //设置测试用菜单
    window.sessionStorage.setItem('userMenus', JSON.stringify([
      { name: '代码生成', path: '/system/codeGen',icon:'el-icon-ice-drink' }
    ]))
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>