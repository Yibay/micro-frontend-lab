import { create } from 'zustand';
import type { EmitParams, GlobalState } from '@shared/types';
import { EmitType, DEFAULT_SUBAPP_GLOBAL_STATE } from '@shared/types';

interface GlobalStateStore {
  // 全局状态
  globalState: GlobalState;
  // 发送消息的方法
  emit: ((params: EmitParams) => void) | null;
  // 同步从主应用获取的状态
  syncFromMaster: (updates: any) => void;
  // 发送消息到主应用
  sendMessage: (message: { type: EmitType | string; payload?: any }) => void;
  // 更新主题
  updateTheme: (theme: string) => void;
  // 更新用户信息
  updateUser: (user: { name: string; role: string }) => void;
  // 发送通知
  sendNotification: (content: string) => void;
}

export const useGlobalStateStore = create<GlobalStateStore>((set, get) => ({
  // 初始化状态
  globalState: DEFAULT_SUBAPP_GLOBAL_STATE,
  _emit: null,
  
  // 同步从主应用获取的状态
  syncFromMaster: (updates: any) => {
    set((state) => ({
      globalState: {
        ...state.globalState,
        ...updates.globalState,
      },
      _emit: updates.emit || state._emit,
    }));
  },
  
  // 发送消息到主应用
  emit: (message: { type: EmitType | string; payload?: any }) => {
    const { _emit } = get();
    if (_emit) {
      _emit({
        ...message,
        sourceApp: 'sub-react-vite',
      });
    }
  },
  
  // 更新主题
  updateTheme: (theme: string) => {
    get().emit({ type: EmitType.updateTheme, payload: { theme } });
  },
  
  // 更新用户信息
  updateUser: (user: { name: string; role: string }) => {
    get().emit({ type: EmitType.updateUser, payload: { user } });
  },
  
  // 发送通知
  sendNotification: (content: string) => {
    get().emit({ type: EmitType.notification, payload: { content } });
  },
}));