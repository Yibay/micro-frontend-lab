import './public-path' // ✅ 必须第一行
import { createApp } from 'vue';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';

let app: ReturnType<typeof createApp> | null = null;

function render(props: Record<string, any> = {}) {
  const { container } = props;
  const mountPoint = container
    ? container.querySelector('#app')
    : document.querySelector('#app');

  app = createApp(App);
  app.use(ElementPlus);
  app.use(router);
  app.mount(mountPoint as Element);
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
    }
  },
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
