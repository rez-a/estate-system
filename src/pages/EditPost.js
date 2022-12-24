import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutPrimary from "../components/shared/CheckOutPrimary";
import InputPrimary from "../components/shared/InputPrimary";
import TextAreaPrimary from "../components/shared/TextAreaPrimary";
import { EditLoads } from "../context/EditPostLoads";
import convertPersianNumberToEnglish from "../helper/convertPersianNumberToEnglish";
import { convertSpliterToNumber } from "../helper/convertSpliterToNumber";
import Toast from "../helper/toast";
import { getPost } from "../services/dashboard";
import defaultImage from "../assets/images/defaultImage.jpg";

const EditPost = () => {
  const { setPost } = useContext(EditLoads);
  const { load, setLoad } = useContext(EditLoads);
  const { id } = useParams();
  const date = new Date();
  const thisYear = convertPersianNumberToEnglish(
    date.toLocaleDateString("fa-IR").split("/")[0]
  );
  const [postEdited, setPostEdited] = useState({
    build_in: "",
    category: "",
    description: "",
    document: "",
    id: "",
    image: "",
    metrage: "",
    mortgage: "",
    number: "",
    parking: "",
    price: "",
    rent: "",
    room: "",
    title: "",
    user_id: "",
    warehouse: "",
  });
  useEffect(() => {
    setLoad({ ...load, getPostLoad: true });
    const request = async () => {
      const data = await getPost(id);
      if (data.code === "200") {
        setPost(data.post[0]);
        setPostEdited(data.post[0]);
        setLoad({ ...load, getPostLoad: false });
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ها دریافت نشد!!",
        });
      }
    };
    request();
  }, []);

  useEffect(() => {
    if (postEdited.category === "buy") {
      setPost({ ...postEdited, rent: 0, mortgage: 0 });
    } else if (postEdited.category === "mortgage") {
      setPost({ ...postEdited, rent: 0, price: 0 });
    } else if (postEdited.category === "rent") {
      setPost({ ...postEdited, price: 0 });
    }
  }, [postEdited]);
  return (
    <div className="row g-3">
      <form className="col-lg-7 order-last order-lg-first">
        <div
          className={`row justify-content-between g-6 ${
            load.getPostLoad ? "loading-skeleton" : ""
          }`}
        >
          <InputPrimary
            label="عنوان آگهی"
            require={load.getPostLoad ? false : true}
            placeholder={load.getPostLoad ? "" : '"مثلا 85 متری نوساز ..."'}
            value={postEdited.title}
            width="col-12"
            invalidText={
              load.getPostLoad
                ? ""
                : postEdited.title === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) =>
              setPostEdited({ ...postEdited, title: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-sm-6 col-12"
            label="سند"
            name="document"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.document}
            value1="1"
            value2="0"
            require={load.getPostLoad ? false : true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, document: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-sm-6 col-12"
            label="پارکینگ"
            name="parking"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.parking}
            value1="1"
            value2="0"
            require={load.getPostLoad ? false : true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, parking: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-sm-6 col-12"
            label="انباری"
            name="warehouse"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.warehouse}
            value1="1"
            value2="0"
            require={load.getPostLoad ? false : true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, warehouse: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-sm-6 col-12"
            label="دسته بندی"
            name="category"
            labelCheckOut1="خرید"
            labelCheckOut2="رهن"
            labelCheckOut3="اجاره"
            defaultChecked={postEdited.category}
            value1="buy"
            value2="mortgage"
            value3="rent"
            require={load.getPostLoad ? false : true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, category: e.target.value })
            }
          />
          <InputPrimary
            label="تعداد اتاق"
            require={load.getPostLoad ? false : true}
            placeholder={load.getPostLoad ? "" : "مثلا 2"}
            value={isNaN(Number(postEdited.room)) ? "" : postEdited.room}
            width="col-sm-6 col-12"
            invalidText={
              load.getPostLoad
                ? ""
                : isNaN(Number(postEdited.room))
                ? "این فیلد باید عدد باشد"
                : postEdited.room.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) =>
              setPostEdited({ ...postEdited, room: e.target.value })
            }
          />
          <InputPrimary
            label="سال ساخت"
            require={load.getPostLoad ? false : true}
            placeholder={load.getPostLoad ? "" : "مثلا 1395"}
            value={
              isNaN(Number(postEdited.build_in))
                ? ""
                : Number(postEdited.build_in) <= Number(thisYear)
                ? postEdited.build_in
                : ""
            }
            invalidText={
              load.getPostLoad
                ? ""
                : isNaN(Number(postEdited.build_in))
                ? "این فیلد باید عدد باشد"
                : Number(postEdited.build_in) > Number(thisYear)
                ? `سال ساخت باید حداکثر${thisYear}باشد`
                : postEdited.build_in.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            width="col-sm-6 col-12"
            setValue={(e) =>
              setPostEdited({ ...postEdited, build_in: e.target.value })
            }
          />
          <InputPrimary
            label="متراژ"
            require={load.getPostLoad ? false : true}
            placeholder={load.getPostLoad ? "" : "مثلا 200"}
            value={isNaN(Number(postEdited.metrage)) ? "" : postEdited.metrage}
            width="col-sm-6 col-12"
            invalidText={
              load.getPostLoad
                ? ""
                : isNaN(Number(postEdited.metrage))
                ? "این فیلد باید عدد باشد"
                : postEdited.metrage.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) =>
              setPostEdited({ ...postEdited, metrage: e.target.value })
            }
          />
          {postEdited.category === "buy" ? (
            <InputPrimary
              label="قیمت هر متر مربع"
              require={load.getPostLoad ? false : true}
              placeholder={load.getPostLoad ? "" : "مثلا 15,000,000"}
              value={
                isNaN(Number(postEdited.price))
                  ? ""
                  : Number(postEdited.price).toLocaleString() != 0
                  ? Number(postEdited.price).toLocaleString()
                  : ""
              }
              invalidText={
                load.getPostLoad
                  ? ""
                  : isNaN(Number(postEdited.price))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.price).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-sm-6 col-12"
              setValue={(e) =>
                setPostEdited({
                  ...postEdited,
                  price: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : postEdited.category === "mortgage" ||
            postEdited.category === "rent" ? (
            <InputPrimary
              label="ودیعه"
              require={load.getPostLoad ? false : true}
              placeholder={load.getPostLoad ? "" : "مثلا 150,000,000"}
              value={
                isNaN(Number(postEdited.mortgage))
                  ? ""
                  : Number(postEdited.mortgage).toLocaleString() != 0
                  ? Number(postEdited.mortgage).toLocaleString()
                  : ""
              }
              invalidText={
                load.getPostLoad
                  ? ""
                  : isNaN(Number(postEdited.mortgage))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.mortgage).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-sm-6 col-12"
              setValue={(e) =>
                setPostEdited({
                  ...postEdited,
                  mortgage: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : null}
          <InputPrimary
            label="اطلاعات تماس"
            require={load.getPostLoad ? false : true}
            placeholder={load.getPostLoad ? "" : "مثلا 09302582971"}
            value={postEdited.number}
            width="col-sm-6 col-12"
            invalidText={
              load.getPostLoad
                ? ""
                : postEdited.room.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) =>
              setPostEdited({
                ...postEdited,
                number: e.target.value,
              })
            }
          />
          {postEdited.category === "buy" ? (
            <InputPrimary
              label="قیمت کل"
              value={
                isNaN(Number(postEdited.price * postEdited.metrage))
                  ? "0"
                  : Number(
                      postEdited.price * postEdited.metrage
                    ).toLocaleString()
              }
              width="col-sm-6 col-12"
              disabled={true}
            />
          ) : postEdited.category === "mortgage" ? (
            <InputPrimary
              label="اجاره"
              value="0"
              width="col-sm-6 col-12"
              disabled={true}
            />
          ) : postEdited.category === "rent" ? (
            <InputPrimary
              label="اجاره"
              require={load.getPostLoad ? false : true}
              placeholder={load.getPostLoad ? "" : "مثلا 1,000,000"}
              value={
                isNaN(Number(postEdited.rent))
                  ? ""
                  : Number(postEdited.rent).toLocaleString() != 0
                  ? Number(postEdited.rent).toLocaleString()
                  : ""
              }
              invalidText={
                load.getPostLoad
                  ? ""
                  : isNaN(Number(postEdited.rent))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.rent).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-sm-6 col-12"
              setValue={(e) =>
                setPostEdited({
                  ...postEdited,
                  rent: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : null}

          <TextAreaPrimary
            width="col-12"
            value={postEdited.description}
            placeholder={load.getPostLoad ? "" : "توضیحات..."}
            label="توضیحات"
            setValue={(e) =>
              setPostEdited({ ...postEdited, description: e.target.value })
            }
          />
        </div>
      </form>
      <div className="col-lg-5 order-first order-lg-last">
        <img
          src={defaultImage}
          className="img-fluid"
          alt="defaultImage"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default EditPost;
