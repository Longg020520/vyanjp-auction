import React from "react";
import "./CategoryBody.scss";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

interface PT {
  brandName?: string;
  imgUrlBrand?: string;
  path: string;
  content?: string;
  color?: string;
}

const CategoryBodyTopDetail: React.FC<PT> = ({
  brandName,
  imgUrlBrand,
  path,
  content,
  color,
}) => {
  const navegate = useNavigate();
  const handlePath = (path: string) => {
    navegate(path);
  };
  return (
    <div className="category-body-top">
      <div className="title-container">
        <img src={imgUrlBrand} alt={brandName} />
        <strong className="brand-name">{brandName}</strong>
        <p className="read-all" onClick={() => handlePath(path)}>
          Xem tất cả{" "}
          <ArrowRightOutlined style={{ color: "#fd7e14", fontSize: "12px" }} />
        </p>
      </div>
      <p className="content">{content}</p>

      <hr className="category-hr" style={{ background: color }} />
    </div>
  );
};

export default React.memo(CategoryBodyTopDetail);
