import React from 'react';
import WujieReact from 'wujie-react';
import { useLocation } from '@umijs/max';
import hostMap from '../../../config/wujie.config';
import styles from './index.less';

const ReactViteWujie: React.FC = () => {
  const location = useLocation();
  const url = `${hostMap.subReactVite}${location.pathname}`;

  return (
    <div className={styles.container}>
      <WujieReact
        width="100%"
        height="100%"
        name="sub-react-vite"
        url={url}
        sync={false}
      />
    </div>
  );
};

export default ReactViteWujie;
