import Aucnet from '../Containers/Aucnet/Aucnet';
import HomeDetail from '../Containers/HomeDetail/HomeDetail';
import ListProductAucnet from '../Containers/ListProductAucnet/ListProductAucnet';
import ListProductStarbuyer from '../Containers/ListProductStarbuyer/ListProductStarbuyer';
import ProductAucnetDetail from '../Containers/ProductAucnetDetail/ProductAucnetDetail';
import ProductStarBuyerDetail from '../Containers/ProductStarBuyerDetail/ProductStarBuyerDetail';
import StarBuyer from '../Containers/StarBuyer/StarBuyer';

import { MainRoutesType } from '../Types/routes.type';

export const MainRoutes: MainRoutesType[] = [
  {
    path: '/',
    element: <HomeDetail />,
  },
  {
    path: '/vyanjp-auction/aucnet/category',
    element: <Aucnet />,
  },

  {
    path: '/vyanjp-auction/aucnet/product',
    element: <ListProductAucnet />,
  },
  {
    path: '/vyanjp-auction/aucnet/product/detail/:uketsukeBng',
    element: <ProductAucnetDetail />,
  },

  {
    path: '/vyanjp-auction/starbuyer/category',
    element: <StarBuyer />,
  },
  {
    path: '/vyanjp-auction/starbuyer/product',
    element: <ListProductStarbuyer />,
  },
  {
    path: '/vyanjp-auction/starbuyer/product/detail/:productNumber',
    element: <ProductStarBuyerDetail />,
  },
];
