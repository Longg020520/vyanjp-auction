import React from "react";
import "./Aucnet.scss";
import { Row } from "antd";
import SidebarCategory from "./SidebarCategory/SidebarCategory";
import ContentCategory from "./ContentCategory/ContentCategory";
import useGetCategoryAucnet from "./hooks/useGetCategoryAucnet";

const Aucnet = () => {
  useGetCategoryAucnet();

  return (
    <Row className="Aucnet-container">
      <SidebarCategory />
      <ContentCategory />
    </Row>
  );
};

export default React.memo(Aucnet);
