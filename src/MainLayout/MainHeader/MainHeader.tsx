import React from "react";
import "./MainHeader.scss";
import { DingtalkOutlined, SearchOutlined } from "@ant-design/icons";
// import { Input } from "antd";
// import { Select } from "antd";

const MainHeader = () => {
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };
  return (
    <div className="main-header-container">
      <div className="header">
        <div className="brand-name">
          {" "}
          <DingtalkOutlined /> Vyanjp Auction
        </div>
        <div className="header-search">
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
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainHeader);
