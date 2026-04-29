import { useModel } from '@umijs/max';
import type { EmitParams, GlobalState } from '@shared/types';
import { DEFAULT_SUBAPP_GLOBAL_STATE } from '@shared/types';

export default function globalModel(): { 
  globalState: GlobalState;
  emit: (params: EmitParams) => void
} {
  const globalStateModel = useModel('@@qiankunStateFromMaster');
  
  const emit = (params: EmitParams) => {
    if (globalStateModel?.emit) {
      globalStateModel.emit({ ...params, sourceApp: 'sub-umi-react' });
    } else {
      console.warn('[globalModel] emit method not available');
    }
  };
  
  return {
    globalState: globalStateModel?.globalState || DEFAULT_SUBAPP_GLOBAL_STATE,
    emit,
  };
}
