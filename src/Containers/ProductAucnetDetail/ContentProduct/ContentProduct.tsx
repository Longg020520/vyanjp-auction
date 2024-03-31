import React from "react";
import "./ContentProduct.scss";
import { Col } from "antd";
import { ProductDetailType } from "../../../Types";

interface PT {
  data: ProductDetailType;
}

const listField = [
  {
    title: "Corner",
    key: "corner",
  },
  {
    title: "seriEndHm",
    key: "seriEndHm",
  },
  {
    title: "Auction number",
    key: "kaisaiKaisu",
  },
  {
    title: "Auction date",
    key: "kaisaiYmd",
  },

  {
    title: "Receipt No.",
    key: "uketsukeBng",
  },
  {
    title: "No.",
    key: "seriBng",
  },
  {
    title: "Handling",
    key: "handling",
  },
  {
    title: "Item",
    key: "shohin",
  },
  {
    title: "Maker",
    key: "maker",
  },
  {
    title: "Line/Type",
    key: "brandType",
  },
];

const ContentProduct: React.FC<PT> = ({ data }) => {
  return (
    <Col span={12} className="content-product-container">
      <div className="field-product d-flex">
        <p style={{ marginRight: "10%", width: "20%" }}>Start Price:</p>
        <p className="text-bold">{data.startKng} yen</p>
      </div>

      <div className="field-product d-flex">
        <p style={{ marginRight: "10%", width: "20%" }}>Current Price:</p>
        <p className="text-bold">{data.genzaiKng} yen</p>
      </div>

      {listField.map((item, index) => {
        return (
          <div key={index} className="field-product d-flex">
            <p style={{ marginRight: "10%", width: "20%" }}>{item.title}:</p>
            <p>{data[`${item.key}`]}</p>
          </div>
        );
      })}
      {data.bikoList.map((item, index) => {
        if (item === "" || item === null) return null;
        return (
          <div key={index} className="field-product d-flex">
            <p style={{ marginRight: "10%", width: "20%" }}>
              {index === 0 ? "Special remarks:" : ""}
            </p>
            <p>{item}</p>
          </div>
        );
      })}
    </Col>
  );
};

export default React.memo(ContentProduct);
