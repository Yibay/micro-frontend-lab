import { Link } from '@umijs/max';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 16,
  marginTop: 12
};

export default function HomePage() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Umi4 + qiankun 微前端 Demo</h1>
      <p>主应用：React（Umi4）</p>
      <div style={cardStyle}>
        <h3>子应用 1：Vue + Vite</h3>
        <Link to="/vue">进入 /vue</Link>
      </div>
      <div style={cardStyle}>
        <h3>子应用 2：原生 JS + HTML</h3>
        <Link to="/vanilla">进入 /vanilla</Link>
      </div>
    </div>
  );
}
