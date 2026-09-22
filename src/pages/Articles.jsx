import React from "react";
import SingleArticle from "../components/articles/SingleArticle";

function Articles() {
  return (
    <section>
      <div className="section-padding section-margin pt-22 flex flex-col items-center">
        <h1 className="uppercase text-2xl lg:text-3xl text-center">
          articles by our <span className="text-primary font-bold">studio</span>
        </h1>
        <p className="max-w-175 mt-3 lg:mt-5 text-center">
          We delve into the world of Architecture, exploring the latest trends, regulations and best practices.
        </p>
      </div>
      <SingleArticle />
    </section>
  );
}

export default Articles;
