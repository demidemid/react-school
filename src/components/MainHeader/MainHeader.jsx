import React from "react";
import { HeaderStyled, HeaderMenuStyled } from "./MainHeader.styles";

export const MainHeader = () => {
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

  return (
    <HeaderStyled>
      <HeaderMenuStyled
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={items}
      />
    </HeaderStyled>
  );
};
