import React from "react";
import {
  eleniBlueprints,
  eleniHall,
  eleniKitchen,
  eleniLounge,
  elenikitchenLounge,
} from "../../assets";

const Frame = ({ src, alt, className = "", imgClassName = "" }) => (
  <figure className={`overflow-hidden bg-stone-100 ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03] ${imgClassName}`}
    />
  </figure>
);

const bodyCopy =
  "text-[clamp(0.9375rem,0.82rem+0.55vw,1.125rem)] leading-[1.75] sm:leading-[1.8]";

const Body = () => {
  return (
    <article className="section-margin text-neutral-700">
      <section className="section-padding">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div
            data-aos="fade-up"
            className={`flex flex-col gap-5 lg:col-span-5 order-2 md:order-1 ${bodyCopy}`}
          >
            <span className="block h-0.5 w-16 bg-primary" />
            <p>
              The residence in Heraklion, Crete, is a comprehensive renovation
              of an existing space, with the primary goal of creating a bright,
              open, and functional interior, while maintaining a strong dialogue
              between the old shell and the new interventions.{" "}
            </p>
            <p>
              The central element of the design is the new wooden roof with
              exposed structural elements, which gives the space height, warmth,
              and a strong architectural identity. Taking advantage of the
              increased interior height allowed for the creation of a loft,
              designed as a lightweight metal structure, which adds a second
              level of use without limiting the sense of a unified floor plan.
            </p>
            <p>
              The organization of the residence is based on a clear separation
              between day and private zones. The living room, dining room, and
              kitchen spaces develop in continuity, creating a single space for
              everyday life, while the more private functions are placed in the
              quieter sections of the house.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="lg:col-span-7 order-1 md:order-2"
          >
            <Frame
              src={eleniHall}
              alt="Dining room with custom wooden partition and bookcase"
              className="aspect-16/10"
            />
          </div>
        </div>
      </section>

      <section className="section-padding mt-16 lg:mt-24">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6"
        >
          <Frame
            src={eleniKitchen}
            alt="Living room with vaulted ceiling, fireplace and soft seating"
            className="aspect-[16/10] md:col-span-8 md:aspect-auto md:min-h-[28rem] lg:min-h-[36rem]"
          />
          <Frame
            src={eleniLounge}
            alt="Living room looking toward the wooden lattice partition"
            className="aspect-[4/5] md:col-span-4 md:aspect-auto md:min-h-[28rem] lg:min-h-[36rem]"
          />
        </div>
      </section>

      <section className="section-padding mt-16 lg:mt-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-aos="fade-up" className="lg:col-span-5">
            <Frame
              src={elenikitchenLounge}
              alt="Reading corner with vaulted ceiling, cove lighting and wood cabinetry"
              className="aspect-4/5"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className={`flex flex-col gap-5 lg:col-span-7 ${bodyCopy}`}
          >
            <span className="block h-0.5 w-16 bg-primary" />
            <p>
              The color palette remains soft and neutral, with white and earthy
              surfaces that act as a backdrop for the warm wood of the roof and
              furniture. The contrast between the natural textures of the wood,
              the clean white surfaces, and the slender metal elements of the
              loft creates a contemporary yet familiar environment.
            </p>
            <p>
              The large openings and the through-organization allow natural
              light to diffuse throughout the interior during the day, while the
              choice of minimal materials and clean geometries lets the roof and
              the structure of the space become the main protagonists of the
              composition.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding mt-16 lg:mt-24">
        <div
          data-aos="fade-up"
          className={`mx-auto max-w-3xl text-center ${bodyCopy}`}
        >
          <span className="mx-auto mb-8 block h-0.5 w-16 bg-primary" />
          <p>
            The result is a residence that combines the Mediterranean feel of
            natural wood and light with a contemporary, minimal architectural
            language, creating a space that is calm and bright.{" "}
          </p>
        </div>
      </section>

      <section className="mt-16 bg-stone-100 py-16 lg:mt-24 lg:py-24">
        <div className="section-padding">
          <div data-aos="fade-up" className="mx-auto max-w-5xl">
            <span className="mx-auto mb-10 block h-0.5 w-16 bg-primary lg:mb-14" />
            <figure className="border border-stone-200 bg-white px-4 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <img
                src={eleniBlueprints}
                alt="Floor plan of the Kamari residence"
                loading="lazy"
                className="mx-auto h-auto w-full max-w-3xl object-contain"
              />
            </figure>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Body;
