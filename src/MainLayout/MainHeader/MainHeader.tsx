import React from "react";
import "./MainHeader.scss";
import { DingtalkOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Bell, Heart, ShoppingCart } from "react-feather";
// import { Input } from "antd";
// import { Select } from "antd";

const MainHeader = () => {
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };
  return (
    <Row className="main-header-container">
      <Col span={24} className="d-flex top-bar">
        <div className="left">
          <p>Hotline: 0866765101</p>
          {/* <p>Email: </p> */}
        </div>
        <div className="right">
          <p>Đăng ký tư vấn </p>
          <p>Trung tâm hỗ trợ/FAQ</p>
          <p>Đăng nhập</p>
          <p>Đăng ký</p>
        </div>
      </Col>
      <div className="header">
        <Col span={4} className="brand-name d-flex j-center">
          <DingtalkOutlined /> Vyanjp Auction
        </Col>
        <Col span={16} className="header-search">
          <select name="cars" className="select-custom">
            <option value="volvo">Aucnet Auction</option>
            <option value="saab">Starbuyers Auction</option>
            <option value="mercedes">Japan Brand Auction</option>
          </select>
          <input
            type="text"
            className="input-custom"
            autoComplete="off"
            placeholder="Tên sản phẩm bạn muốn tìm..."
            // onChange={(e) => console.log(e.target.value)}
            // onKeyDown={() => console.log("key down")}
          />
          <button className="button-custom">
            <SearchOutlined style={{ color: "#fd7e14" }} />
          </button>
        </Col>
        <Col span={4} className="header-right d-flex">
          <p>
            <Heart color="white" />
          </p>
          <p>
            <ShoppingCart color="white" />
          </p>
          <p>
            <Bell color="white" />
          </p>
          <p>
            <Bell color="white" />
          </p>
        </Col>
      </div>
    </Row>
  );
};

export default React.memo(MainHeader);
