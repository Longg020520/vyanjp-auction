import React from "react";
import "./QRImage.scss";

const QRImage = () => {
  const bank = "970432";
  const account = "66083969";
  const template = "compact";
  const amount = "686868";
  const des = "Cung chúc tân xuân, phát tài phát lộc";
  const name = "DOAN DUC ANH";
  return (
    <div className="qr-image-container">
      <img
        className="qr-image"
        src={`https://img.vietqr.io/image/${bank}-${account}-${template}.png?amount=${amount}&addInfo=${des}&accountName=${name}`}
      />
    </div>
  );
};

export default React.memo(QRImage);
