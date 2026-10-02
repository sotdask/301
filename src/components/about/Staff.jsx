import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { eleni, marios, giorgos, blackarrow } from "../../assets";

const Staff = () => {
  const { t } = useTranslation("about");
  const { t: tc } = useTranslation("common");
  const swiperRef = useRef(null);
  const members = [
    {
      id: 1,
      image: giorgos,
      alt: t("staff.names.giorgos"),
      nameKey: "staff.names.giorgos",
    },
    {
      id: 2,
      image: eleni,
      alt: t("staff.names.eleni"),
      nameKey: "staff.names.eleni",
    },
    {
      id: 3,
      image: marios,
      alt: t("staff.names.marios"),
      nameKey: "staff.names.marios",
    },
  ];

  return (
    <div className="section-margin section-padding">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="uppercase text-2xl lg:text-3xl text-center lg:text-start mb-3 lg:mb-4"
      >
        {t("staff.title")}{" "}
        <span className="text-primary font-bold">{t("staff.titleAccent")}</span>
      </h3>
      <p className="max-w-110 text-center lg:text-start">{t("staff.intro")}</p>
      <Swiper
        className="site-swiper mt-10 mb-6"
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
      >
        {members.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex! justify-center lg:justify-start"
          >
            <div className="group relative block aspect-3/4 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.alt}
                className="absolute inset-0 h-full w-full object-cover object-top brightness-75 transition duration-300 group-hover:scale-110 group-hover:brightness-75 lg:brightness-100"
              />
              <div className="wrapper absolute bottom-0 left-5 opacity-100 transition duration-300 lg:opacity-0 group-hover:opacity-100">
                <h5 className="text-lg uppercase tracking-wider text-primary">
                  {t("staff.titleRole")}
                </h5>
                <h4 className="mt-1 mb-3 text-xl uppercase tracking-wider text-white">
                  {t(member.nameKey)}
                </h4>
                <span className="block h-0.5 w-8 bg-primary sm:w-18" />
                <h5 className="mt-3 mb-5 text-base font-bold uppercase tracking-wider text-primary">
                  {t("staff.profession")}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrapper w-full flex lg:hidden justify-center space-x-5 mt-3 md:mt-5 lg:mt-8">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
          aria-label={tc("a11y.prevSlide")}
        >
          <img
            src={blackarrow}
            alt=""
            aria-hidden="true"
            className="rotate-180 transition duration-300 group-hover:-translate-x-2"
          />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group cursor-pointer"
          aria-label={tc("a11y.nextSlide")}
        >
          <img
            src={blackarrow}
            alt=""
            aria-hidden="true"
            className="transition duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Staff;
