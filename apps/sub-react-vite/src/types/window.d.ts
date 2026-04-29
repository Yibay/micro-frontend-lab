interface WujieProps {
  globalState?: any;
  emit?: (params: any) => void;
}

interface WujieBus {
  $emit: (eventName: string, data: any) => void;
  on: (eventName: string, callback: (data: any) => void) => void;
}

interface WujieInstance {
  props?: WujieProps;
  bus?: WujieBus;
}

interface Window {
  __WUJIE__?: boolean;
  __WUJIE_MOUNT__?: () => void;
  __WUJIE_UNMOUNT__?: () => void;
  __WUJIE_UPDATE__?: () => void;
  $wujie?: WujieInstance;
  sendToMaster?: (message: any) => void;
}
