import { EmitType } from '@shared/types';
import { useGlobalStateStore } from '../store/globalState';

export default function Home() {
  const { emit } = useGlobalStateStore();

  const handleClick = () => {
    emit?.({ type: EmitType.login, payload: { message: 'Hello from sub-react-vite' } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React 子应用 - 首页</h1>
      <p>这是一个基于 Vite + React 的 wujie 子应用</p>
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px' }}>
        发送消息
      </button>
    </div>
  )
}
