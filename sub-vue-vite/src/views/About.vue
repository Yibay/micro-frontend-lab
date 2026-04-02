<template>
  <div class="about">
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="card-header">
          <span>关于我们</span>
        </div>
      </template>
      <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <el-divider>公司简介</el-divider>
      <el-descriptions :column="1">
        <el-descriptions-item label="公司名称">示例公司</el-descriptions-item>
        <el-descriptions-item label="成立时间">2024年</el-descriptions-item>
        <el-descriptions-item label="公司地址">北京市朝阳区</el-descriptions-item>
        <el-descriptions-item label="联系电话">12345678901</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// About 页面逻辑
</script>

<style scoped>
.about {
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