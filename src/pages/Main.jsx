import React from "react";
import { Layout } from "antd";
import { ContentContainer } from "../components/ContentContainer/ContentContainer";
import { Navigation } from "../components/Navigation/Navigation";
import { Sidebar } from "../components/Sidebar/Sidebar";

const { Header } = Layout;



export const Main = () => {
  return (
    <Layout style={{ height: `100%` }}>
     <Sidebar />
      <Layout>
        <Header style={{ backgroundColor: `#fff` }}>
          <Navigation />
        </Header>

        <ContentContainer />
      </Layout>
    </Layout>
  );
};
