import React from "react";
import { Menu, Layout } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  GlobalOutlined,
  NumberOutlined,
} from "@ant-design/icons";

import { Logo } from "../Logo/Logo";

const { Sider } = Layout;

const items = [
  {
    key: `0`,
    icon: <GlobalOutlined />,
    label: `Global`,
  },
  {
    key: `1`,
    icon: <HeartOutlined />,
    label: `Favorite`,
  },
  {
    key: `2`,
    icon: <UserOutlined />,
    label: `My articles`,
  },
  {
    key: `4`,
    icon: <NumberOutlined />,
    label: `Imitry Divanov`,
  },
  {
    key: `5`,
    icon: <NumberOutlined />,
    label: `Live`,
  },
];

export const Sidebar = () => (
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <Logo />

    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["0"]}
      items={items}
    />
  </Sider>
);
