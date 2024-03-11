import React from "react";
import "./InvoiceAmount.scss";
import InvoiceInfoTitle from "../InvoiceInfoTitle/InvoiceInfoTitle";

const InvoiceAmount = () => {
  return (
    <>
      <InvoiceInfoTitle title="Số tiền" />
      <div className="invoice-amount">1,500,000</div>
    </>
  );
};

export default React.memo(InvoiceAmount);
