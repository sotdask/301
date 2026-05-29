import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { villaspitaki } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = 80;

const KamariStory = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const pinEl = pinRef.current;
      if (!section || !track || !pinEl) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinTrigger = ScrollTrigger.create({
          trigger: track,
          start: `top top+=${HEADER_OFFSET}`,
          end: "bottom bottom",
          pin: pinEl,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        const image = pinEl.querySelector("img");
        const refresh = () => ScrollTrigger.refresh();

        image?.addEventListener("load", refresh);
        refresh();

        return () => {
          image?.removeEventListener("load", refresh);
          pinTrigger.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding pb-16 pt-8 md:pb-20 md:pt-12 lg:pb-24 lg:pt-16"
    >
      <div className="mb-10 lg:hidden">
        <img
          src={villaspitaki}
          alt="Kamari Santorinis interior"
          className="w-full object-cover"
        />
      </div>

      <div ref={trackRef} className="lg:flex lg:items-start lg:gap-x-16 xl:gap-x-24">
        <article className="lg:w-1/2 lg:shrink-0 lg:pr-4">
          <div className="max-w-xl space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg">
            <p>
              Kamari Santorinis was conceived as a retreat shaped by the
              island&apos;s rhythm — soft textures, muted tones, and openings
              that frame the sea without competing with it.
            </p>

            <h2 className="pt-2 text-xl font-bold uppercase text-black md:text-2xl">
              The vision
            </h2>
            <p>
              From the first sketches, the priority was clarity: generous
              volumes, controlled views, and a palette drawn from local stone,
              timber, and the changing light over the caldera. Each room was
              planned to support everyday life while preserving a sense of quiet
              luxury.
            </p>
            <p>
              Interior architecture guides the experience from arrival to the
              private terraces — transitions are gradual, materials are honest,
              and every detail is meant to age gracefully in the Cycladic climate.
            </p>

            <h2 className="pt-2 text-xl font-bold uppercase text-black md:text-2xl">
              Material &amp; light
            </h2>
            <p>
              Surfaces alternate between warmth and restraint. Plaster walls, oak
              joinery, and custom metalwork create contrast without noise. Large
              openings bring in natural ventilation and frame the landscape as a
              living part of the interior.
            </p>
            <p>
              Artificial lighting follows the same logic: discreet, layered, and
              tuned for evening gatherings as much as for solitary moments at
              the end of the day.
            </p>

            <h2 className="pt-2 text-xl font-bold uppercase text-black md:text-2xl">
              Living the space
            </h2>
            <p>
              Circulation unfolds through a sequence of pauses and discoveries —
              a home designed not only to be seen, but to be lived in slowly.
              The layout separates social areas from private quarters while
              keeping the sea present throughout.
            </p>
            <p>
              The result is a contemporary Santorini residence that respects
              tradition, embraces modern comfort, and leaves room for the island
              to remain the true protagonist of the story.
            </p>
          </div>
        </article>

        <div className="hidden lg:block lg:w-1/2 lg:shrink-0">
          <div
            ref={pinRef}
            className="flex h-[calc(100svh-5rem)] items-center justify-center"
          >
            <img
              src={villaspitaki}
              alt="Kamari Santorinis interior"
              className="max-h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KamariStory;
