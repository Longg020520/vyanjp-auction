import React from "react";
import "./ContentCategory.scss";
import { Col, Row } from "antd";
import { LIST_BRAND, LIST_CATEGORY_AUCNET } from "../../../constants";
import CategoryItem from "../../../Components/CategoryItem/CategoryItem";

const ContentCategory = () => {
  return (
    <Col span={18} className="content-category-container">
      <div className="banner"></div>
      <h2>Danh mục phổ biến</h2>
      <Row>
        {LIST_CATEGORY_AUCNET.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              path={item.path}
              categoryName={item.name}
              imgUrlCategory={item.imgUrl}
            />
          );
        })}
      </Row>
      <h2>Thương hiệu nổi bật</h2>
      <Row>
        {LIST_BRAND.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              path={item.path}
              categoryName={item.name}
              imgUrlCategory={item.imgUrl}
            />
          );
        })}
      </Row>
    </Col>
  );
};

export default React.memo(ContentCategory);
