import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { staff } from "../../assets";
import { blackarrow } from "../../assets";

const Staff = () => {
  const swiperRef = useRef(null);

  return (
    <div className="section-margin section-padding">
      <h3 className="uppercase text-2xl lg:text-3xl text-center lg:text-start mb-3 lg:mb-4">
        meet our <span className="text-primary font-bold">staff</span>
      </h3>
      <p className="max-w-110">
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <Swiper
        className="site-swiper mt-10"
        modules={Navigation}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="flex! justify-center lg:justify-start">
          <img src={staff} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center lg:justify-start">
          <img src={staff} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center lg:justify-start">
          <img src={staff} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center lg:justify-start">
          <img src={staff} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="wrapper w-full flex lg:hidden justify-center space-x-5 mt-3 md:mt-5 lg:mt-8">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
        >
          <img src={blackarrow} alt="previous_slide" className="rotate-180 transition duration-300 group-hover:-translate-x-2" />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
        >
          <img src={blackarrow} alt="next_slide"  className="transition duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default Staff;
