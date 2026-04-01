import React from 'react';
import { Button } from 'antd';

const CustomHeader: React.FC = () => {
  return (
    <div style={{
      height: '56px',
      background: '#fff',
      borderBottom: '1px solid #e8e8e8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)'
    }}>
      <h1 style={{ margin: 0, fontSize: '18px', color: '#1890ff' }}>
        自定义头部
      </h1>
      <div style={{ marginLeft: 'auto' }}>
        <span style={{ marginRight: '16px' }}>欢迎使用</span>
        <Button style={{
          padding: '4px 16px',
          background: '#1890ff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default CustomHeader;