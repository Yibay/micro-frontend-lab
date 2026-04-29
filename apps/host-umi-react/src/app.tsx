import { useModel } from '@umijs/max';
import type { EmitParams } from '@shared/types';
import { EmitType, DEFAULT_GLOBAL_STATE } from '@shared/types';

// 全局初始化状态，可以在这里获取用户信息
export async function getInitialState() {
  return DEFAULT_GLOBAL_STATE;
}

export const useQiankunStateForSlave = () => {
  const { initialState } = useModel('@@initialState');
  // 使用专门的 user 和 settings model
  const { userInfo } = useModel('user');
  const { settingsInfo } = useModel('settings');
  
  return {
    globalState: {
      user: userInfo,
      settings: settingsInfo,
      token: initialState?.token || '',
    },
    actions: {
      login: () => {
        console.log('主应用---login');
      },
      logout: () => {
        console.log('主应用---logout');
      },
    },
    emit: (params: EmitParams) => {
      console.log('主应用收到qiankun子应用消息:', params);
      switch (params.type) {
        case EmitType.login:
          break;
        case EmitType.logout:
          break;
        default:
      }
    },
  };
};
