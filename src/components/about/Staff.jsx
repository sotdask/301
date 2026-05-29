import React, { useRef } from "react";
import AppLink from "../global/AppLink";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { staff } from "../../assets";
import { blackarrow } from "../../assets";

const Staff = () => {
  const swiperRef = useRef(null);
  const members = [
    {
      id: 1,
      title: "founding partner",
      link: "#",
      image: staff,
      alt: "staff name",
      name: "sotirios daskalou",
      profession: "architecture & design",
    },
    {
      id: 2,
      title: "founding partner",
      link: "#",
      image: staff,
      alt: "staff name",
      name: "sotirios daskalou",
      profession: "architecture & design",
    },
    {
      id: 3,
      title: "founding partner",
      link: "#",
      image: staff,
      alt: "staff name",

      name: "sotirios daskalou",
      profession: "architecture & design",
    },
    {
      id: 4,
      title: "founding partner",
      link: "#",
      image: staff,
      alt: "staff name",

      name: "sotirios daskalou",
      profession: "architecture & design",
    },
  ];

  return (
    <div className="section-margin section-padding">
      <h3  data-aos="fade-up" data-aos-duration="1000" className="uppercase text-2xl lg:text-3xl text-center lg:text-start mb-3 lg:mb-4">
        meet our <span className="text-primary font-bold">staff</span>
      </h3>
      <p className="max-w-110 text-center lg:text-start">
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <Swiper
        className="site-swiper mt-10 mb-6"
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
        {members.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex! justify-center lg:justify-start"
          >
            <AppLink
              to={member.link}
              title={member.name}
              className="group overflow-hidden relative"
            >
              <img
                src={member.image}
                alt={member.alt}
                className="brightness-75 lg:brightness-100 transition duration-300 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="wrapper opacity-100 lg:opacity-0 absolute bottom-0 left-5 duration-300 transition group-hover:opacity-100">
                <h5 className="text-primary uppercase tracking-wider text-lg">
                  {member.title}
                </h5>
                <h4 className="mt-1 mb-3 text-white uppercase tracking-wider text-xl">
                  {member.name}
                </h4>
                <span className="block h-0.5 w-8 bg-primary sm:w-18" />
                <h5 className="mt-3 mb-5 text-primary uppercase tracking-wider text-base font-bold">
                  {member.profession}
                </h5>
              </div>
            </AppLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrapper w-full flex lg:hidden justify-center space-x-5 mt-3 md:mt-5 lg:mt-8">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
        >
          <img
            src={blackarrow}
            alt="previous_slide"
            className="rotate-180 transition duration-300 group-hover:-translate-x-2"
          />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
        >
          <img
            src={blackarrow}
            alt="next_slide"
            className="transition duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Staff;
