import React from 'react';
import './SidebarProductAucnet.scss';
import { Col } from 'antd';

interface PT {
  listMaker: { maker: string }[] | null;
  navigateMaker: (maker: string) => void;
  span: number;
}

const SidebarProductAucnet: React.FC<PT> = ({
  listMaker,
  navigateMaker,
  span,
}) => {
  return (
    <Col span={span} className="sidebar-product-container">
      <div className="category-name">Danh mục</div>
      {
        <div className="dropdown-category-container">
          {listMaker &&
            listMaker.map((maker, i) => (
              <p
                key={i}
                className="text-custom"
                onClick={() => navigateMaker(maker?.maker)}
              >
                {maker?.maker}
              </p>
            ))}
        </div>
      }
    </Col>
  );
};

export default React.memo(SidebarProductAucnet);
