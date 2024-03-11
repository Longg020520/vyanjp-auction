import React from "react";
import "./Buttons.scss";
import CustomButton from "../CustomButton/CustomButton";

interface PT {
  onBack?: () => void;
  onSubmit?: () => void;
  submitTitle?: string;
}

const Buttons: React.FC<PT> = ({ onBack, onSubmit, submitTitle }) => {
  return (
    <div className="buttons">
      {onBack && (
        <CustomButton
          className="back-button"
          title="Quay lại"
          onClick={onBack}
        />
      )}
      {onBack && onSubmit && <div className="buttons-break"></div>}
      {onSubmit && (
        <CustomButton
          title={submitTitle ? submitTitle : "Thanh toán"}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default React.memo(Buttons);
