import React from "react";
import { Layout } from "antd";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { MainHeader } from "../../components/MainHeader/MainHeader";

import { MainLayoutStyled } from "./Main.styles";

export const Main = () => (
  <MainLayoutStyled>
    <Sidebar />
    <Layout>
      <MainHeader />
      <ContentContainer />
    </Layout>
  </MainLayoutStyled>
);
