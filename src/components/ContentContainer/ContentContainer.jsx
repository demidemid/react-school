import React from "react";
import { Layout } from "antd";
import { FeedList } from "./FeedList/FeedList";
import { ContentStyled, ContentPanelStyled } from "./ContentContainer.styles";

// import { StarOutlined } from "@ant-design/icons";
// import { CustomTitle } from "./customTitle";

export const ContentContainer = () => {
  return (
    <Layout>
      <ContentStyled>
        <ContentPanelStyled>
          <FeedList />
          
           {/* render props example */}
         {/* <CustomTitle level={2} render={() => <StarOutlined />}>
            Кастомный заголовок
          </CustomTitle> */}
        </ContentPanelStyled>
      </ContentStyled>
    </Layout>
  );
};
