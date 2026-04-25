import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { project_1 } from "../../assets";
import "swiper/css";
import "swiper/css/scrollbar";
import { blackarrow } from "../../assets";

const Work = () => {
  const swiperRef = useRef(null);
  const projects = [
    {
      id: 1,
      date: "February 12th 2025",
      category: "Interior",
      link: "#",
      title: "Villa Spitaki",
      img: project_1,
      alt: "project_1",
      first_name: "Villa",
      last_name: "Spitaki",
    },
    {
      id: 2,
      date: "February 12th 2025",
      category: "Interior",
      link: "#",
      title: "Villa Spitaki",
      img: project_1,
      alt: "project_1",
      first_name: "Villa",
      last_name: "Spitaki",
    },
    {
      id: 3,
      date: "February 12th 2025",
      category: "Interior",
      link: "#",
      title: "Villa Spitaki",
      img: project_1,
      alt: "project_1",
      first_name: "Villa",
      last_name: "Spitaki",
    },
    {
      id: 4,
      date: "February 12th 2025",
      category: "Interior",
      link: "#",
      title: "Villa Spitaki",
      img: project_1,
      alt: "project_1",
      first_name: "Villa",
      last_name: "Spitaki",
    },
  ];

  return (
    <section className="section-padding section-margin">
      <h3 className="uppercase text-2xl lg:text-3xl text-center lg:text-end">
        our featured <span className="text-primary font-bold">works</span>
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
            <div className="relative group">
              <div className="wrapper flex gap-x-3 items-center justify-center md:justify-start mb-2">
                <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                <p className="text-base ">{project.date}</p>
                <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                <p className="text-base ">{project.category}</p>
              </div>
              <a href={project.link} title={project.title}>
                <img
                  src={project.img}
                  alt={project.alt}
                  className="relative h-105 w-full rounded-2xl object-cover transition duration-300 group-hover:brightness-50 md:h-130"
                />
                <div className="wrapper absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex gap-x-3 items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                  <h4 className="font-bold text-xl md:text-3xl lg:text-5xl tracking-wider">
                    {project.first_name}
                    <span className="text-primary">{project.last_name}</span>
                  </h4>
                  <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrapper w-full flex justify-center space-x-5 mt-3 md:mt-5 lg:mt-8">
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
    </section>
  );
};

export default Work;
