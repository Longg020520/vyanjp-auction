import React from 'react';
import './ContentCategoryStarBuyer.scss';
import { Col, Row } from 'antd';
import { LIST_CATEGORY_STARBUYER } from '../../../constants';
import CategoryItem from '../../../Components/CategoryItem/CategoryItem';
import RankDescription from '../components/RankDescription/RankDescription';

interface PT {
  span: number;
}

const ContentCategoryStarBuyer: React.FC<PT> = ({ span }) => {
  return (
    <Col span={span} className="content-category-starbuyer-container">
      <RankDescription />
      <h2>Danh mục phổ biến</h2>
      <Row>
        {LIST_CATEGORY_STARBUYER.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              path={item.path}
              categoryName={item.name}
              imgUrlCategory={item.imgUrl}
            />
          );
        })}
      </Row>
      {/* <h2>Thương hiệu nổi bật</h2>
      <Row>
        {LIST_BRAND.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              path={item.path}
              categoryName={item.name}
              imgUrlCategory={item.imgUrl}
            />
          );
        })}
      </Row> */}
    </Col>
  );
};

export default React.memo(ContentCategoryStarBuyer);
