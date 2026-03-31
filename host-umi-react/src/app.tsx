// 运行时配置

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