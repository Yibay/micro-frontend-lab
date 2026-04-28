import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import type { EmitParams } from '@shared/types';
import router from './router'
import { useGlobalStateStore } from './store/globalState'

// 检测是否在 Wujie 环境中运行
const isWujie = !!window.__WUJIE__;

// 渲染函数
function render() {
  console.log('Sub React Vite app mounted with props:', window.$wujie?.props);
  
  // 接收主应用传递的 props
  
  // 同步到 zustand store
  const { syncFromMaster } = useGlobalStateStore.getState();
  syncFromMaster({
    globalState: window.$wujie?.props?.globalState,
    emit: (params: EmitParams): void => {
      // 发送消息到主应用
      window.$wujie?.props?.emit?.(params);
      // 发送消息到主应用
      // window.$wujie?.bus.$emit('message', params);
    },
  });
  
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
  
  // 注册事件监听器，接收主应用消息
  // if (isWujie) {
  //   window.$wujie?.bus.on('message', (data: any) => {
  //     console.log('子应用收到主应用消息:', data);
  //     if (data.type === 'updateSubState') {
  //       console.log('更新子应用状态:', data.payload);
  //     }
  //   });
  // }
}

// 向主应用发送消息
window.sendToMaster = (message: any) => {
  if (isWujie && window.$wujie?.bus) {
    window.$wujie.bus.$emit('message', message);
  }
};

if (isWujie) {
  // 在 Wujie 环境中，注册生命周期
  window.__WUJIE_MOUNT__ = render;
  window.__WUJIE_UNMOUNT__ = () => {
    console.log('Sub React Vite app unmounted');
    // 清理资源
  };
  window.__WUJIE_UPDATE__ = () => {
    console.log('Sub React Vite app updated');
    render();
  };
} else {
  // 独立运行
  render();
}
