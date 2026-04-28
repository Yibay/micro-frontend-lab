import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { globalState } = useModel('global');
  const { user } = globalState || {};
  console.log('globalState---', globalState);;
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(user?.name || 'Admin')} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
