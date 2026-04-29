import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import type { EmitParams } from '@shared/types';
import { EmitType, DEFAULT_SUBAPP_GLOBAL_STATE } from '@shared/types';

export const useGlobalStateStore = defineStore('globalState', {
  state: () => ({
    ...DEFAULT_SUBAPP_GLOBAL_STATE,
    _emit: null as ((message: EmitParams) => void) | null,
  }),
  
  actions: {
    setSendMessageToMaster(fn: (message: EmitParams) => void) {
      this._emit = markRaw(fn);
    },
    
    syncFromMaster(updates: any) {
      Object.assign(this, updates);
    },
    
    emit(message: { type: EmitType | string; payload?: any }) {
      if (this._emit) {
        this._emit({
          ...message,
          sourceApp: 'sub-vue-vite' 
        });
      }
    },
    
    updateTheme(theme: string) {
      this.emit({ type: EmitType.updateTheme, payload: { theme } });
    },
    
    updateUser(user: { name: string; role: string }) {
      this.emit({ type: EmitType.updateUser, payload: { user } });
    },
    
    sendNotification(content: string) {
      this.emit({ type: EmitType.notification, payload: { content } }); 
    },
  },
  
  getters: {
    userName: (state) => state.user.name,
    userRole: (state) => state.user.role,
    currentTheme: (state) => state.settings.theme,
  },
});
