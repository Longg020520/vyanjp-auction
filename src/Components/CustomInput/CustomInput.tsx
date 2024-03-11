import React, { ReactNode, useEffect, useState } from "react";
import "./CustomInput.scss";

interface PT {
  onChange: (e: any) => void;
  initValue?: any;
  placeholder?: string;
  title?: string;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
  errroMess?: string;
  needChangeInitValue?: boolean;
}

const CustomInput: React.FC<PT> = ({
  onChange,
  initValue,
  placeholder,
  title,
  className,
  prefix,
  suffix,
  allowClear,
  onFocus,
  onBlur,
  onClear,
  errroMess,
  needChangeInitValue,
}) => {
  const [value, setValue] = useState<any>("");

  useEffect(() => {
    if (initValue !== undefined) onHanldeChange(initValue);
  }, [initValue, needChangeInitValue]);

  const onHanldeChange = (e: string) => {
    onChange(e);
    setValue(e);
  };

  const onBlurAction = () => {
    if (onBlur) onBlur();
  };

  return (
    <>
      {title && <div className="customized-input-title">{title}</div>}

      <div
        className={`customized-input-container ${className ? className : ""}`}
      >
        {/* Tiền tố */}
        {prefix && <div className="custom-input-fixes prefixes">{prefix}</div>}

        {/* Input chính */}
        <input
          onFocus={onFocus}
          onBlur={onBlurAction}
          className="customized-input-main"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onHanldeChange(e.target.value);
          }}
        />

        {/* Hậu tố */}
        {allowClear && (
          <div className="custom-input-fixes suffixes">
            {value && (
              <div
                className="customized-input-clear-icon"
                onClick={() => {
                  onHanldeChange("");
                  if (onClear) onClear();
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

export default React.memo(CustomInput);
