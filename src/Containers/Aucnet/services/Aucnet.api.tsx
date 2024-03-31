import Api from "../../../Providers/Api";
import { ProductDetailType, ProductItemType } from "../../../Types";
import { categoryType } from "./Aucnet.type";

export default class aucnetAPI {
  static getALlCaregory = async () => {
    return await Api.get<categoryType[]>(`/category/aucnet`);
  };
  static getListProduct = async (query: string) => {
    return await Api.get<ProductItemType[]>(`/aucnet/product/list${query}`);
  };

  static getProductDetail = async (uketsukeBng: string) => {
    return await Api.get<ProductDetailType>(
      `/aucnet/product/detail/${uketsukeBng}`
    );
  };
}
