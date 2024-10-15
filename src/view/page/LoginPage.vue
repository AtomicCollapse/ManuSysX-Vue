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
      '35e3c957-09c6-4081-8d36-2a625f35be5a'
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