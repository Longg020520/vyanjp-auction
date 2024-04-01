import React from "react";
import "./CardProductItem.scss";
import { useNavigate } from "react-router-dom";
import { Col } from "antd";
import { ProductItemType } from "../../Types";

interface PT {
  dataProduct?: ProductItemType;
  // navigateDetailItem: (id: string) => void;
}

const CardProductItem: React.FC<PT> = ({  dataProduct }) => {
  const navegate = useNavigate();
  const handlePath = (uketsukeBng: string | undefined) => {
    navegate(`/vyanjp-auction/aucnet/detail?uketsukeBng=${uketsukeBng}`);
  };
  return (
    <Col
      xs={{ flex: '50%' }}
      sm={{ flex: '50%' }}
      xl={{ flex: '25%' }}
      className="product-item-container"
      onClick={() => handlePath(dataProduct?.uketsukeBng)}
    >
      <img src={dataProduct?.albumPhotoUrl} alt={"products"} />
      <p>{dataProduct?.seriBng}</p>
      <div className="field-product">
        <p>Current Price</p>
        <p className="text-bold">{dataProduct?.genzaiKng} yen</p>
      </div>
      <div className="field-product">
        <p>Start Price</p>
        <p className="text-bold">{dataProduct?.startKng} yen</p>
      </div>
      <hr />
      <h3>{dataProduct?.maker}</h3>
      <p>{dataProduct?.keijo}</p>
      <p>{dataProduct?.brandType}</p>
      <div className="field-product">
        <p>Bid No.</p>
        <p>{`( ${dataProduct?.hyoka} ${dataProduct?.hyokaGaiso} / ${dataProduct?.hyokaNaiso} )`}</p>
      </div>
    </Col>
  );
};

export default React.memo(CardProductItem);
