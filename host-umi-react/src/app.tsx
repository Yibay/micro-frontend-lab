// 运行时配置
import CustomHeader from './components/CustomHeader';
import CustomSider from './components/CustomSider';

// 全局初始化状态，可以在这里获取用户信息
export async function getInitialState() {
  return {
    name: 'Admin',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}

// 可以在这里通过 qiankun 参数向子应用传递数据
export const useQiankunStateForSlave = () => {
  return {
    globalToken: 'your-token-here',
  };
};

// 配置 layout
// ✅ 正确的 layout 运行时配置（必须是函数）
export function layout() {
  return {
    // 🔴 必须加：指定布局类型，否则自定义渲染不生效
    layout: 'mix',
    // ✅ 正确字段：自定义顶部导航栏
    headerRender: () => <CustomHeader />,
    // ✅ 正确字段：自定义侧边栏菜单
    // menuRender: () => <CustomSider />,
    // 其他可选配置（按需加）
    title: '微前端管理平台',
    locale: true,
  };
}
