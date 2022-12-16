import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Filter } from "../../../context/FilterContext";
import { addFilter } from "../../../reducer/filterReducer/ActionCreators";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import Filters from "./filters/Filters";

const MainSideBar = () => {
  const { state, dispatch } = useContext(Filter);
  const findUsedFilterName = (valueInput) => {
    let filtersName = [];
    if (
      (valueInput.minPrice !== 0 && valueInput.minPrice !== "") ||
      (valueInput.maxPrice !== 0 && valueInput.maxPrice !== "")
    ) {
      filtersName = [...filtersName, "قیمت"];
    }
    if (
      (valueInput.minMeterage !== 0 && valueInput.minMeterage !== "") ||
      (valueInput.maxMeterage !== 0 && valueInput.maxMeterage !== "")
    ) {
      filtersName = [...filtersName, "متراژ"];
    }
    if (
      (valueInput.minBuildIn !== 0 && valueInput.minBuildIn !== "") ||
      (valueInput.maxBuildIn !== 0 && valueInput.maxBuildIn !== "")
    ) {
      filtersName = [...filtersName, "سال ساخت"];
    }
    if (
      (valueInput.minRoom !== 0 && valueInput.minRoom !== "") ||
      (valueInput.maxRoom !== 0 && valueInput.maxRoom !== "")
    ) {
      filtersName = [...filtersName, "تعداد اتاق"];
    }
    return filtersName;
  };
  const [valueInput, setValueInput] = useState({
    minPrice: "",
    maxPrice: "",
    minMeterage: "",
    maxMeterage: "",
    minBuildIn: "",
    maxBuildIn: "",
    minRoom: "",
    maxRoom: "",
  });

  useEffect(() => {
    setValueInput({
      minPrice: state.minPrice,
      maxPrice: state.maxPrice,
      minMeterage: state.minMeterage,
      maxMeterage: state.maxMeterage,
      minBuildIn: state.minBuildIn,
      maxBuildIn: state.maxBuildIn,
      minRoom: state.minRoom,
      maxRoom: state.maxRoom,
    });
  }, [state]);

  return (
    <>
      <Filters valueInput={valueInput} setValueInput={setValueInput} />
      <div className="d-flex justify-content-between my-3">
        <ButtonPrimarySmall text="حذف همه آگهی ها" />
        <ButtonPrimarySmall
          onClickHandler={() =>
            dispatch(
              addFilter({
                ...valueInput,
                filtersName: [...findUsedFilterName(valueInput)],
              })
            )
          }
          text="اعمال فیلتر"
        />
      </div>
    </>
  );
};

export default MainSideBar;
