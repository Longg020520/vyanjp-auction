/* eslint-disable prefer-const */
import React, { useEffect, useMemo } from 'react';
import './ListProductStarbuyer.scss';
import { Col, Empty, Pagination, Row } from 'antd';
import { queryEnum } from '../../Types/global.type';
import Util from '../../Util/Util';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import starBuyerAPI from '../StarBuyer/services/Starbuyer.api';
import { ProductItemStarBuyerType } from '../../Types/starbuyer.type';
import SidebarProductStarBuyer from './SidebarProductStarBuyer/SidebarProductStarBuyer';
import CardProductStarBuyerItem from './components/CardProductStarBuyerItem/CardProductStarBuyerItem';

const ListProductStarbuyer = () => {
  const [dataProduct, setDataProduct] = React.useState<
    ProductItemStarBuyerType[]
  >([]);
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [total, setTotal] = React.useState(0);

  const { category, productRank } = Util.getByQuery([
    queryEnum.category,
    queryEnum.productRank,
  ]);

  const getData = async () => {
    try {
      let query = `?limit=${limit}&offset=${offset}`;
      if (category) query = query.concat(`&category[contains]=${category}`);
      if (productRank)
        query = query.concat(`&productRank[contains]=${productRank}`);
      const data: any = await starBuyerAPI.getListProductStarBuyer(query);
      // console.log("data", data.data);
      setDataProduct(data.data?.records);
      setTotal(data.data?.pagination?.totalRows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateProductRank = (productRank: string) => {
    let query = '/vyanjp-auction/starbuyer/product?';
    if (category) query = query.concat(`category=${category}&`);
    window.location.replace(`${query}productRank=` + productRank);
    // console.log(window.location.pathname + `?maker=` + maker);
  };

  const onShowSizeChange = (current: any, pageSize: any) => {
    setOffset(offset + pageSize);
    setLimit(pageSize);
  };

  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  useEffect(() => {
    getData();
  }, [category, productRank, limit, offset]);

  return (
    <Row className="list-product-aucnet-container">
      {!isMobile && (
        <SidebarProductStarBuyer
          navigateProductRank={navigateProductRank}
          span={6}
          productRank={productRank && productRank}
        />
      )}
      {dataProduct.length === 0 ? (
        <Col span={18} className="d-flex j-center">
          <Empty description="Không tìm thây sản phẩm" />
        </Col>
      ) : (
        <Col span={!isMobile ? 18 : 24} className="content-product-container">
          <Row gutter={[16, 16]}>
            {dataProduct.map((item, index) => {
              return (
                <CardProductStarBuyerItem key={index} dataProduct={item} />
              );
            })}
          </Row>
          <div className="pagination-container d-flex j-center m-bottom-20">
            <Pagination
              defaultCurrent={1}
              total={total}
              showSizeChanger={true}
              onChange={onShowSizeChange}
              defaultPageSize={20}
            />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default React.memo(ListProductStarbuyer);
