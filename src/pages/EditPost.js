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
import testImage from "../test.jpg";

const EditPost = () => {
  const { post, setPost } = useContext(EditLoads);
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
  console.log(postEdited);
  useEffect(() => {
    setLoad({ ...load, getPostLoad: true });
    const request = async () => {
      const data = await getPost(id);
      if (data.code === "200") {
        setPost(data.post[0]);
        setPostEdited(data.post[0]);
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ها دریافت نشد!!",
        });
      }
      setLoad({ ...load, getPostLoad: false });
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
      <form className="col-7">
        <div className="row justify-content-between g-6">
          <InputPrimary
            label="عنوان آگهی"
            require={true}
            placeholder="مثلا 85 متری نوساز ..."
            value={postEdited.title}
            width="col-12"
            invalidText={postEdited.title === "" ? "این فیلد الزامی است" : ""}
            setValue={(e) =>
              setPostEdited({ ...postEdited, title: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="سند"
            name="document"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.document}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, document: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="پارکینگ"
            name="parking"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.parking}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, parking: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="انباری"
            name="warehouse"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={postEdited.warehouse}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, warehouse: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="دسته بندی"
            name="category"
            labelCheckOut1="خرید"
            labelCheckOut2="رهن"
            labelCheckOut3="اجاره"
            defaultChecked={postEdited.category}
            value1="buy"
            value2="mortgage"
            value3="rent"
            require={true}
            onChangeHandler={(e) =>
              setPostEdited({ ...postEdited, category: e.target.value })
            }
          />
          <InputPrimary
            label="تعداد اتاق"
            require={true}
            placeholder="مثلا 2"
            value={isNaN(Number(postEdited.room)) ? "" : postEdited.room}
            width="col-6"
            invalidText={
              isNaN(Number(postEdited.room))
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
            require={true}
            placeholder="مثلا 1395"
            value={
              isNaN(Number(postEdited.build_in))
                ? ""
                : Number(postEdited.build_in) <= Number(thisYear)
                ? postEdited.build_in
                : ""
            }
            invalidText={
              isNaN(Number(postEdited.build_in))
                ? "این فیلد باید عدد باشد"
                : Number(postEdited.build_in) > Number(thisYear)
                ? `سال ساخت باید حداکثر${thisYear}باشد`
                : postEdited.room.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            width="col-6"
            setValue={(e) =>
              setPostEdited({ ...postEdited, build_in: e.target.value })
            }
          />
          <InputPrimary
            label="متراژ"
            require={true}
            placeholder="مثلا 200"
            value={isNaN(Number(postEdited.metrage)) ? "" : postEdited.metrage}
            width="col-6"
            invalidText={
              isNaN(Number(postEdited.metrage))
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
              require={true}
              placeholder="مثلا 15,000,000"
              value={
                isNaN(Number(postEdited.price))
                  ? ""
                  : Number(postEdited.price).toLocaleString() != 0
                  ? Number(postEdited.price).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(postEdited.price))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.price).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
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
              require={true}
              placeholder="مثلا 150,000,000"
              value={
                isNaN(Number(postEdited.mortgage))
                  ? ""
                  : Number(postEdited.mortgage).toLocaleString() != 0
                  ? Number(postEdited.mortgage).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(postEdited.mortgage))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.mortgage).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
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
            require={true}
            placeholder="مثلا 09302582971"
            value={postEdited.number}
            width="col-6"
            invalidText={
              postEdited.room.trim() === "" ? "این فیلد الزامی است" : ""
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
              width="col-6"
              disabled={true}
            />
          ) : postEdited.category === "mortgage" ? (
            <InputPrimary
              label="اجاره"
              value="0"
              width="col-6"
              disabled={true}
            />
          ) : postEdited.category === "rent" ? (
            <InputPrimary
              label="اجاره"
              require={true}
              placeholder="مثلا 1,000,000"
              value={
                isNaN(Number(postEdited.rent))
                  ? ""
                  : Number(postEdited.rent).toLocaleString() != 0
                  ? Number(postEdited.rent).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(postEdited.rent))
                  ? "این فیلد باید عدد باشد"
                  : String(postEdited.rent).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
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
            placeholder="توضیحات..."
            label="توضیحات"
            setValue={(e) =>
              setPostEdited({ ...postEdited, description: e.target.value })
            }
          />
        </div>
      </form>
      <div className="col-5">
        <img
          src={testImage}
          className="img-fluid"
          alt="postImage"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default EditPost;
