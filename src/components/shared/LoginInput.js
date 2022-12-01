import React from "react";

const LoginInput = ({
  label,
  placeholder,
  id,
  textHelp,
  type,
  icon,
  value,
  onChangeInput,
  autoComplete,
  setShowPass,
  setShowConfirmPass,
  validate,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div
        style={{
          position: "relative",
        }}
      >
        <input
          style={{
            borderColor: validate ? "#ced4da" : "#a62626",
          }}
          type={type}
          className={`form-control form-control-sm ${icon ? "ps-4" : ""}`}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
          autoComplete={autoComplete}
        />
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={id === "password" ? setShowPass : setShowConfirmPass}
        >
          {icon}
        </span>
      </div>
      <div
        className={`form-text ${
          validate ? "opacity-0" : "opacity-100 color-primary"
        }`}
        style={{
          fontSize: "10px",
        }}
      >
        {textHelp}
      </div>
    </div>
  );
};

export default LoginInput;
