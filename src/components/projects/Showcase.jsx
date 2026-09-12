import React from "react";
import AppLink from "../global/AppLink";
import { villaspitaki, villahouse, villaspiti, elenikitchenLounge, eventskyView } from "../../assets";

function Showcase() {
  const projects = [
    {
      id: 1,
      title: "Kamari Santorinis",
      link: "/kamari-santorinis",
      image: villaspitaki,
      alt: villaspitaki,
    },
    {
      id: 2,
      title: "Eleni's House",
      link: "/elenis-house",
      image: elenikitchenLounge,
      alt: elenikitchenLounge,
    },
    {
      id: 3,
      title: "Event Venue",
      link: "/event-venue",
      image: eventskyView,
      alt: eventskyView,
    },
  ];

  return (
    <section className="section-margin section-padding grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="group flex justify-center">
          <AppLink
            to={project.link}
            className="relative block aspect-3/4 w-full overflow-hidden ring-1 ring-white/10 transition-all duration-500 ease-out group-hover:ring-primary/70"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />

            <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-65 transition duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
              <span className="text-center text-3xl uppercase tracking-wide font-bold text-white transition-all duration-500 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {project.title}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <span className="text-sm uppercase tracking-widest italic text-white transition-all duration-500 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                View Project
              </span>
              <span className="h-0.5 w-14 bg-primary transition-all duration-500 lg:w-0 lg:group-hover:w-14" />
            </div>
          </AppLink>
        </div>
      ))}
    </section>
  );
}

export default Showcase;
