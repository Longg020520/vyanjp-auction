import React, { useState } from 'react';
import './SidebarCategory.scss';
import { Col } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { categoryType } from '../services/Aucnet.type';
import DropdownListCategory from '../components/DropdownListCategoryAucnet/DropdownListCategoryAucnet';

interface PT {
  span: number;
}

const SidebarCategory: React.FC<PT> = ({ span }) => {
  const listCategory = useSelector<RootState, categoryType[] | null>(
    (state) => state.categoryAucnet.listCategory,
  );

  const [isOpen, setIsOpen] = useState(null);

  const handleDropdownClick = (dropdownName: any) => {
    setIsOpen((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName,
    );
  };

  return (
    <Col span={span} className="sidebar-category-container">
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
              genre={item.genre}
            />
          );
        })}
    </Col>
  );
};

export default React.memo(SidebarCategory);
