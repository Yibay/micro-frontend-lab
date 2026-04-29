import { useModel } from '@umijs/max';

export default function SettingsModel() {
  const { initialState } = useModel('@@initialState');
  // const [settingsInfo, setSettingsInfo] = useState<any>(initialState?.settings || {});

  // const fetchSettingsInfo = useCallback(async (): Promise<void> => {
  //   // 后续在这里获取详细的设置信息
  //   setSettingsInfo(initialState.settings || {});
  // }, [initialState?.settings]);

  return {
    settingsInfo: initialState?.settings || {},
    // fetchSettingsInfo,
  };
}