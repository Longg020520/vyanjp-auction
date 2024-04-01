import React from "react";
import "./CategoryItem.scss";
import { useNavigate } from "react-router-dom";
import { Col } from "antd";

interface PT {
  categoryName?: string;
  imgUrlCategory?: string;
  path: string;
}

const CategoryItem: React.FC<PT> = ({
  categoryName,
  imgUrlCategory,
  path,
}) => {
  const navegate = useNavigate();
  const handlePath = (path: string) => {
    navegate(path);
  };
  return (
    <Col
      xs={{ flex: '50%' }}
      sm={{ flex: '50%' }}
      xl={{ flex: '25%' }}
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
