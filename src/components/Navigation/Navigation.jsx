import React from "react";
import { Menu, Row, Col } from "antd";

const items = [

  {
    key: `0`,
    label: `Sign up`,
  },
  {
    key: `1`,
    label: `Sign in`,
  },
  {
    key: `3`,
    label: `Setting`,
  },
  {
    key: `4`,
    label: `New article`,
  },
  {
    key: `2`,
    label: `Sign out`,
  },
];

export const Navigation = () => (
  <Row justify="center">
    <Col span={24} offset={12}>
      <Menu mode="horizontal" defaultSelectedKeys={["0"]} items={items} />
    </Col>
  </Row>
);