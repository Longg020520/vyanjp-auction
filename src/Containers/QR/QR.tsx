import React from "react";
import "./QR.scss";
import Buttons from "../../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import PaymentMethodTitle from "../../Components/PaymentMethodTitle/PaymentMethodTitle";
import QRImage from "./QRImage/QRImage";

const QR = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <>
      <PaymentMethodTitle title="Quét mã qua ứng dụng Ngân hàng / Ví điện tử" />
      <QRImage />
      <Buttons onBack={onBack} />
    </>
  );
};

export default React.memo(QR);
