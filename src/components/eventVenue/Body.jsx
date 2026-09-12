import React from "react";
import {
  eventBlueprints,
  eventPool,
  eventPorch,
  eventskyView,
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

const HIGHLIGHTS = [
  {
    number: "01",
    title: "Water & Shade",
    text: "Water features form a key part of the composition, functioning both as focal points and as elements that organize the movement and experience of the space. At the same time, the large wooden pergolas and light shading create sheltered areas for dining, gathering, and relaxation, without interrupting the visual connection to the landscape.",
  },
  {
    number: "02",
    title: "Landscape Materials",
    text: "The choice of materials is based on a natural, Mediterranean palette, with local stone, wood, light-colored surfaces, and rich planting. The architecture remains low-lying and discreet, so that it blends into the Cycladic landscape and lets the natural surroundings and the view play the leading role.",
  },
  {
    number: "03",
    title: "Private Destination",
    text: "A private villa is also part of the complex, offering the possibility of accommodation and greater privacy for organizers or event guests. The experience is completed by high-level services and amenities, including private boat access and connection to marina facilities, reinforcing the venue's character as a complete destination venue.",
  },
];

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
              The project concerns the creation of a comprehensive events and
              hospitality venue in Santorini, designed to support gatherings of
              a different character, from private events and celebrations to
              corporate gatherings and bespoke events.
            </p>
            <p>
              The core idea of the study was to create a destination that does
              not simply function as a space for hosting an event, but as a
              complete hospitality experience. The large site is organized into
              separate zones with different atmospheres and uses, allowing
              visitors to move naturally from more open, social spaces to more
              private and quiet areas.
            </p>
            <p>
              The architectural composition develops through organic layouts,
              curved pathways, and different levels, which follow the natural
              terrain and create continuous interplay between architecture,
              landscape, and water. Pools, seating areas, dining spaces, outdoor
              plazas, and covered zones are connected to one another, forming an
              environment capable of adapting to different scales and types of
              events.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="order-1 lg:col-span-7 md:order-2"
          >
            <Frame
              src={eventskyView}
              alt="Aerial view of the Santorini event venue"
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
            src={eventPool}
            alt="Pool terraces and outdoor gathering areas"
            className="aspect-[16/10] md:col-span-8 md:aspect-auto md:min-h-[28rem] lg:min-h-[36rem]"
          />
          <Frame
            src={eventPorch}
            alt="Wooden porch overlooking the landscape"
            className="aspect-[4/5] md:col-span-4 md:aspect-auto md:min-h-[28rem] lg:min-h-[36rem]"
          />
        </div>
      </section>

      <section className="section-padding mt-16 lg:mt-24">
        <div
          data-aos="fade-up"
          className={`mx-auto max-w-3xl text-center ${bodyCopy}`}
        >
          <span className="mx-auto mb-8 block h-0.5 w-16 bg-primary" />
          <p>
            The goal of the design is to create a space that can host an event
            not as an isolated occurrence, but as a multi-layered experience of
            stay, gathering, and entertainment, with an emphasis on privacy,
            flexibility, and a direct relationship with the distinctive
            landscape of Santorini.
          </p>
        </div>
      </section>

      <section className="mt-16 bg-stone-100 py-16 lg:mt-24 lg:py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-3 lg:gap-10 xl:gap-14">
            {HIGHLIGHTS.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-sm tracking-[0.25em] text-primary">
                    {item.number}
                  </span>
                  <span className="block h-px flex-1 bg-primary/35" />
                </div>
                <h3 className="mb-5 text-lg uppercase tracking-[0.18em] text-neutral-900 md:text-xl">
                  {item.title}
                </h3>
                <p className={bodyCopy}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 py-4 lg:mt-24">
        <div className="section-padding">
          <div data-aos="fade-up" className="mx-auto max-w-5xl">
            <span className="mx-auto mb-10 block h-0.5 w-16 bg-primary lg:mb-14" />
            <figure className="border border-stone-200 bg-white px-4 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <img
                src={eventBlueprints}
                alt="Site plan of the event venue"
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
