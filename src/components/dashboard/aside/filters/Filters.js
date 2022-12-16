import React, { useContext } from "react";
import { Accordion } from "react-headless-accordion";
import { Category } from "../../../../context/CategoryContext";
import { convertSpliterToNumber } from "../../../../helper/convertSpliterToNumber";
import Toast from "../../../../helper/toast";

import FilterItem from "./FilterItem";

const Filters = ({ valueInput, setValueInput }) => {
  const handleSetValue = (value) => {
    const result = convertSpliterToNumber(value);
    if (typeof result !== "number") {
      Toast.fire({
        icon: "error",
        title: "مقادیر فیلتر را عدد وارد کنید",
      });
      return "";
    } else if (result === 0) {
      return "";
    } else {
      return result;
    }
  };
  const { category } = useContext(Category);
  return (
    <Accordion>
      {category === "buy" && (
        <FilterItem
          valueInputMin={valueInput.minPrice.toLocaleString()}
          valueInputMax={valueInput.maxPrice.toLocaleString()}
          setValueInputMin={(e) =>
            setValueInput({
              ...valueInput,
              minPrice: handleSetValue(e.target.value),
            })
          }
          setValueInputMax={(e) =>
            setValueInput({
              ...valueInput,
              maxPrice: handleSetValue(e.target.value),
            })
          }
          category="قیمت"
          min="100,000,000"
          max="100,000,000,000"
        />
      )}

      <FilterItem
        valueInputMin={valueInput.minMeterage}
        valueInputMax={valueInput.maxMeterage}
        setValueInputMin={(e) =>
          setValueInput({
            ...valueInput,
            minMeterage: handleSetValue(e.target.value),
          })
        }
        setValueInputMax={(e) =>
          setValueInput({
            ...valueInput,
            maxMeterage: handleSetValue(e.target.value),
          })
        }
        category="متراژ"
        min="50"
        max="1000"
      />
      <FilterItem
        valueInputMin={valueInput.minBuildIn}
        valueInputMax={valueInput.maxBuildIn}
        setValueInputMin={(e) =>
          setValueInput({
            ...valueInput,
            minBuildIn: handleSetValue(e.target.value),
          })
        }
        setValueInputMax={(e) =>
          setValueInput({
            ...valueInput,
            maxBuildIn: handleSetValue(e.target.value),
          })
        }
        category="سال ساخت"
        min="1350"
        max="1401"
      />
      <FilterItem
        valueInputMin={valueInput.minRoom}
        valueInputMax={valueInput.maxRoom}
        setValueInputMin={(e) =>
          setValueInput({
            ...valueInput,
            minRoom: handleSetValue(e.target.value),
          })
        }
        setValueInputMax={(e) =>
          setValueInput({
            ...valueInput,
            maxRoom: handleSetValue(e.target.value),
          })
        }
        category="تعداد اتاق"
        min="1"
        max="5"
      />
    </Accordion>
  );
};

export default Filters;
