import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaAngleDown } from "react-icons/fa";

const FilterItem = ({
  category,
  min,
  max,
  valueInputMin,
  valueInputMax,
  setValueInputMin,
  setValueInputMax,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <AccordionItem>
      <div className="border-bottom">
        <AccordionHeader
          as="h6"
          className="fw-bold d-flex align-items-center justify-content-between my-3 pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          {category}
          <span className={`transition ${showFilter ? "rotate-icon" : ""}`}>
            <FaAngleDown />
          </span>
        </AccordionHeader>
        <AccordionBody>
          <ul className="mb-3">
            <li className="d-flex align-items-center">
              <span
                className="ms-2 text-secondary"
                style={{ fontSize: "12px" }}
              >
                حداقل
              </span>
              <input
                style={{ fontSize: "12px" }}
                className="form-control form-control-sm"
                placeholder={`مثلا ${min}`}
                value={valueInputMin == 0 ? "" : valueInputMin}
                onChange={setValueInputMin}
              />
            </li>
            <li className="d-flex flex-column">
              <div style={{ transform: "rotate(90deg)", width: "fit-content" }}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <span
                className="ms-2 text-secondary"
                style={{ fontSize: "12px" }}
              >
                حداکثر
              </span>
              <input
                style={{ fontSize: "12px" }}
                className="form-control form-control-sm"
                placeholder={`مثلا ${max}`}
                value={valueInputMax == 0 ? "" : valueInputMax}
                onChange={setValueInputMax}
              />
            </li>
          </ul>
        </AccordionBody>
      </div>
    </AccordionItem>
  );
};

export default FilterItem;
