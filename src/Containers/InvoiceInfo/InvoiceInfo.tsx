import React from "react";
import "./InvoiceInfo.scss";
import InvoiceInfoHeader from "./components/InvoiceInfoHeader/InvoiceInfoHeader";
import InvoiceInfoBody from "./components/InvoiceInfoBody/InvoiceInfoBody";

const InvoiceInfo = () => {
  return (
    <div className="invoice-info-container">
      <InvoiceInfoHeader />
      <InvoiceInfoBody />
    </div>
  );
};

export default React.memo(InvoiceInfo);
