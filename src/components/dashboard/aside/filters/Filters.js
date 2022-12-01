import React, { useState } from "react";
import { Accordion } from "react-headless-accordion";

import FilterItem from "./FilterItem";

const Filters = () => {
  return (
    <Accordion>
      <FilterItem category="قیمت" min="100,000,000" max="100,000,000,000" />
      <FilterItem category="متراژ" min="50" max="1000" />
      <FilterItem category="سال ساخت" min="1350" max="1401" />
      <FilterItem category="تعداد اتاق" min="1" max="5" />
    </Accordion>
  );
};

export default Filters;
