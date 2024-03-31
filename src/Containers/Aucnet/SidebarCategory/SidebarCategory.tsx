import React, { useState } from "react";
import "./SidebarCategory.scss";
import { Col } from "antd";
import DropdownListCategory from "../../../Components/DropdownListCategory/DropdownListCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { categoryType } from "../services/Aucnet.type";



const SidebarCategory = () => {
  const listCategory = useSelector<RootState, categoryType[] | null>(
    (state) => state.categoryAucnet.listCategory
  );

  const [isOpen, setIsOpen] = useState(null);

  const handleDropdownClick = (dropdownName: any) => {
    setIsOpen((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <Col span={6} className="sidebar-category-container">
      <h3>Danh mục</h3>
      {listCategory &&
        listCategory.map((item, index) => {
          return (
            <DropdownListCategory
              key={index}
              categoryName={item.genreName}
              isOpen={isOpen === item.genre}
              setIsOpen={() => handleDropdownClick(item.genre)}
              children={item.maker}
            />
          );
        })}
    </Col>
  );
};

export default React.memo(SidebarCategory);
