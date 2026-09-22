import React from "react";
import AppLink from "../global/AppLink";
import { arrow } from "../../assets";

const SingleArticle = () => {
  const singleArticles = [
    {
      id: 1,
      date: "22 September 2026",
      title:
        "The Architecture of Santorini: Form Shaped by Landscape and Light",
      description:
        "From the island's small villages to the cliffs of the Caldera, Santorini reveals an architecture that is anything but accidental, carefully and thoroughly expressing geology, climate, and the beauty of Aegean light.",
      link: "/articles/architecture-of-santorini",
    },
    {
      id: 2,
      date: "22 September 2026",
      title:
        "When the Roof Becomes the Architecture: Renovation, Wood, and Light",
      description:
        "In residential renovation, the strongest interventions are often not decorative. They are structural decisions that redefine how a house feels, how it holds light, and how daily life unfolds inside it.",
      link: "/articles/when-the-roof-becomes-the-architecture",
    },
  ];

  return (
    <>
      {singleArticles.map((singleArticle) => (
        <div key={singleArticle.id} className="border-t-2">
          <div className="section-padding">
            <div className="card flex flex-col py-6">
              <span className="font-bold text-primary">
                {singleArticle.date}
              </span>
              <div className="wrapper mx-auto mt-3 flex w-full max-w-205 flex-col justify-center">
                <AppLink
                  to={singleArticle.link}
                  className="mb-3 text-lg italic text-primary transition duration-300 hover:text-black md:text-2xl lg:text-3xl"
                >
                  {singleArticle.title}
                </AppLink>
                <p>{singleArticle.description}</p>
              </div>
              <AppLink
                to={singleArticle.link}
                className="mt-3 flex justify-end gap-x-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:translate-x-3 sm:text-base md:text-xl"
              >
                read more
                <img src={arrow} alt="" />
              </AppLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleArticle;
