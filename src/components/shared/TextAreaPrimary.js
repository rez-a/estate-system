import React from "react";

const TextAreaPrimary = ({ width, value, setValue, placeholder, label }) => {
  return (
    <div className={`mb-3 ${width}`}>
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      ></textarea>
    </div>
  );
};

export default TextAreaPrimary;
