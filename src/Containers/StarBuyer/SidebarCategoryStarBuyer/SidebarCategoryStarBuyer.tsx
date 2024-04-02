import React, { useState } from 'react';
import './SidebarCategoryStarBuyer.scss';
import { Col } from 'antd';
import DropdownListCategoryStarBuyer from '../components/DropdownListCategoryStarBuyer/DropdownListCategoryStarBuyer';
import { categoryStarBuyerType } from '../services/Starbuyer.type';
import { RANK_CATEGORY_STARBUYER } from '../../../constants';

interface PT {
  span: number;
}

const listCategory: categoryStarBuyerType[] = [
  {
    category: 'Watch',
    categoryName: 'Đồng hồ',
  },
  {
    category: 'Brand Jewelry',
    categoryName: 'Trang sức thương hiệu',
  },
  {
    category: 'Jewelry',
    categoryName: 'Trang sức',
  },
  {
    category: 'Bag',
    categoryName: 'Túi xách',
  },
  {
    category: 'Accessory',
    categoryName: 'Phụ kiện',
  },
  {
    category: 'Apparel',
    categoryName: 'Trang phục',
  },
  {
    category: 'Shoes',
    categoryName: 'Giày dép',
  },
  {
    category: 'Silver Brand',
    categoryName: 'Thương hiệu bạc',
  },
];

const SidebarCategoryStarBuyer: React.FC<PT> = ({ span }) => {
  const [isOpen, setIsOpen] = useState(null);

  const handleDropdownClick = (dropdownName: any) => {
    setIsOpen((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName,
    );
  };

  return (
    <Col span={span} className="sidebar-category-starbuyer-container">
      <h3>Danh mục</h3>
      {listCategory.map((item, index) => {
        return (
          <DropdownListCategoryStarBuyer
            key={index}
            categoryName={item.category}
            isOpen={isOpen === item.category}
            setIsOpen={() => handleDropdownClick(item.category)}
            children={RANK_CATEGORY_STARBUYER}
            category={item.category}
          />
        );
      })}
    </Col>
  );
};

export default React.memo(SidebarCategoryStarBuyer);
