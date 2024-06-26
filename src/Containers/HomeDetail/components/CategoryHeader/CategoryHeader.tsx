import React, { useMemo } from 'react';
import './CategoryHeader.scss';
import {
  LIST_CATEGORY_AUCNET,
  LIST_CATEGORY_STARBUYER,
  LIST_MARKET,
} from '../../../../constants';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

const CategoryHeader = () => {
  const [market, setMarket] = React.useState<'AA' | 'SA' | 'JBA'>('AA');
  const [listCategory, setListCategory] =
    React.useState<{ name: string; path: string }[]>(LIST_CATEGORY_AUCNET);

  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  const handleMarketChange = (index: number) => {
    if (index === 0) {
      setMarket('AA');
      setListCategory(LIST_CATEGORY_AUCNET);
    }
    if (index === 1) {
      setMarket('SA');
      setListCategory(LIST_CATEGORY_STARBUYER);
    }
    if (index === 2) {
      setMarket('JBA');
      setListCategory(LIST_CATEGORY_STARBUYER);
    }
  };

  const handleNavigateChange = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <Row className="top-category">
        <Col span={!isMobile ? 8 : 24} className="top-category-left">
          <MenuOutlined style={{ marginRight: '10px' }} />
          Tất cả danh mục
        </Col>
        {!isMobile && <Col span={16} className="top-category-right"></Col>}
      </Row>
      <Row className="bot-category">
        <Col span={!isMobile ? 8 : 10} className="list-market">
          <div className="head">Japan market</div>
          {LIST_MARKET.map((item, index) => {
            return (
              <div
                className="list-market-item"
                key={index}
                onClick={() => handleMarketChange(index)}
              >
                <div style={{ paddingRight: '10px' }}>
                  <img
                    src={item.imgUrl}
                    alt="logo"
                    style={{ width: !isMobile ? '60px' : '40px' }}
                  />
                </div>
                <div
                  className={`list-market-item-text ${
                    index === 0 && market === 'AA'
                      ? 'active'
                      : index === 1 && market === 'SA'
                        ? 'active'
                        : index === 2 && market === 'JBA'
                          ? 'active'
                          : 'inactive'
                  }`}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </Col>
        <Col span={!isMobile ? 16 : 14} className="list-category">
          <div className="category-tittle">Danh sách danh mục</div>
          <Row gutter={16}>
            {listCategory.map((item, index) => {
              return (
                <Col
                  // span={8}
                  xs={{ flex: '50%' }}
                  sm={{ flex: '50%' }}
                  xl={{ flex: '33%' }}
                  className="category-name"
                  key={index}
                  onClick={() => handleNavigateChange(item.path)}
                >
                  {item.name}
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(CategoryHeader);
