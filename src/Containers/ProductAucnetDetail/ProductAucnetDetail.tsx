/* eslint-disable prefer-const */
import React, { useEffect } from "react";
import "./ProductAucnetDetail.scss";
import { Row } from "antd";
import { queryEnum } from "../../Types/global.type";
import Util from "../../Util/Util";
import useGetCategoryAucnet from "../Aucnet/hooks/useGetCategoryAucnet";
import { ProductDetailType } from "../../Types";
import aucnetAPI from "../Aucnet/services/Aucnet.api";
import CarouselImageAucnet from "./CarouselImageAucnet/CarouselImageAucnet";
import ContentProduct from "./ContentProduct/ContentProduct";

const ProductAucnetDetail = () => {
  const [data, setData] = React.useState<ProductDetailType>({
    kaisaiKaisu: "",
    kaisaiYmd: "",
    uketsukeBng: "",
    seriBng: 0,
    kekkaKbn: 0,
    genreCd: 0,
    genre: "",
    maker: "",
    brandType: "",
    keijo: "",
    shohin: "",
    hyoka: "",
    hyokaGaiso: "",
    hyokaNaiso: "",
    handling: "",
    jishaFlg: false,
    startKng: 0,
    genzaiKng: 0,
    nyusatsuSu: 0,
    topFlg: false,
    nyusatsuFlg: false,
    kaisaiKbn: "",
    photoUrlList: [],
    adminPhotoUrlList: [],
    shuppinBiko2List: [],
    bikoList: [],
    kaijoKbn: 0,
    zoomPhotoUrlList: [],
    adminZoomPhotoUrlList: [],
    seriTypeKbn: 0,
    corner: "",
    seriEndHm: "",
    nesageFlg: "",
  });

  useGetCategoryAucnet();

  const { uketsukeBng } = Util.getByQuery([queryEnum.uketsukeBng]);

  const getData = async () => {
    try {
      const data = await aucnetAPI.getProductDetail(uketsukeBng);
      console.log("data123", data.data);
      setData(data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    getData();
  }, [uketsukeBng]);

  return (
    <Row className="product-aucnet-detail-container">
      <CarouselImageAucnet
        listImage={[...data.photoUrlList, ...data.adminPhotoUrlList]}
        listImageZoom={[
          ...data.zoomPhotoUrlList,
          ...data.adminZoomPhotoUrlList,
        ]}
      />

      <ContentProduct data={data} />
    </Row>
  );
};

export default React.memo(ProductAucnetDetail);