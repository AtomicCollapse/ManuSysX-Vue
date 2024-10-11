<template>
    <section>
        123123
        <!-- <el-card>
            123123
        </el-card> -->
    </section>
</template>

<script>
export default {
    data(){
        return {
            ajaxUrl:{
                list: '/api/infra/asyncImport/config/getConfigByCode'
            }
        }
    },
    created(){
        window.sessionStorage.setItem('userToken','c27f5877-f18a-4abb-9068-a230ce508ee2')
        this.$http.get(this.ajaxUrl.list,{systemCode:'test1',taskCode:'test2'}).then(res => {
            debugger
        })
    }
}
</script>