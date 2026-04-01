import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.left}>
        微前端管理平台
      </h1>
      <div className={styles.right}>
        <div className={styles.avatar}>
          <div className={styles.avatarImage}>
            <img 
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" 
              alt="avatar" 
              style={{ width: 32, height: 32, borderRadius: '50%' }}
            />
          </div>
          <span className={styles.name}>Admin</span>
        </div>
      </div>
    </div>
  );
};