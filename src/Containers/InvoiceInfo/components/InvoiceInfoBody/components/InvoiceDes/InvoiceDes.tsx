import React from "react";
import "./InvoiceDes.scss";
import InvoiceInfoTitle from "../InvoiceInfoTitle/InvoiceInfoTitle";

const InvoiceDes = () => {
  return (
    <>
      <InvoiceInfoTitle title="Nội dung đơn hàng" />
      <ul className="invoice-des">
        <li>Áo khoác gió size L (1) - 250,000</li>
        <li>Áo phao gió size L (1) - 1,250,000</li>
      </ul>
    </>
  );
};

export default React.memo(InvoiceDes);
