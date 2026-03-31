import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'sub-vue-vite',
    entry: '//localhost:7101',
    container: '#subappvue-container',
    activeRule: '/vue'
  },
  {
    name: 'sub-vanilla',
    entry: '//localhost:7102',
    container: '#subappvanilla-container',
    activeRule: '/vanilla'
  }
]);

let started = false;

export function render(oldRender: () => void) {
  if (!started) {
    start({
      sandbox: { strictStyleIsolation: false }
    });
    started = true;
  }
  oldRender();
}
