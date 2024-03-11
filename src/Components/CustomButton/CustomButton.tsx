import { Button } from "antd";
import React, { ReactNode } from "react";
import "./CustomButton.scss";

interface PT {
  title: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<PT> = ({
  title,
  onClick,
  disabled,
  className,
}) => {
  return (
    <Button
      disabled={disabled}
      className={`customized-button ${
        disabled ? "customized-disabled-button" : "customized-active-button"
      } ${className ? className : ""}`}
      onClick={() => {
        if (!disabled) onClick();
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
