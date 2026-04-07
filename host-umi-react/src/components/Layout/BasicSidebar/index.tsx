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
      <NavLink to="/sub-umi-react/Home" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        umi子应用-Home
      </NavLink>
      <NavLink to="/sub-umi-react/Access" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        umi子应用-Access
      </NavLink>
      <NavLink to="/sub-umi-react/Table" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}> 
        umi子应用-Table
      </NavLink>
      <NavLink to="/react/home" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
        React Vite子应用-首页
      </NavLink>
      <NavLink to="/react/about" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
        React Vite子应用-关于
      </NavLink>
      <NavLink to="/vanilla" className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
        原生子应用
      </NavLink>
    </div>
  );
};