import React from "react";
import "./CategoryHeader.scss";
import {
  LIST_CATEGORY_AUCNET,
  LIST_CATEGORY_STARBUYER,
  LIST_MARKET,
} from "../../../../constants";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const CategoryHeader = () => {
  const [market, setMarket] = React.useState<"AA" | "SA" | "JBA">("AA");
  const [listCategory, setListCategory] =
    React.useState<{ name: string; path: string }[]>(LIST_CATEGORY_AUCNET);

  const navigate = useNavigate();

  const handleMarketChange = (index: number) => {
    if (index === 0) {
      setMarket("AA");
      setListCategory(LIST_CATEGORY_AUCNET);
    }
    if (index === 1) {
      setMarket("SA");
      setListCategory(LIST_CATEGORY_STARBUYER);
    }
    if (index === 2) {
      setMarket("JBA");
      setListCategory(LIST_CATEGORY_STARBUYER);
    }
  };

  const handleNavigateChange = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <div className="top-category">
        <div className="top-category-left">
          <MenuOutlined style={{ marginRight: "10px" }} />
          Tất cả danh mục
        </div>
        <div className="top-category-right">
          
        </div>
      </div>
      <div className="bot-category">
        <div className="list-market">
          <div className="head">Japan market</div>
          {LIST_MARKET.map((item, index) => {
            return (
              <div
                className="list-market-item"
                key={index}
                onClick={() => handleMarketChange(index)}
              >
                <img src={item.imgUrl} alt="logo" />
                <div
                  className={`list-market-item-text ${
                    index === 0 && market === "AA"
                      ? "active"
                      : index === 1 && market === "SA"
                      ? "active"
                      : index === 2 && market === "JBA"
                      ? "active"
                      : "inactive"
                  }`}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="list-category">
          <div className="category-tittle">Danh sách danh mục</div>
          <Row gutter={16}>
            {listCategory.map((item, index) => {
              return (
                <Col
                  span={8}
                  className="category-name"
                  key={index}
                  onClick={() => handleNavigateChange(item.path)}
                >
                  {item.name}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryHeader);
