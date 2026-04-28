// 全局状态类型定义
export interface GlobalState {
  user: {
    name: string;
    avatar: string;
    user_id: string;
    role: string;
  };
  settings: {
    theme: string;
    fontSize: number;
  };
  token: string;
}

// 事件类型枚举
export enum EmitType {
  login = 'login',
  logout = 'logout',
  updateTheme = 'updateTheme',
  updateUser = 'updateUser',
  notification = 'notification',
  adminClicked = 'admin-clicked',
}

// 事件参数类型
export interface EmitParams {
  type: EmitType | string;
  payload?: any;
  sourceApp?: string;
}

// 默认全局状态
export const DEFAULT_GLOBAL_STATE: GlobalState = {
  user: {
    name: 'Admin',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    user_id: '10086',
    role: '',
  },
  settings: {
    theme: 'light',
    fontSize: 14,
  },
  token: '',
};

// 子应用默认全局状态（简化版）
export const DEFAULT_SUBAPP_GLOBAL_STATE: GlobalState = {
  user: {
    name: '',
    avatar: '',
    user_id: '',
    role: '',
  },
  settings: {
    theme: 'light',
    fontSize: 14,
  },
  token: '',
};
