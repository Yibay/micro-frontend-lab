<template>
  <div class="form-page">
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="card-header">
          <span>新建内容</span>
          <el-button @click="goBack">返回列表</el-button>
        </div>
      </template>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="80px"
        class="form"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="4"
            placeholder="请输入描述内容"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useListStore } from '../store/list';

const router = useRouter();
const list = useListStore();
const formRef = ref();

const form = reactive({
  title: '',
  description: ''
});

const rules = {
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
    { min: 2, max: 50, message: '标题长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  description: [
    { required: true, message: '请输入描述', trigger: 'blur' },
    { min: 5, max: 500, message: '描述长度在 5 到 500 个字符', trigger: 'blur' }
  ]
};

const submitForm = async () => {
  if (!formRef.value) return;

  await formRef.value.validate((valid: boolean) => {
    if (valid) {
      list.addItem(form.title, form.description);
      ElMessage.success('提交成功');
      router.push('/vue/list');
    } else {
      ElMessage.error('请完善表单信息');
    }
  });
};

const resetForm = () => {
  formRef.value?.resetFields();
};

const goBack = () => {
  router.push('/vue/list');
};
</script>

<style scoped>
.form-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form {
  margin-top: 20px;
}
</style>