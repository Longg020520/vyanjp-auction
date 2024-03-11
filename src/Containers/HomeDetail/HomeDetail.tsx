import React from "react";
import "./HomeDetail.scss";
import CategoryHeader from "./components/CategoryHeader/CategoryHeader";
import VyanInfor from "./components/VyanInfor/VyanInfor";
import CategoryBody from "./components/CategoryBody/CategoryBody";
// import { Input } from "antd";
// import { Select } from "antd";

const HomeDetail = () => {
  return (
    <div className="home-detail-container">
      <CategoryHeader />
      <VyanInfor />
      <CategoryBody />
    </div>
  );
};

export default React.memo(HomeDetail);
