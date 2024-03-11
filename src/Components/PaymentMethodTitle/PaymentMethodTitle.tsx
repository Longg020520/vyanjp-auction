import React from "react";
import "./PaymentMethodTitle.scss";

interface PT {
  title: string;
}

const PaymentMethodTitle: React.FC<PT> = ({ title }) => {
  return <div className="payment-method-title">{title}</div>;
};

export default React.memo(PaymentMethodTitle);
