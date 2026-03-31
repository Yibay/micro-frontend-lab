import './public-path' // ✅ 必须第一行
import { createApp } from 'vue';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import App from './App.vue';

let app: ReturnType<typeof createApp> | null = null;
let mountPoint: Element | null = null;

function resolveMountPoint(props: Record<string, any> = {}) {
  const container = props.container as ParentNode | undefined;
  if (container) {
    let root = container.querySelector('#app');
    if (!root && container instanceof Element) {
      root = document.createElement('div');
      root.id = 'app';
      container.appendChild(root);
    }
    if (root) {
      return root;
    }
  }

  const standaloneRoot = document.querySelector('#app');
  if (!standaloneRoot) {
    throw new Error('[sub-vue-vite] mount point #app not found');
  }
  return standaloneRoot;
}

function render(props: Record<string, any> = {}) {
  mountPoint = resolveMountPoint(props);
  if (app) {
    app.unmount();
  }

  app = createApp(App);
  app.mount(mountPoint);
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
    if (mountPoint) {
      mountPoint.innerHTML = '';
    }
    mountPoint = null;
  },
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
