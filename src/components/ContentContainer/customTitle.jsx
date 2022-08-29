import { Typography } from "antd";
import React from "react";

export const CustomTitle = ({ level, children, render }) => {
  return (
    <Typography.Title level={level}>
      {children}
      {render()}
    </Typography.Title>
  );
};
