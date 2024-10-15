<template>
  <section>
    <div style="margin-bottom: 5px;">
        <el-button v-for="item in toolBarButtons" :type="item.type" :round="item.round" :key="item.code" @click="handleBtnClick(item.code)">
            <span style="margin-right: 5px;"><i :class="item.icon"></i></span>
            <span>{{ item.name }}</span>
        </el-button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    toolBarButtons: {
        type: Array,
        required: true
    },
    toolBarEvenMap: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  mounted(){
    
  },
  methods: {
    //处理按钮事件
    handleBtnClick(btnCode){
        this.toolBarEvenMap[btnCode]()
    }
  }
}
</script>

<style lang="less" scoped>
</style>