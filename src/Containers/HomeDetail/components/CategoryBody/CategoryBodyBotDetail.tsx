import React from "react";
import "./CategoryBody.scss";
import { useNavigate } from "react-router-dom";

interface PT {
  categoryName?: string;
  imgUrlCategory?: string;
  path: string;
}

const CategoryBodyTopDetail: React.FC<PT> = ({
  categoryName,
  imgUrlCategory,
  path,
}) => {
  const navegate = useNavigate();
  const handlePath = (path: string) => {
    navegate(path);
  };
  return (
    <div className="category-body-bot" onClick={() => handlePath(path)}>
      <img
        src={imgUrlCategory}
        alt={categoryName}
        style={{ width: 140, height: 140 }}
      />
      <p className="categoryName">{categoryName}</p>
    </div>
  );
};

export default React.memo(CategoryBodyTopDetail);
