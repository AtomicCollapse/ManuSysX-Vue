import { EDIT_STATUS } from './editStatus'

//通用表单封装
export const commonForm = {
    data() {
        return {
            // 控制表单弹窗是否显示
            editVisible: false,
            // 表单数据对象
            formItem:{},
            // 表单校验规则
            formRules: {},
            
        }
    },
    methods: {
        //通用表单弹出框打开事件
        handleCommonDialogShow() {
            if (this.editStatus === EDIT_STATUS.add) {
                //新增时，初始化清空表单栏位
                this.$refs['form'].resetFields()
            }
            this.editVisible = true
        },
        //通用表单弹出框关闭事件
        handleCommonDialogCancel() {
            this.editVisible = false
        },
        //通用表单保存事件
        handleCommonFormSave() {
            this.$refs['form'].validate(async valid => {
                if (valid) {
                } else {
                    return false
                }
            })
        }
    }
}