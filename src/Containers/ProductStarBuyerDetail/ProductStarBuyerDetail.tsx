/* eslint-disable prefer-const */
import React, { useEffect, useMemo } from 'react';
import './ProductStarBuyerDetail.scss';
import { Row } from 'antd';
// import ContentProduct from './ContentProduct/ContentProduct';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useParams } from 'react-router-dom';
import { ProductDetailStarBuyerType } from '../../Types/starbuyer.type';
import starBuyerAPI from '../StarBuyer/services/Starbuyer.api';
import CarouselImageStarBuyer from './CarouselImageStarBuyer/CarouselImageStarBuyer';
import ContentProductStarbuyer from './ContentProductStarbuyer/ContentProductStarbuyer';

const ProductStarBuyerDetail = () => {
  const [data, setData] = React.useState<ProductDetailStarBuyerType>({
    productDate: '',
    productName: '',
    productImage: '',
    productPrice: '',
    productNumber: '',
    images: [],
    productRank: '',
    category: '',
    properties: {
      MainCategory: '',
      Mediumcategory: '',
      Category: '',
      Brand: '',
      Linename: '',
      Modelname: '',
      Modelnumber: '',
      Materials: '',
      Shape: '',
      Color: '',
      Metalfittings: '',
      Serial: '',
      ProductID: '',
      Serialsticker: '',
      Accessories: '',
      purchasedate: '',
      ALLUexhibiting: '',
      SizeW: '',
      SizeH: '',
      SizeD: '',
      Shoulderheight: '',
      Handleheight: '',
      Freetext: '',
      External: '',
      Internal: '',
      Handle: '',
      Angular: '',
      Root: '',
      Metal: '',
      Othercondition1: '',
      Othercondition2: '',
      Notes: '',
    },
  });

  const { productNumber } = useParams();

  const getData = async (productNumber: string) => {
    try {
      const data: any =
        await starBuyerAPI.getProductDetailStarBuyer(productNumber);
      console.log('data123', data.data);
      setData(data?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  useEffect(() => {
    if (productNumber) {
      getData(productNumber);
    }
  }, [productNumber]);

  return (
    <Row gutter={[16, 16]} className="product-aucnet-detail-container">
      <CarouselImageStarBuyer
        listImage={[...data.images]}
        span={isMobile ? 24 : 10}
      />

      <ContentProductStarbuyer data={data} span={isMobile ? 24 : 14} />
    </Row>
  );
};

export default React.memo(ProductStarBuyerDetail);
