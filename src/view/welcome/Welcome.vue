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
        this.$http.get(this.ajaxUrl.list,{systemCode:'test1',taskCode:'test2'}).then(res => {
            // debugger
        })
    }
}
</script>