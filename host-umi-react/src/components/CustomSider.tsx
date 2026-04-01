import React from 'react';
import { Link } from 'umi';

const CustomSider: React.FC = () => {
  return (
    <div style={{
      width: '200px',
      minHeight: 'calc(100vh - 64px)',
      background: '#fff',
      borderRight: '1px solid #e8e8e8',
      padding: '16px 0',
      zIndex: 1,
      position: 'fixed',
      top: '56px',
      left: '0',
    }}>
      <div style={{ padding: '0 16px 16px', borderBottom: '1px solid #e8e8e8' }}>
        <h2 style={{ margin: 0, fontSize: '14px', color: '#999' }}>
          菜单导航
        </h2>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>
          <Link to="/" style={{
            display: 'block',
            padding: '8px 16px',
            color: '#333',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f2f5';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}>
            首页1
          </Link>
        </li>
        <li>
          <Link to="/SubAppVanilla" style={{
            display: 'block',
            padding: '8px 16px',
            color: '#333',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f2f5';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}>
            原生应用2
          </Link>
        </li>
        <li>
          <Link to="/SubAppVue" style={{
            display: 'block',
            padding: '8px 16px',
            color: '#333',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f2f5';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}>
            Vue 应用
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomSider;