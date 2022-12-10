import React, { useState } from "react";
import DetailsColumn from "../components/dashboard/detailsPost/DetailsColumn";
import DetailsRow from "../components/dashboard/detailsPost/DetailsRow";
import testImage from "../test.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import FsLightbox from "fslightbox-react";

const PostDetails = () => {
  const [toggler, setToggler] = useState(false);
  const images = [{ url: testImage }, { url: testImage }, { url: testImage }];
  return (
    <>
      <div className="row g-3">
        <div className="col-7">
          <h5 className="post-title">
            خانه مستقل میرزای شیرازی مسجد سید هاخانه مستقل میرزای شیرازی مسجد
            سید ها
          </h5>
          <div className="details-row d-flex align-items-center justify-content-center w-100 border-bottom py-5">
            <DetailsRow title="متراژ" data="200" border={true} />
            <DetailsRow title="اتاق" data="2" border={true} />
            <DetailsRow title="ساخت" data="1400" border={true} />
            <DetailsRow title="پارکینگ" data="ندارد" border={true} />
            <DetailsRow title="انباری" data="دارد" border={false} />
          </div>
          <div className="details-column details-row d-flex flex-column">
            <DetailsColumn title="قیمت کل" data={`3,100,000,000 تومان`} />
            <DetailsColumn title="قیمت هر متر" data={`15,500,000 تومان`} />
            <DetailsColumn title="سند" data={`دارد`} />
            <DetailsColumn title="اطلاعات تماس" data={`09302582971`} />
          </div>
          <div className="desc mt-3">
            <h6 className="fw-bold">توضیحات</h6>
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
