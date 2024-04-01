/* eslint-disable prefer-const */
import React, { useEffect } from "react";
import "./ListProductAucnet.scss";
import { Col, Empty, Pagination, Row } from "antd";
import { queryEnum } from "../../Types/global.type";
import Util from "../../Util/Util";
import SidebarProductAucnet from "./SidebarProductAucnet/SidebarProductAucnet";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { categoryType } from "../Aucnet/services/Aucnet.type";
import useGetCategoryAucnet from "../Aucnet/hooks/useGetCategoryAucnet";
import { ProductItemType } from "../../Types";
import CardProductItem from "../../Components/CardProductItem/CardProductItem";
import aucnetAPI from "../Aucnet/services/Aucnet.api";

const ListProductAucnet = () => {
  const listCategory = useSelector<RootState, categoryType[] | null>(
    (state) => state.categoryAucnet.listCategory
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
      console.error("Error fetching data:", error);
    }
  };

  const navigateMaker = (maker: string) => {
    let query = "/vyanjp-auction/aucnet/category?";
    if (genre) query = query.concat(`genre=${genre}&`);
    window.location.replace(`${query}maker=` + maker);
    // console.log(window.location.pathname + `?maker=` + maker);
  };

  const onShowSizeChange = (current: any, pageSize: any) => {
    setOffset(offset + pageSize);
    setLimit(pageSize);
  };

  useEffect(() => {
    getData();
  }, [genre, maker, limit, offset]);

  return (
    <Row className="list-product-aucnet-container">
      <SidebarProductAucnet
        listMaker={
          listCategory && genre
            ? listCategory
                .filter((item) => item.genre === genre)[0]
                ?.maker.slice(0, 10)
            : [
                {
                  maker,
                },
              ]
        }
        navigateMaker={navigateMaker}
      />
      {dataProduct.length === 0 ? (
        <Col span={18} className="d-flex j-center">
          <Empty description="Không tìm thây sản phẩm" />
        </Col>
      ) : (
        <Col span={18} className="content-product-container">
          <Row>
            {dataProduct.map((item, index) => {
              return (
                <CardProductItem
                  key={index}
                  dataProduct={item}
                />
              );
            })}
          </Row>
          <div className="pagination-container d-flex j-center m-bottom-20">
            <Pagination
              defaultCurrent={1}
              total={total}
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
