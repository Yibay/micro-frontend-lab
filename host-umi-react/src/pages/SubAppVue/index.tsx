import { history } from '@umijs/max';

function getTitle(pathname: string) {
  if (pathname.startsWith('/vue')) return 'Vue 子应用';
  if (pathname.startsWith('/vanilla')) return '原生 JS 子应用';
  return '子应用';
}

export default function SubAppPage() {
  const pathname = history.location.pathname;
  return (
    <div style={{ padding: 16, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => history.push('/')} style={{ marginRight: 8 }}>
          返回首页
        </button>
        <button onClick={() => history.push('/vue')} style={{ marginRight: 8 }}>
          打开 Vue 子应用
        </button>
        <button onClick={() => history.push('/vanilla')}>打开原生子应用</button>
      </div>
      <h2>{getTitle(pathname)}</h2>
      <div
        id="subappvue-container"
        style={{
          border: '1px dashed #999',
          minHeight: 380,
          padding: 12,
          borderRadius: 8
        }}
      />
    </div>
  );
}
