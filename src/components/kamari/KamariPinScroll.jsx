import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { villaspitaki } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const KamariPinScroll = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinEl = pinRef.current;
      if (!section || !pinEl) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: pinEl,
          anticipatePin: 1,
  pinSpacing: false,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="section-padding">
      <img
        src={villaspitaki}
        alt="Kamari Santorinis"
        className="mb-10 w-full object-cover lg:hidden"
      />

      <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
        <article className="max-w-xl space-y-6 py-8 text-base leading-relaxed text-neutral-700 md:text-lg lg:pt-24 lg:pb-16">
          <h2 className="text-xl font-bold uppercase text-black md:text-2xl">
            The vision
          </h2>
          <p>
            From the first sketches, the priority was clarity: generous volumes,
            controlled views, and a palette drawn from local stone, timber, and
            the changing light over the caldera. Each room was planned to
            support everyday life while preserving a sense of quiet luxury.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos sint, consequuntur doloremque natus debitis obcaecati? Itaque,
            aut impedit. Ullam dolores accusamus ducimus. Accusantium,
            laboriosam ab aliquam pariatur quae voluptas.
          </p>

          <h2 className="text-xl font-bold uppercase text-black md:text-2xl">
            Material & light
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos sint, consequuntur doloremque natus debitis obcaecati? Itaque,
            aut impedit. Ullam dolores accusamus ducimus. Accusantium,
            laboriosam ab aliquam pariatur quae voluptas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos sint, consequuntur doloremque natus debitis obcaecati? Itaque,
            aut impedit. Ullam dolores accusamus ducimus. Accusantium,
            laboriosam ab aliquam pariatur quae voluptas.
          </p>

          <h2 className="text-xl font-bold uppercase text-black md:text-2xl">
            Living the space
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos sint, consequuntur doloremque natus debitis obcaecati? Itaque,
            aut impedit. Ullam dolores accusamus ducimus. Accusantium,
            laboriosam ab aliquam pariatur quae voluptas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos sint, consequuntur doloremque natus debitis obcaecati? Itaque,
            aut impedit. Ullam dolores accusamus ducimus. Accusantium,
            laboriosam ab aliquam pariatur quae voluptas. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Eligendi eos sint, consequuntur
            doloremque natus debitis obcaecati? Itaque, aut impedit. Ullam
            dolores accusamus ducimus. Accusantium, laboriosam ab aliquam
            pariatur quae voluptas.
          </p>
        </article>

        <div
          ref={pinRef}
          className="px-12 relative hidden h-svh items-center justify-center lg:flex"
        >
          <img
            src={villaspitaki}
            alt="Kamari Santorinis"
            className="max-h-[85vh] w-full object-contain pt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default KamariPinScroll;
