import React from "react";
import "./InvoiceProvider.scss";
import InvoiceInfoTitle from "../InvoiceInfoTitle/InvoiceInfoTitle";

const InvoiceProvider = () => {
  return (
    <>
      <InvoiceInfoTitle title="Nhà cung cấp" />
      <div className="invoice-provider">Công ty TNHH May mặc Tuấn Dương</div>
    </>
  );
};

export default React.memo(InvoiceProvider);
