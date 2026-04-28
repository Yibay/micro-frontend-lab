import React, { useCallback, useEffect } from 'react';
import WujieReact from 'wujie-react';
import { useLocation, useModel } from '@umijs/max';
import { useCreation } from 'ahooks';
import type { EmitParams } from '@shared/types';
import { EmitType } from '@shared/types';
import hostMap from '../../../config/wujie.config';
import styles from './index.less';

const ReactViteWujie: React.FC = () => {
  const location = useLocation();
  const url = `${hostMap.subReactVite}${location.pathname}`;

  const { bus } = WujieReact;
  
  // 参考 app.tsx 的数据结构
  const { initialState } = useModel('@@initialState');
  const { userInfo: user } = useModel('user');
  const { settingsInfo: settings } = useModel('settings');
  
  // 定义 actions
  const actions = {
    login: () => {
      console.log('主应用---login');
    },
    logout: () => {
      console.log('主应用---logout');
    },
  };
  
  // 接收子应用消息
  const emit = useCallback((params: EmitParams) => {
    console.log('主应用收到wujie子应用消息:', params);
    switch (params.type) {
      case EmitType.login:
        break;
      case EmitType.logout:
        break;
      default:
    }
  }, []);

  const wujieProps = useCreation(() => ({
    globalState: {
      user,
      settings,
      token: initialState?.token || '',
    },
    emit,
  }), [user, settings, initialState, emit]);

  useEffect(() => {
    // 组件加载就监听
    bus.$on('message', emit);
    
    return () => {
      // 组件销毁就取消
      bus.$off('message', emit);
    };
  }, [bus, emit]); // 注意这里的依赖项

  return (
    <div className={styles.container}>
      <div className={styles.masterControls}>
        <h3>主应用控制区</h3>
        <p>当前主题: {settings?.theme || 'light'}</p>
        <p>当前用户: {user?.name || 'Admin'}</p>
      </div>
      <WujieReact
        width="100%"
        height="80vh"
        name="sub-react-vite"
        url={url}
        sync={false}
        props={wujieProps}
      />
    </div>
  );
};

export default ReactViteWujie;
