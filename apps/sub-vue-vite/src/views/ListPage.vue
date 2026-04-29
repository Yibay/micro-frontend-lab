<template>
  <div class="list-page">
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="card-header">
          <span>列表页</span>
          <el-button type="primary" @click="goToForm">新建内容</el-button>
        </div>
      </template>
      <div v-if="list.items.length === 0" class="empty-state">
        <el-empty description="暂无数据，请点击新建内容添加" />
      </div>
      <div v-else class="virtual-list-container" v-bind="containerProps">
        <div class="virtual-list" v-bind="wrapperProps">
          <div
            v-for="{ data, index } in virtualList"
            :key="index"
            class="virtual-list-item"
            :style="{ height: `${itemHeight}px` }"
          >
            <el-card shadow="hover" class="item-card">
              <template #header>
                <div class="item-header">
                  <span class="item-title">{{ data.title }}</span>
                  <span class="item-time">{{ formatTime(data.createdAt) }}</span>
                </div>
              </template>
              <div class="item-content">{{ data.description }}</div>
            </el-card>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVirtualList } from '@vueuse/core';
import { useListStore } from '../store/list';

const router = useRouter();
const list = useListStore();

const itemHeight = 150;

const { list: virtualList, containerProps, wrapperProps } = useVirtualList(
  computed(() => list.items),
  {
    itemHeight
  }
);

const goToForm = () => {
  router.push('/vue/form');
};

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};
</script>

<style scoped>
.list-page {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.empty-state {
  padding: 40px 0;
}

.virtual-list-container {
  height: 500px;
  overflow-y: auto;
}

.virtual-list {
  position: relative;
}

.virtual-list-item {
  left: 0;
  right: 0;
  padding: 8px 0;
  box-sizing: border-box;
}

.item-card {
  margin: 0 8px;
  height: 100%;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-title {
  font-weight: bold;
  font-size: 16px;
}

.item-time {
  font-size: 12px;
  color: #909399;
}

.item-content {
  color: #606266;
  line-height: 1.6;
}
</style>