import React from "react";

const DetailsColumn = ({ title, data }) => {
  return (
    <div className="details d-flex alin-items-center justify-content-between py-3 border-bottom">
      <span
        className="title fw-bold"
        style={{
          fontSize: "13 px",
        }}
      >
        {title}
      </span>
      <span
        className="data fw-bold"
        style={{
          fontSize: "13 px",
        }}
      >
        {data}
      </span>
    </div>
  );
};

export default DetailsColumn;
