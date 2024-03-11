import React from "react";
import "./InvoiceInfoBody.scss";
import InvoiceAmount from "./components/InvoiceAmount/InvoiceAmount";
import InvoiceCode from "./components/InvoiceCode/InvoiceCode";
import InvoiceDes from "./components/InvoiceDes/InvoiceDes";
import InvoiceProvider from "./components/InvoiceProvider/InvoiceProvider";

const InvoiceInfoBody = () => {
  return (
    <div className="invoice-info-body-container">
      <InvoiceAmount />
      <InvoiceCode />
      <InvoiceDes />
      <InvoiceProvider />
    </div>
  );
};

export default React.memo(InvoiceInfoBody);
