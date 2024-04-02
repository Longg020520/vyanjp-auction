/* eslint-disable prefer-const */
import React, { useEffect, useMemo } from 'react';
import './ListProductAucnet.scss';
import { Col, Empty, Pagination, Row } from 'antd';
import { queryEnum } from '../../Types/global.type';
import Util from '../../Util/Util';
import SidebarProductAucnet from './SidebarProductAucnet/SidebarProductAucnet';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { categoryType } from '../Aucnet/services/Aucnet.type';
import useGetCategoryAucnet from '../Aucnet/hooks/useGetCategoryAucnet';
import { ProductItemType } from '../../Types';
import aucnetAPI from '../Aucnet/services/Aucnet.api';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CardProductAucnetItem from './components/CardProductAucnetItem/CardProductAucnetItem';

const ListProductAucnet = () => {
  const listCategory = useSelector<RootState, categoryType[] | null>(
    (state) => state.categoryAucnet.listCategory,
  );

  const [dataProduct, setDataProduct] = React.useState<ProductItemType[]>([]);
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [total, setTotal] = React.useState(0);

  useGetCategoryAucnet();

  const { genre, maker } = Util.getByQuery([queryEnum.genre, queryEnum.maker]);

  const getData = async () => {
    try {
      let query = `?limit=${limit}&offset=${offset}&seriBng[sort]=asc`;
      if (genre) query = query.concat(`&genre[contains]=${genre}`);
      if (maker) query = query.concat(`&maker[contains]=${maker}`);
      const data: any = await aucnetAPI.getListProduct(query);
      // console.log("data", data.data);
      setDataProduct(data.data?.records);
      setTotal(data.data?.pagination?.totalRows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateMaker = (maker: string) => {
    let query = '/vyanjp-auction/aucnet/product?';
    if (genre) query = query.concat(`genre=${genre}&`);
    window.location.replace(`${query}maker=` + maker);
  };

  const onShowSizeChange = (current: any, pageSize: any) => {
    setOffset(offset + pageSize);
    setLimit(pageSize);
  };

  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  useEffect(() => {
    getData();
  }, [genre, maker, limit, offset]);

  return (
    <Row className="list-product-aucnet-container">
      {!isMobile && (
        <SidebarProductAucnet
          listMaker={
            listCategory && genre
              ? listCategory.filter((item) => item.genre === genre)[0]?.maker
              : [
                  {
                    maker,
                  },
                ]
          }
          navigateMaker={navigateMaker}
          span={6}
          maker={maker && maker}
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
              return <CardProductAucnetItem key={index} dataProduct={item} />;
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

export default React.memo(ListProductAucnet);
