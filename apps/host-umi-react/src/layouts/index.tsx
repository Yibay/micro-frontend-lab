import { Outlet, useLocation } from '@umijs/max';
import { Layout } from 'antd';
import BasicHeader from '@/components/Layout/BasicHeader';
import UserHeader from '@/components/Layout/UserHeader';
import BasicSidebar from '@/components/Layout/BasicSidebar';
import styles from './layout.module.less';

const { Header, Content, Sider } = Layout;

export default function GlobalLayout() {
  const location = useLocation();
  const path = location.pathname;

  // 登录页 → 无任何布局
  if (path === '/login') {
    return <Outlet />;
  }

  // 用户页 → 头部B + 侧边栏B
  if (path === '/user') {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <UserHeader />
        </Header>
        <Layout className={styles.contentLayout}>
          <Sider className={styles.sidebar} theme="light">
            <BasicSidebar />
          </Sider>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }

  // 默认
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <BasicHeader />
      </Header>
      <Layout className={styles.contentLayout}> 
        <Sider className={styles.sidebar} theme="light">
          <BasicSidebar />
        </Sider>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}