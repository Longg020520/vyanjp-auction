import React from "react";
import "./InvoiceInfoTitle.scss";

interface PT {
  title: string;
}

const InvoiceInfoTitle: React.FC<PT> = ({ title }) => {
  return <div className="invoice-info-title">{title}</div>;
};

export default React.memo(InvoiceInfoTitle);
