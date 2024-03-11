export interface resWithPaginationType<T> {
  hits: T[];
  dataExtra?: any;
  pagination: {
    totalRows: number;
    totalPages: number;
  };
}

export enum paymentMethodEnum {
  QR = "QR",
  ATM = "ATM",
  CREDIT = "CREDIT",
  EWALLET = "EWALLET",
}

export const paymentMethodArray = [
  {
    value: paymentMethodEnum.QR,
    des: "Ứng dụng Mobile Banking quét mã QR",
  },
  {
    value: paymentMethodEnum.ATM,
    des: "Thẻ ATM và tài khoản ngân hàng",
  },
  {
    value: paymentMethodEnum.CREDIT,
    des: "Thẻ thanh toán quốc tế",
  },
  {
    value: paymentMethodEnum.EWALLET,
    des: "Ví điện tử",
  },
];
