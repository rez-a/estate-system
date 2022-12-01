import React from "react";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import Categories from "./categories/Categories";
import Filters from "./filters/Filters";

const SideBar = () => {
  return (
    <div>
      <Categories />
      <Filters />
      <div className="d-flex justify-content-between my-3">
        <ButtonPrimarySmall text="حذف همه آگهی ها" />
        <ButtonPrimarySmall text="اعمال فیلتر" />
      </div>
    </div>
  );
};

export default SideBar;
