import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { project_1 } from "../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Work = () => {
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
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
                    {project.first_name}{" "}
                    <span className="text-primary">{project.last_name}</span>
                  </h4>
                  <span className="block h-0.5 w-6 bg-primary sm:w-16" />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Work;
