import React from "react";
import "./CategoryBody.scss";
import {
  LIST_CATEGORY_AUCNET,
  LIST_CATEGORY_STARBUYER,
  LIST_MARKET,
} from "../../../../constants";
import CategoryBodyTopDetail from "./CategoryBodyTopDetail";
import CategoryBodyBotDetail from "./CategoryBodyBotDetail";
import { Col, Row } from "antd";

const CategoryBody = () => {
  return (
    <div className="category-body-container">
      {LIST_MARKET.map((o, index) => {
        const data =
          index === 0 ? LIST_CATEGORY_AUCNET : LIST_CATEGORY_STARBUYER;
        return (
          <div style={{ marginBottom: "30px" }}>
            <CategoryBodyTopDetail
              key={index}
              brandName={o.name}
              color={o.color}
              content={o.content}
              path={o.path}
              imgUrlBrand={o.imgUrl}
            />
            <Row>
              {data.map((item, i) => {
                return (
                  <Col span={6} key={i}>
                    <CategoryBodyBotDetail
                      key={i}
                      path={item.path}
                      categoryName={item.name}
                      imgUrlCategory={item.imgUrl}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(CategoryBody);
