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
        window.sessionStorage.setItem('userToken','Bearer 6ab58c47-f566-4f50-924f-4784e4c604bf')
        this.$http.get(this.ajaxUrl.list,{systemCode:'test1',taskCode:'test2'}).then(res => {
            // debugger
        })
    }
}
</script>