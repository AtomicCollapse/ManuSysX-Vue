<template>
  <section>
    <el-dialog title="编辑" :visible.sync="editVisible" :close-on-click-modal="false">
      <el-form ref="form" :model="formItem" :rules="formRules" label-width="80px">
        <el-form-item label="数据源名称" prop="name" label-width="120px">
          <el-input v-model="formItem.name"></el-input>
        </el-form-item>
        <el-form-item label="数据库类型" prop="type" label-width="120px">
          <el-select v-model="formItem.type" placeholder="请选择">
            <el-option v-for="item in parentCmbSource.dbType" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="URL" prop="url" label-width="120px">
          <el-input v-model="formItem.url"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCommonDialogCancel">取 消</el-button>
        <el-button type="primary" class="theme" @click="handleCommonFormSave">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { commonForm } from '@/common/mixins'
export default {
  mixins: [commonForm],
  props: {
    editStatus: {
      type: String,
      required: true
    },
    parentCmbSource: {
      type: Object
    }
  },
  data() {
    return {
      formItem: {
        name: '',
        type: '',
        url: ''
      },
      formRules: {
        name: [
          { required: true, trigger: 'blur', message: '请输入数据源名称' }
        ],
        type: [
          { required: true, trigger: 'blur', message: '请选择数据库类型' }
        ],
        url: [{ required: true, trigger: 'blur', message: '请输入URL' }]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>