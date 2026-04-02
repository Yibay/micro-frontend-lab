import { NavLink } from '@umijs/max';
import classNames from 'classnames';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/vue/home" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        Vue子应用
      </NavLink>
      <NavLink to="/vue/about" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        Vue子应用-关于我们
      </NavLink>
      <NavLink to="/vue/contact" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        Vue子应用-联系我们
      </NavLink>
      <NavLink to="/vanilla" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
        原生子应用
      </NavLink>
    </div>
  );
};