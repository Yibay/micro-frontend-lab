<template>
  <div class="contact">
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="card-header">
          <span>联系我们</span>
        </div>
      </template>
      <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="留言">
          <el-input v-model="form.message" type="textarea" placeholder="请输入留言" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  ElMessage('表单提交成功！');
};
</script>

<style scoped>
.contact {
  padding: 20px;
}

.card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>