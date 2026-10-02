import React from "react";
import { useTranslation } from "react-i18next";
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

const Body = () => {
  const { t } = useTranslation("eventVenue");
  const highlights = [
    { number: "01", title: t("body.h1"), text: t("body.t1") },
    { number: "02", title: t("body.h2"), text: t("body.t2") },
    { number: "03", title: t("body.h3"), text: t("body.t3") },
  ];

  return (
    <article className="section-margin text-neutral-700">
      <section className="section-padding">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div
            data-aos="fade-up"
            className={`flex flex-col gap-5 lg:col-span-5 order-2 md:order-1 ${bodyCopy}`}
          >
            <span className="block h-0.5 w-16 bg-primary" />
            <p>{t("body.p1")}</p>
            <p>{t("body.p2")}</p>
            <p>{t("body.p3")}</p>
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
          <p>{t("body.p4")}</p>
        </div>
      </section>

      <section className="mt-16 bg-stone-100 py-16 lg:mt-24 lg:py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-3 lg:gap-10 xl:gap-14">
            {highlights.map((item, index) => (
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
