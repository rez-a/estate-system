import React, { useEffect, useState } from "react";
import DetailsColumn from "../components/dashboard/detailsPost/DetailsColumn";
import DetailsRow from "../components/dashboard/detailsPost/DetailsRow";
import { useParams } from "react-router-dom";
import { getPost } from "../services/dashboard";
import Toast from "../helper/toast";
import defaultImage from "../assets/images/defaultImage.jpg";

const PostDetails = () => {
  const [load, setLoad] = useState(false);
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setLoad(true);
    const request = async () => {
      const data = await getPost(id);
      if (data.code === "200") {
        setPost(data.post[0]);
        setLoad(false);
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ها دریافت نشد!!",
        });
      }
    };
    request();
  }, []);
  return (
    <>
      <div className={`row g-3 ${load ? "loading-skeleton" : ""}`}>
        <div className="col-7">
          <h5
            className={`post-title ${load ? "loading-title-post w-100" : ""}`}
          >
            {post.title}
          </h5>
          <div className="details-row d-flex align-items-center justify-content-center w-100 border-bottom py-5">
            {load ? (
              [...Array(5)].map((_, index) => (
                <DetailsRow
                  key={index}
                  title="_____"
                  data="_____"
                  border={index < 4 ? true : false}
                />
              ))
            ) : (
              <>
                <DetailsRow title="متراژ" data={post.metrage} border={true} />
                <DetailsRow title="اتاق" data={post.room} border={true} />
                <DetailsRow title="ساخت" data={post.build_in} border={true} />
                <DetailsRow
                  title="پارکینگ"
                  data={Number(post.parking) === 1 ? "دارد" : "ندارد"}
                  border={true}
                />
                <DetailsRow
                  title="انباری"
                  data={Number(post.warehouse) === 1 ? "دارد" : "ندارد"}
                  border={false}
                />
              </>
            )}
          </div>
          <div className="details-column details-row d-flex flex-column">
            {load ? (
              [...Array(4)].map((_, index) => (
                <DetailsColumn
                  key={index}
                  title="____________________"
                  data="____________________"
                />
              ))
            ) : (
              <>
                <DetailsColumn
                  title={post.category === "buy" ? "قیمت کل" : "ودیعه"}
                  data={`${
                    post.category === "buy"
                      ? (
                          Number(post.price) * Number(post.metrage)
                        ).toLocaleString()
                      : Number(post.mortgage).toLocaleString()
                  } تومان`}
                />
                <DetailsColumn
                  title={
                    post.category === "buy" ? "قیمت هر متر" : "اجاره ماهانه"
                  }
                  data={`${
                    post.category === "buy"
                      ? Number(post.price).toLocaleString()
                      : Number(post.rent).toLocaleString()
                  } تومان`}
                />
                <DetailsColumn
                  title="سند"
                  data={Number(post.document) === 1 ? "دارد" : "ندارد"}
                />
                <DetailsColumn title="اطلاعات تماس" data={post.number} />
              </>
            )}
          </div>
          <div className="desc mt-3">
            {!load && <h6 className="fw-bold">توضیحات</h6>}
            <pre
              className="text-end text-secondary"
              style={{
                fontFamily: "Estedad",
                fontWeight: 400,
                overflow: "hidden",
              }}
            >
              {post.description}
            </pre>
          </div>
        </div>
        {load ? (
          <div className="col-5 loading-skeleton">
            <div
              className="w-100"
              style={{
                height: "400px",
                backgroundColor: "#eee",
              }}
            ></div>
          </div>
        ) : (
          <div className="col-5 position-relative d-flex flex-column justify-content-start align-items-center">
            <img
              src={defaultImage}
              alt="defaultImage"
              className="img-fluid w-100"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
