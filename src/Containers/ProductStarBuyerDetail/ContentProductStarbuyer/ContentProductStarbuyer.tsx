import React from 'react';
import './ContentProductStarbuyer.scss';
import { Col } from 'antd';
import { ProductDetailStarBuyerType } from '../../../Types/starbuyer.type';
import RankCustom from '../../StarBuyer/components/RankCustom/RankCustom';

interface PT {
  data: ProductDetailStarBuyerType | any;
  span?: number;
}

const listField = [
  {
    title: 'Main Category',
    key: 'MainCategory',
  },
  {
    title: 'Medium category',
    key: 'Mediumcategory',
  },
  {
    title: 'Brand',
    key: 'Brand',
  },
  {
    title: 'Line name',
    key: 'Modelname',
  },

  {
    title: 'Model number',
    key: 'Modelnumber',
  },
  // {
  //   title: 'No.',
  //   key: 'seriBng',
  // },
  // {
  //   title: 'Handling',
  //   key: 'handling',
  // },
  // {
  //   title: 'Item',
  //   key: 'shohin',
  // },
  // {
  //   title: 'Maker',
  //   key: 'maker',
  // },
  // {
  //   title: 'Line/Type',
  //   key: 'brandType',
  // },
];

const ContentProductStarbuyer: React.FC<PT> = ({ data, span }) => {
  return (
    <Col span={span} className="content-product-container">
      <h2>{data?.productName}</h2>

      <RankCustom rankCode={data?.productRank} />

      <p>Location: Japan </p>

      <div className="field-product d-flex">
        <p style={{ marginRight: '30%', width: '20%' }}>Offer price :</p>
        <p className="text-bold">{data?.productPrice} yen</p>
      </div>

      <div className="field-product d-flex">
        <p style={{ marginRight: '30%', width: '20%' }}>
          Publication end date:
        </p>
        <p className="text-bold">{data?.productDate} yen</p>
      </div>

      {listField.map((item, index) => {
        return (
          <div key={index} className="field-product d-flex">
            <p style={{ marginRight: '30%', width: '20%' }}>{item?.title}:</p>
            <p>{data?.properties[`${item.key}`]}</p>
          </div>
        );
      })}
      {/* {data.bikoList.map((item, index) => {
        if (item === '' || item === null) return null;
        return (
          <div key={index} className="field-product d-flex">
            <p style={{ marginRight: '30%', width: '20%' }}>
              {index === 0 ? 'Special remarks:' : ''}
            </p>
            <p>{item}</p>
          </div>
        );
      })} */}
    </Col>
  );
};

export default React.memo(ContentProductStarbuyer);
