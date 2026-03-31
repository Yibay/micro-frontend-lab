import './public-path';

function createTemplate() {
  return `
    <div style="font-family: Arial, sans-serif; border:1px solid #52c41a; border-radius:8px; padding:16px; background:#f6ffed;">
      <h2>原生 JS + HTML 子应用</h2>
      <p>支持独立运行，也支持 qiankun 挂载。</p>
      <button id="hello-btn">点击我</button>
      <p id="message" style="margin-top: 8px; color:#333;"></p>
    </div>
  `;
}

function bindEvents(root) {
  const btn = root.querySelector('#hello-btn');
  const message = root.querySelector('#message');
  if (btn && message) {
    btn.addEventListener('click', () => {
      message.textContent = 'Hello from vanilla sub app!';
    });
  }
}

function render(props = {}) {
  const container = props.container
    ? props.container.querySelector('#app')
    : document.querySelector('#app');
  if (!container) return;
  container.innerHTML = createTemplate();
  bindEvents(container);
}

export async function bootstrap() {
  console.log('[sub-vanilla] bootstrap');
}

export async function mount(props) {
  console.log('[sub-vanilla] mount', props);
  render(props);
}

export async function unmount(props) {
  const container = props.container
    ? props.container.querySelector('#app')
    : document.querySelector('#app');
  if (container) {
    container.innerHTML = '';
  }
  console.log('[sub-vanilla] unmount');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
