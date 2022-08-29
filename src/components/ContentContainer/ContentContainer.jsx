import React from "react";
import { Layout } from "antd";
import { FeedList } from "./FeedList/FeedList";
import { ContentStyled, ContentPanelStyled } from "./ContentContainer.styles";


export const ContentContainer = () => {
  return (
    <Layout>
      <ContentStyled>
        <ContentPanelStyled>
          <FeedList />
        </ContentPanelStyled>
      </ContentStyled>
    </Layout>
  );
};
