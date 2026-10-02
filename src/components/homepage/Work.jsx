import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { kamariKitchenIsland, elenikitchenLounge, eventskyView } from "../../assets";
import "swiper/css";
import "swiper/css/scrollbar";
import { blackarrow } from "../../assets";
import AppLink from "../global/AppLink";

const Work = () => {
  const { t } = useTranslation("home");
  const swiperRef = useRef(null);
  const projects = [
    {
      id: 1,
      categoryKey: "interior",
      link: "/kamari-santorinis",
      title: "Kamari Santorinis",
      img: kamariKitchenIsland,
      alt: "Kamari kitchen island",
      first_name: "Kamari ",
      last_name: "Santorinis",
    },
    {
      id: 2,
      categoryKey: "renovation",
      link: "/elenis-house",
      title: "Eleni's House",
      img: elenikitchenLounge,
      alt: "elenikitchenLounge",
      first_name: "Eleni's ",
      last_name: "House",
    },
    {
      id: 3,
      categoryKey: "architecture",
      link: "/event-venue",
      title: "Event Venue",
      img: eventskyView,
      alt: "eventskyView",
      first_name: "Event ",
      last_name: "Venue",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="section-padding section-margin"
    >
      <h3 className="text-center text-2xl uppercase lg:text-end lg:text-3xl">
        {t("work.title")}{" "}
        <span className="font-bold text-primary">{t("work.titleAccent")}</span>
      </h3>
      <Swiper
        className="site-swiper mt-10"
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group relative">
              <div className="wrapper mb-2 flex items-center justify-center gap-x-3 md:justify-start">
                <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                <p className="text-base">{t("work.date")}</p>
                <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                <p className="text-base">
                  {t(`work.categories.${project.categoryKey}`)}
                </p>
              </div>
              <AppLink to={project.link} title={project.title}>
                <img
                  src={project.img}
                  alt={project.alt}
                  className="relative h-105 w-full rounded-2xl object-cover transition duration-300 group-hover:brightness-50 md:h-130"
                />
                <div className="wrapper absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="block h-0.5 w-6 bg-primary transition-all duration-500 sm:w-16 lg:w-0 lg:group-hover:w-16" />
                  <h4 className="text-xl font-bold tracking-wider md:text-3xl lg:text-5xl">
                    {project.first_name}
                    <span className="text-primary">{project.last_name}</span>
                  </h4>
                  <span className="block h-0.5 w-6 bg-primary transition-all duration-500 sm:w-16 lg:w-0 lg:group-hover:w-16" />
                </div>
              </AppLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrapper mt-3 flex w-full justify-center space-x-5 md:mt-5 lg:mt-8">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="group relative inline-block cursor-pointer overflow-hidden border-2 border-black px-6 py-3 text-black"
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
          className="group relative inline-block cursor-pointer overflow-hidden border-2 border-black px-6 py-3 text-black"
        >
          <img
            src={blackarrow}
            alt="next_slide"
            className="transition duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </section>
  );
};

export default Work;
