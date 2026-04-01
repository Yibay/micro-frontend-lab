import React from 'react';
import { Link } from '@umijs/max';
import styles from './index.module.less';

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <h1>Umi4 + qiankun 微前端 Demo</h1>
      <p>主应用：React（Umi4）</p>
      <div className={styles.card}>
        <h3>子应用 1：Vue + Vite</h3>
        <Link to="/vue">进入 /vue</Link>
      </div>
      <div className={styles.card}>
        <h3>子应用 2：原生 JS + HTML</h3>
        <Link to="/vanilla">进入 /vanilla</Link>
      </div>
    </div>
  );
}
