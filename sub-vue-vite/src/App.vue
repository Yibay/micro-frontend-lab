<template>
  <div class="app">
    <h2>Vue 子应用（Vite）</h2>
    <p>这个应用可以独立运行，也可以被 qiankun 主应用加载。</p>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
      <el-menu-item index="/contact">联系我们</el-menu-item>
    </el-menu>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeIndex = ref('/');

const handleSelect = (key: string) => {
  activeIndex.value = key;
  router.push(key);
};

onMounted(() => {
  activeIndex.value = route.path;
});

watch(() => route.path, (newPath) => {
  activeIndex.value = newPath;
});
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  border: 1px solid #5b8ff9;
  border-radius: 8px;
  padding: 16px;
  background: #f5f8ff;
}

.el-menu-demo {
  margin: 20px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
