import React, { useState } from "react";
import DetailsColumn from "../components/dashboard/detailsPost/DetailsColumn";
import DetailsRow from "../components/dashboard/detailsPost/DetailsRow";
import testImage from "../test.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import FsLightbox from "fslightbox-react";
import { useContext } from "react";
import { Load } from "../context/LoadingContext";

const PostDetails = () => {
  const [toggler, setToggler] = useState(false);
  const { load, setLoad } = useContext(Load);
  console.log(load);
  const images = [{ url: testImage }, { url: testImage }, { url: testImage }];
  return (
    <>
      <div className={`row g-3 ${load ? "loading-skeleton" : ""}`}>
        <div className="col-7">
          <h5
            className={`post-title ${load ? "loading-title-post w-100" : ""}`}
          >
            خانه مستقل میرزای شیرازی مسجد سید هاخانه مستقل میرزای شیرازی مسجد
            سید ها
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
                <DetailsRow title="متراژ" data="200" border={true} />
                <DetailsRow title="اتاق" data="2" border={true} />
                <DetailsRow title="ساخت" data="1400" border={true} />
                <DetailsRow title="پارکینگ" data="ندارد" border={true} />
                <DetailsRow title="انباری" data="دارد" border={false} />
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
                <DetailsColumn title="قیمت کل" data={`3,100,000,000 تومان`} />
                <DetailsColumn title="قیمت هر متر" data={`15,500,000 تومان`} />
                <DetailsColumn title="سند" data={`دارد`} />
                <DetailsColumn title="اطلاعات تماس" data={`09302582971`} />
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
              {`خانه مستقل سه طبقه ، خیابان میرزای شیرازی ، بن بست میرسادات متراژ
زمین 86 متر ، هر طبقه 66 متر ، یک خوابه هر طبقه مستقل با امکانات
داخل کف سرامیک ، کابینت mdf
دسترسی آسان به مرکزشهر
              `}
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
            <SimpleImageSlider
              width="90%"
              height="450px"
              images={images}
              showBullets={true}
              showNavs={true}
              navSize={30}
              navStyle={2}
              navMargin={10}
              onClick={() => setToggler((prevToggler) => !prevToggler)}
            />
            <small className="text-secondary mt-2">
              برای بزرگنمایی روی تصاویر کلیک کنید
            </small>
          </div>
        )}
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[testImage, testImage, testImage]}
        exitFullscreenOnClose={true}
      />
    </>
  );
};

export default PostDetails;
