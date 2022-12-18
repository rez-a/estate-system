import React from "react";

const CheckOutPrimary = ({
  width,
  label,
  name,
  labelCheckOut1,
  labelCheckOut2,
  labelCheckOut3,
  value1,
  value2,
  value3,
  defaultChecked,
  onChangeHandler,
  require,
}) => {
  return (
    <div className={`${width} d-flex flex-column mb-4`}>
      <label>
        {label}
        {require ? <span className="color-primary">*</span> : ""}
      </label>
      <div className="d-flex">
        <div className="form-check form-check-inline me-0 ms-3 my-2">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={value1}
            checked={defaultChecked === value1}
            onChange={onChangeHandler}
          />
          <label className="form-check-label" style={{ fontSize: "12px" }}>
            {labelCheckOut1}
          </label>
        </div>
        <div className="form-check form-check-inline me-0 ms-3 my-2">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={value2}
            checked={defaultChecked === value2}
            onChange={onChangeHandler}
          />
          <label className="form-check-label" style={{ fontSize: "12px" }}>
            {labelCheckOut2}
          </label>
        </div>
        {value3 && (
          <div className="form-check form-check-inline me-0 ms-3 my-2">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value={value3}
              checked={defaultChecked === value3}
              onChange={onChangeHandler}
            />
            <label className="form-check-label" style={{ fontSize: "12px" }}>
              {labelCheckOut3}
            </label>
          </div>
        )}
      </div>
      {defaultChecked.trim() === "" && (
        <small className="color-primary" style={{ fontSize: "11px" }}>
          این فیلد الزامی است.
        </small>
      )}
    </div>
  );
};

export default CheckOutPrimary;
