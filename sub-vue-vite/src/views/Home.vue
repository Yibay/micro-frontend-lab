<template>
  <div class="home">
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="card-header">
          <span>首页</span>
        </div>
      </template>
      <el-button type="primary" @click="showDialog">点击我</el-button>
      <el-divider>欢迎使用 Element Plus</el-divider>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </el-card>
    <el-dialog v-model="dialogVisible" title="提示" width="30%">
      <span>Hello Element Plus!</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStateStore } from '@/store/globalState';
import { EmitType } from '@shared/types';

const globalStateStore = useGlobalStateStore();
const dialogVisible = ref(false);

const showDialog = () => {
  globalStateStore.emit({
    type: EmitType.login,
    payload: { action: 'showDialog' }
  });
  dialogVisible.value = true;
};

const tableData = ref([
  {
    date: '2024-01-01',
    name: '张三',
    address: '北京市朝阳区'
  },
  {
    date: '2024-01-02',
    name: '李四',
    address: '上海市浦东新区'
  },
  {
    date: '2024-01-03',
    name: '王五',
    address: '广州市天河区'
  }
]);
</script>

<style scoped>
.home {
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