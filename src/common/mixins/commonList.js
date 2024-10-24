import { EDIT_STATUS } from './editStatus'

//通用分页查询封装
export const commonList = {
    data() {
        return {
            //当前编辑状态
            editStatus: '',
            //工具栏按钮组
            toolBarButtons: [],
            //工具栏按钮组点击事件
            toolBarEvenMap: {},
            //下拉框数据源
            cmbSource: {}
        }
    },
    mounted(){
        //初始化查询
        this.getList()
    },
    methods: {
        //通用分页查询方法
        getList() {

        },
        //通用工具栏新增方法
        handleCommonAdd() {
            this.editStatus = EDIT_STATUS.add
            this.$refs['editDialog'].handleCommonDialogShow()
        },
        //通用工具栏批量勾选删除方法
        handleCommonDelete() {

        },
        //通用操作栏编辑方法
        handleCommonEditByRow() {

        },
        //通用操作栏删除方法
        handleCommonDeleteByRow() {

        },
    }
}