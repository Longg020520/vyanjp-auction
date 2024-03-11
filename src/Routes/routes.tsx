import HomeDetail from "../Containers/HomeDetail/HomeDetail";

import QR from "../Containers/QR/QR";
import { paymentMethodEnum } from "../Types/global.type";
import { MainRoutesType } from "../Types/routes.type";

export const MainRoutes: MainRoutesType[] = [
  {
    path: "/",
    element: <HomeDetail />,
  },
  {
    path: paymentMethodEnum.QR,
    element: <QR />,
  },
];
