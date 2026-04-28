import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { useGlobalStateStore } from './store/globalState';

let app: ReturnType<typeof createApp> | null = null;
let globalProps: Record<string, any> = {};
let pinia: ReturnType<typeof createPinia> | null = null;

function render(props: Record<string, any> = {}) {
  globalProps = props;
  const { container } = props;
  const mountPoint = container
    ? container.querySelector('#app')
    : document.querySelector('#app');

  app = createApp(App);
  pinia = createPinia();
  
  app.use(ElementPlus);
  app.use(router);
  app.use(pinia);
  app.mount(mountPoint as Element);
  
  // 初始化全局状态
  if (props.globalState && pinia) {
    const globalStateStore = useGlobalStateStore();
    globalStateStore.syncFromMaster(props.globalState);
    
    // 设置向主应用发送消息的方法
    if (props.emit) {
      globalStateStore.setSendMessageToMaster(props.emit);
    }
  }
}

renderWithQiankun({
  bootstrap() {
    console.log('[sub-vue-vite] bootstrap');
  },
  mount(props) {
    console.log('[sub-vue-vite] mount', props);
    render(props);
  },
  unmount() {
    console.log('[sub-vue-vite] unmount');
    if (app) {
      app.unmount();
      app = null;
      pinia = null;
    }
  },
  update(props) {
    console.log('[sub-vue-vite] update', props);
    globalProps = props;
    // 从主应用同步状态到 Pinia store
    if (props.globalState && pinia) {
      const globalStateStore = useGlobalStateStore();
      globalStateStore.syncFromMaster(props.globalState);
    }
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
