import React from 'react';
import './SidebarProductStarBuyer.scss';
import { Col } from 'antd';
import { RANK_CATEGORY_STARBUYER } from '../../../constants';

interface PT {
  navigateProductRank: (productRank: string) => void;
  span: number;
  productRank: string;
}

const SidebarProductStarBuyer: React.FC<PT> = ({
  navigateProductRank,
  span,
  productRank,
}) => {
  return (
    <Col span={span} className="sidebar-product-starbuyer-container">
      <h3>Danh mục</h3>
      {
        <div className="dropdown-category-container">
          {RANK_CATEGORY_STARBUYER.map((item, i) => (
            <p
              key={i}
              className={`text-custom ${productRank === item.rankCode ? 'active' : ''}`}
              onClick={() => navigateProductRank(item?.rankCode)}
            >
             Rank {item?.rankCode}
            </p>
          ))}
        </div>
      }
    </Col>
  );
};

export default React.memo(SidebarProductStarBuyer);
