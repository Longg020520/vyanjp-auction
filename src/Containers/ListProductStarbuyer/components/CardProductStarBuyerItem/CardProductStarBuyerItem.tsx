import React from 'react';
import './CardProductStarBuyerItem.scss';
import { useNavigate } from 'react-router-dom';
import { Col } from 'antd';
import { ProductItemStarBuyerType } from '../../../../Types/starbuyer.type';
import RankCustom from '../../../StarBuyer/components/RankCustom/RankCustom';

interface PT {
  dataProduct?: ProductItemStarBuyerType;
}

const CardProductStarBuyerItem: React.FC<PT> = ({ dataProduct }) => {
  const navegate = useNavigate();
  const handlePath = (productNumber: string | undefined) => {
    navegate(`/vyanjp-auction/starbuyer/product/detail/${productNumber}`);
  };
  return (
    <Col
      xs={{ flex: '50%' }}
      sm={{ flex: '50%' }}
      xl={{ flex: '25%' }}
      className="product-starbuyer-item-container"
      onClick={() => handlePath(dataProduct?.productNumber)}
    >
      <img src={dataProduct?.productImage} alt={'products'} />
      <div className="field-product-starbuyer">
        <p>{dataProduct?.productNumber}</p>
      </div>
      <RankCustom rankCode={dataProduct?.productRank} />
      <div className="field-product-starbuyer">
        <p>Japan</p>
      </div>

      <div className="title-product-starbuyer" style={{ height: 150 }}>
        {dataProduct?.productName}
      </div>
      <div>Ngày kết thúc</div>
      <div className="field-product-starbuyer">
        <p>{dataProduct?.productDate}</p>
      </div>

      <div className="field-product-starbuyer">
        <p>Price: </p>
        <p className="text-bold">{dataProduct?.productPrice} yen</p>
      </div>
    </Col>
  );
};

export default React.memo(CardProductStarBuyerItem);
