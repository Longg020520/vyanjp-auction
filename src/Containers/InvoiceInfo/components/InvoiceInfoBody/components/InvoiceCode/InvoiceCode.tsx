import React from "react";
import "./InvoiceCode.scss";
import InvoiceInfoTitle from "../InvoiceInfoTitle/InvoiceInfoTitle";

const InvoiceCode = () => {
  return (
    <>
      <InvoiceInfoTitle title="Mã đơn hàng" />
      <div className="invoice-code">DH0000000012</div>
    </>
  );
};

export default React.memo(InvoiceCode);
