import React from "react";

const InputPrimary = ({
  width,
  value,
  setValue,
  placeholder,
  label,
  require,
  disabled,
  invalidText,
}) => {
  return (
    <div className={`mb-4 ${width}`}>
      <label className="mb-2">
        {label}
        {require ? <span className="color-primary">*</span> : ""}
      </label>
      <input
        className="form-control form-control-sm"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
      />

      <small className="color-primary" style={{ fontSize: "11px" }}>
        {invalidText}
      </small>

      <small></small>
    </div>
  );
};

export default InputPrimary;
