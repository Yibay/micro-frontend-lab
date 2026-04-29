import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';
import { EmitType } from '@shared/types';

const AccessPage: React.FC = () => {
  const access = useAccess();
  const { globalState, emit: masterAppEmit } = useModel('global');
  
  console.log('globalState', globalState);

  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button onClick={() => masterAppEmit({ type: EmitType.login })}>
          只有 Admin 可以看到这个按钮
        </Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
