import Aucnet from "../Containers/Aucnet/Aucnet";
import HomeDetail from "../Containers/HomeDetail/HomeDetail";
import ListProductAucnet from "../Containers/ListProductAucnet/ListProductAucnet";
import ProductAucnetDetail from "../Containers/ProductAucnetDetail/ProductAucnetDetail";

import { MainRoutesType } from "../Types/routes.type";

export const MainRoutes: MainRoutesType[] = [
  {
    path: "/vyanjp-auction",
    element: <HomeDetail />,
  },
  {
    path: "/vyanjp-auction/aucnet",
    element: <Aucnet />,
  },

  {
    path: "/vyanjp-auction/aucnet/category",
    element: <ListProductAucnet />,
  },
  {
    path: "/vyanjp-auction/aucnet/detail",
    element: <ProductAucnetDetail />,
  },
];
