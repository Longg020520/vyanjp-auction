import React from "react";
import "./CategoryItem.scss";
import { useNavigate } from "react-router-dom";
import { Col } from "antd";

interface PT {
  categoryName?: string;
  imgUrlCategory?: string;
  path: string;
  spanNumber?: number;
}

const CategoryItem: React.FC<PT> = ({
  categoryName,
  imgUrlCategory,
  path,
  spanNumber,
}) => {
  const navegate = useNavigate();
  const handlePath = (path: string) => {
    navegate(path);
  };
  return (
    <Col
      span={spanNumber}
      className="category-item-container"
      onClick={() => handlePath(path)}
    >
      <img
        src={imgUrlCategory}
        alt={categoryName}
      />
      <p className="categoryName">{categoryName}</p>
    </Col>
  );
};

export default React.memo(CategoryItem);
