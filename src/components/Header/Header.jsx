import React from 'react';
import { Space } from 'antd';
import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';

export const Header = () => (
  <Space
    style={{ width: '100%', justifyContent: 'space-between' }}
    direction="horizontal"
  >
    <Logo />
    <Navigation />
  </Space>
);
