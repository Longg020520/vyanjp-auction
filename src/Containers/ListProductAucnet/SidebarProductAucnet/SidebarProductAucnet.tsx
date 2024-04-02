import React from 'react';
import './SidebarProductAucnet.scss';
import { Col } from 'antd';

interface PT {
  listMaker: { maker: string }[] | null;
  navigateMaker: (maker: string) => void;
  span: number;
  maker: string;
}

const SidebarProductAucnet: React.FC<PT> = ({
  listMaker,
  navigateMaker,
  span,
  maker,
}) => {
  return (
    <Col span={span} className="sidebar-product-container">
      <div className="category-name">Danh mục</div>
      {
        <div className="dropdown-category-container">
          {listMaker &&
            listMaker.map((item, i) => (
              <p
                key={i}
                className={`text-custom ${maker === item.maker ? 'active' : ''}`}
                onClick={() => navigateMaker(item?.maker)}
              >
                {item?.maker}
              </p>
            ))}
        </div>
      }
    </Col>
  );
};

export default React.memo(SidebarProductAucnet);
