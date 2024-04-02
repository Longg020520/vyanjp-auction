import Api from '../../../Providers/Api';
import {
  ProductDetailStarBuyerType,
  ProductItemStarBuyerType,
} from '../../../Types/starbuyer.type';

export default class starBuyerAPI {
  static getListProductStarBuyer = async (query: string) => {
    return await Api.get<ProductItemStarBuyerType[]>(
      `/starbuyer/product/list${query}`,
    );
  };

  static getProductDetailStarBuyer = async (productNumber: string) => {
    return await Api.get<ProductDetailStarBuyerType>(
      `/starbuyer/product/detail/${productNumber}`,
    );
  };
}
