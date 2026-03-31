import './public-path' // ✅ 必须第一行
import { createApp } from 'vue';
import App from './App.vue';

let app: ReturnType<typeof createApp> | null = null;

function render(props: Record<string, any> = {}) {
  const { container } = props;
  const mountPoint = container
    ? container.querySelector('#app')
    : document.querySelector('#app');

  app = createApp(App);
  app.mount(mountPoint as Element);
}

export async function bootstrap() {
  console.log('[sub-vue-vite] bootstrap');
}

export async function mount(props: Record<string, any>) {
  console.log('[sub-vue-vite] mount', props);
  render(props);
}

export async function unmount() {
  console.log('[sub-vue-vite] unmount');
  if (app) {
    app.unmount();
    app = null;
  }
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}
