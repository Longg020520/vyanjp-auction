import React, { ReactNode, useEffect, useState } from "react";
import "./CustomNumberInput.scss";

interface PT {
  onChange: (e: any) => void;
  initValue?: any;
  title?: string;
  placeholder?: string;
  className?: string;
  errroMess?: string;
  noNeedConvertedNumber?: boolean;
  allowClear?: boolean;
  suffix?: ReactNode;
  needChangeInitValue?: boolean;
}

const CustomNumberInput: React.FC<PT> = ({
  onChange,
  initValue,
  title,
  placeholder,
  className,
  errroMess,
  noNeedConvertedNumber,
  allowClear,
  suffix,
  needChangeInitValue,
}) => {
  const [value, setValue] = useState<any>("");

  useEffect(() => {
    if (initValue !== undefined) onChangeValue(initValue);
  }, [initValue, needChangeInitValue]);

  const onChangeValue = (e: any) => {
    switch (true) {
      case noNeedConvertedNumber &&
        !isNaN(Number(e)) &&
        Number(e) >= 0 &&
        Number(e) <= 10 ** 15:
        onChange(e);
        setValue(e);
        break;

      case !noNeedConvertedNumber &&
        !isNaN(Number(e)) &&
        Number(e) > 0 &&
        Number(e) <= 10 ** 15:
        onChange(Math.round(e));
        setValue(
          Math.round(e)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        break;

      case Number(e) === 0:
        onChange(0);
        setValue("");
        break;
    }
  };

  return (
    <>
      {title && <div className="customized-input-title">{title}</div>}

      <div className="customized-input-container">
        <input
          className={`customized-input-main ${className ? className : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChangeValue(e.target.value.replace(/,/g, ""));
          }}
        />
        {allowClear && (
          <div className="custom-input-fixes suffixes">
            {value && (
              <div
                className="customized-input-clear-icon"
                onClick={() => {
                  onChangeValue("");
                }}
              ></div>
            )}
            {suffix && suffix}
          </div>
        )}

        {/* Error message */}
        {errroMess && (
          <div className="customized-input-errroMess">{errroMess}</div>
        )}
      </div>
    </>
  );
};

export default React.memo(CustomNumberInput);
