import React from "react";
import { Layout } from "antd";
import { FeedList } from "./FeedList";

const { Content } = Layout;

export const ContentContainer = () => {
  return (
    <Layout>
      <Content style={{ margin: "48px 16px 0" }}>
        <div style={{ backgroundColor: `#fff`, padding: 48, height: `100%` }}>
          <FeedList />
        </div>
      </Content>
    </Layout>
  );
};
