"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import banner1 from "@/assets/banner/banner-1.png";
import banner2 from "@/assets/banner/banner-2.png";
import banner3 from "@/assets/banner/banner-3.png";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    className: "center mx-4",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto slider-container">
      <Slider {...settings}>
        <div className="border-black border w-[200px] rounded-md ">
          <Image
            className="mx-auto"
            src={banner1}
            width={200}
            height={200}
            alt="banner1"
          />
        </div>
        <div className="border-black border w-[200px] rounded-md ">
          <Image
            className="mx-auto"
            src={banner2}
            width={200}
            height={200}
            alt="banner2"
          />
        </div>
        <div className="border-black border w-[200px] rounded-md ">
          <Image
            className="mx-auto"
            src={banner3}
            width={168}
            height={170}
            alt="banner3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
