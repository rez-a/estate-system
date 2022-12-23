import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import CheckOutPrimary from "../components/shared/CheckOutPrimary";
import InputPrimary from "../components/shared/InputPrimary";
import TextAreaPrimary from "../components/shared/TextAreaPrimary";
import { NewPost } from "../context/NewPostContext";
import convertPersianNumberToEnglish from "../helper/convertPersianNumberToEnglish";
import { convertSpliterToNumber } from "../helper/convertSpliterToNumber";
import defaultImage from "../assets/images/defaultImage.jpg";

const CreatePost = () => {
  const date = new Date();
  const thisYear = convertPersianNumberToEnglish(
    date.toLocaleDateString("fa-IR").split("/")[0]
  );
  const { setNewPost } = useContext(NewPost);
  const [post, setPost] = useState({
    build_in: "",
    category: "",
    description: "",
    document: "",
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
    if (post.category === "buy") {
      setNewPost({ ...post, rent: 0, mortgage: 0 });
    } else if (post.category === "mortgage") {
      setNewPost({ ...post, rent: 0, price: 0 });
    } else if (post.category === "rent") {
      setNewPost({ ...post, price: 0 });
    } else {
      setNewPost({ ...post });
    }
  }, [post]);
  return (
    <div className="row g-3">
      <form className="col-7">
        <div className="row justify-content-between g-6">
          <InputPrimary
            label="عنوان آگهی"
            require={true}
            placeholder="مثلا 85 متری نوساز ..."
            value={post.title}
            width="col-12"
            invalidText={post.title === "" ? "این فیلد الزامی است" : ""}
            setValue={(e) => setPost({ ...post, title: e.target.value })}
          />
          <CheckOutPrimary
            width="col-6"
            label="سند"
            name="document"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={post.document}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPost({ ...post, document: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="پارکینگ"
            name="parking"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={post.parking}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPost({ ...post, parking: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="انباری"
            name="warehouse"
            labelCheckOut1="دارد"
            labelCheckOut2="ندارد"
            defaultChecked={post.warehouse}
            value1="1"
            value2="0"
            require={true}
            onChangeHandler={(e) =>
              setPost({ ...post, warehouse: e.target.value })
            }
          />
          <CheckOutPrimary
            width="col-6"
            label="دسته بندی"
            name="category"
            labelCheckOut1="خرید"
            labelCheckOut2="رهن"
            labelCheckOut3="اجاره"
            defaultChecked={post.category}
            value1="buy"
            value2="mortgage"
            value3="rent"
            require={true}
            onChangeHandler={(e) =>
              setPost({ ...post, category: e.target.value })
            }
          />
          <InputPrimary
            label="تعداد اتاق"
            require={true}
            placeholder="مثلا 2"
            value={isNaN(Number(post.room)) ? "" : post.room}
            width="col-6"
            invalidText={
              isNaN(Number(post.room))
                ? "این فیلد باید عدد باشد"
                : post.room.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) => setPost({ ...post, room: e.target.value })}
          />
          <InputPrimary
            label="سال ساخت"
            require={true}
            placeholder="مثلا 1395"
            value={
              isNaN(Number(post.build_in))
                ? ""
                : Number(post.build_in) <= Number(thisYear)
                ? post.build_in
                : ""
            }
            invalidText={
              isNaN(Number(post.build_in))
                ? "این فیلد باید عدد باشد"
                : Number(post.build_in) > Number(thisYear)
                ? `سال ساخت باید حداکثر${thisYear}باشد`
                : post.build_in.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            width="col-6"
            setValue={(e) => setPost({ ...post, build_in: e.target.value })}
          />
          <InputPrimary
            label="متراژ"
            require={true}
            placeholder="مثلا 200"
            value={isNaN(Number(post.metrage)) ? "" : post.metrage}
            width="col-6"
            invalidText={
              isNaN(Number(post.metrage))
                ? "این فیلد باید عدد باشد"
                : post.metrage.trim() === ""
                ? "این فیلد الزامی است"
                : ""
            }
            setValue={(e) => setPost({ ...post, metrage: e.target.value })}
          />
          {post.category === "buy" ? (
            <InputPrimary
              label="قیمت هر متر مربع"
              require={true}
              placeholder="مثلا 15,000,000"
              value={
                isNaN(Number(post.price))
                  ? ""
                  : Number(post.price).toLocaleString() != 0
                  ? Number(post.price).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(post.price))
                  ? "این فیلد باید عدد باشد"
                  : String(post.price).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
              setValue={(e) =>
                setPost({
                  ...post,
                  price: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : post.category === "mortgage" || post.category === "rent" ? (
            <InputPrimary
              label="ودیعه"
              require={true}
              placeholder="مثلا 150,000,000"
              value={
                isNaN(Number(post.mortgage))
                  ? ""
                  : Number(post.mortgage).toLocaleString() != 0
                  ? Number(post.mortgage).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(post.mortgage))
                  ? "این فیلد باید عدد باشد"
                  : String(post.mortgage).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
              setValue={(e) =>
                setPost({
                  ...post,
                  mortgage: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : null}
          <InputPrimary
            label="اطلاعات تماس"
            require={true}
            placeholder="مثلا 09302582971"
            value={post.number}
            width="col-6"
            invalidText={post.room.trim() === "" ? "این فیلد الزامی است" : ""}
            setValue={(e) =>
              setPost({
                ...post,
                number: e.target.value,
              })
            }
          />
          {post.category === "buy" ? (
            <InputPrimary
              label="قیمت کل"
              value={
                isNaN(Number(post.price * post.metrage))
                  ? "0"
                  : Number(post.price * post.metrage).toLocaleString()
              }
              width="col-6"
              disabled={true}
            />
          ) : post.category === "mortgage" ? (
            <InputPrimary
              label="اجاره"
              value="0"
              width="col-6"
              disabled={true}
            />
          ) : post.category === "rent" ? (
            <InputPrimary
              label="اجاره"
              require={true}
              placeholder="مثلا 1,000,000"
              value={
                isNaN(Number(post.rent))
                  ? ""
                  : Number(post.rent).toLocaleString() != 0
                  ? Number(post.rent).toLocaleString()
                  : ""
              }
              invalidText={
                isNaN(Number(post.rent))
                  ? "این فیلد باید عدد باشد"
                  : String(post.rent).trim() === ""
                  ? "این فیلد الزامی است"
                  : ""
              }
              width="col-6"
              setValue={(e) =>
                setPost({
                  ...post,
                  rent: convertSpliterToNumber(e.target.value),
                })
              }
            />
          ) : null}
          <TextAreaPrimary
            width="col-12"
            value={post.description}
            placeholder="توضیحات..."
            label="توضیحات"
            setValue={(e) => setPost({ ...post, description: e.target.value })}
          />
        </div>
      </form>
      <div className="col-5">
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

export default CreatePost;
