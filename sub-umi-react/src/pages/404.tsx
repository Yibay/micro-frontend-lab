import { PageContainer } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { history } from '@umijs/max';

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Result
          status="404"
          title="404"
          subTitle="抱歉，您访问的页面不存在"
          extra={
            <Button type="primary" onClick={() => history.push('/')}>
              返回首页
            </Button>
          }
        />
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
