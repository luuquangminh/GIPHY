import React from "react";
import { Spin } from "antd";
import "./style.scss";
const SpinLoading = () => {
  return (
    <div className="sweet-loading ">
      <Spin tip="Loading..." size="large" />
    </div>
  );
};
export default SpinLoading;
