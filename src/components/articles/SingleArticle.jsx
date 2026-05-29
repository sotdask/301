import React from "react";
import AppLink from "../global/AppLink";
import { arrow } from "../../assets";

const SingleArticle = () => {
  const singleArticles = [
    {
      id: 1,
      date: "20 May 2026",
      title: "Minimal Living: ο Xώρος Aναπνέει με Λιγότερα.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos nam beatae sequi natus ut neque. Beatae culpa sint consequuntur, et quos maiores, odio maxime ea optio vero illo.",
      link: "#",
    },
    {
      id: 2,
      date: "20 May 2026",
      title: "Η Επιστροφή του Φυσικού Υλικού στη Σύγχρονη Κατοικία.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos nam beatae sequi natus ut neque. Beatae culpa sint consequuntur, et quos maiores, odio maxime ea optio vero illo.",
      link: "#",
    },
    {
      id: 3,
      date: "20 May 2026",
      title: "Minimal Living: ο Xώρος Aναπνέει με Λιγότερα.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos nam beatae sequi natus ut neque. Beatae culpa sint consequuntur, et quos maiores, odio maxime ea optio vero illo.",
      link: "#",
    },
    {
      id: 4,
      date: "20 May 2026",
      title: "Minimal Living: ο Xώρος Aναπνέει με Λιγότερα.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos nam beatae sequi natus ut neque. Beatae culpa sint consequuntur, et quos maiores, odio maxime ea optio vero illo.",
      link: "#",
    },
  ];

  return (
    <>
      {singleArticles.map((singleArticle) => (
        <div key={singleArticle.id} className="border-t-2">
          <div className="section-padding">
            <div className="card py-6 flex flex-col">
              <span className="text-primary font-bold">{singleArticle.date}</span>
              <div className="wrapper mx-auto max-w-205 mt-3 flex w-full flex-col justify-center">
                <a
                  href={singleArticle.link}
                  className="mb-3 text-primary text-lg md:text-2xl lg:text-3xl italic transition duration-300 hover:text-black"
                >
                  {singleArticle.title}
                </a>
                <p>{singleArticle.description}</p>
              </div>
              <AppLink
                to={singleArticle.link}
                className="text-sm mt-3 flex gap-x-3 justify-end uppercase tracking-wider text-primary transition duration-300 sm:text-base md:text-xl hover:translate-x-3"
              >
                read more
                <img src={arrow} alt="" />
              </AppLink>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default SingleArticle;
