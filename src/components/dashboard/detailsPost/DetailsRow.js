import React from "react";

const DetailsRow = ({ title, data, border }) => {
  return (
    <div
      className={`details d-flex flex-fill flex-column justify-content-between align-items-center ${
        border ? "border-start" : "border-0"
      }`}
    >
      <span className="title mb-2 fw-bold">{title}</span>
      <span className="data fw-bold">
        {data}
        {title === "متراژ" && (
          <small
            className="me-1"
            style={{
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            متر
          </small>
        )}
      </span>
    </div>
  );
};

export default DetailsRow;
