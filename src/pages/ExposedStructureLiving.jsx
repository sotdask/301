import React from "react";
import { Link } from "react-router-dom";
import { blackarrow } from "../assets";

function ExposedStructureLiving() {
  return (
    <article className="bg-white text-neutral-800">
      <header className="section-padding pt-28 pb-12 md:pt-36 md:pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-x-2 text-sm uppercase tracking-wider text-primary transition duration-300 hover:-translate-x-1"
          >
            <img src={blackarrow} alt="" className="rotate-180 opacity-70" />
            Back to articles
          </Link>

          <p className="mt-8 text-sm font-bold text-primary md:text-base">
            22 September 2026
          </p>
          <h1 className="mt-4 text-3xl leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            When the Roof Becomes the Architecture: Renovation, Wood, and Light
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            In residential renovation, the strongest interventions are often
            not decorative. They are structural decisions that redefine how a
            house feels, how it holds light, and how daily life unfolds inside
            it.
          </p>
          <span className="mt-8 block h-0.5 w-16 bg-primary" />
        </div>
      </header>

      <div className="section-padding pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-[1.8] text-neutral-700 md:text-lg md:leading-[1.85]">
          <p>
            In residential renovation, the strongest interventions are often
            not decorative. They are structural decisions that redefine how a
            house feels, how it holds light, and how daily life unfolds inside
            it. Projects like Eleni&apos;s House in Heraklion remind us that
            contemporary living does not always begin with a blank page. It
            begins with an existing shell, a set of constraints, and the
            question of what deserves to remain and what must be reinvented.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Dialogue between old and new
          </h2>
          <p>
            A successful renovation is rarely about erasing the past. It is
            about establishing a clear dialogue between the original building
            and the new architectural language introduced into it. The goal is
            not to disguise the existing shell, but to open it up: to make it
            brighter, more continuous, and more responsive to the way people
            actually live today.
          </p>
          <p>
            In this approach, the old fabric becomes a partner rather than an
            obstacle. Walls may be simplified, openings enlarged, and materials
            recalibrated, yet the memory of the place remains present. The
            result feels neither purely historic nor aggressively new. It feels
            resolved.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Structure as identity
          </h2>
          <p>
            One of the most powerful moves in contemporary renovation is to let
            structure become visible again. An exposed wooden roof, for example,
            does more than cover the house. It gives the interior height,
            warmth, and a precise architectural character. Beams, joins, and
            rhythm stop being hidden technical details and become the main
            expression of the space.
          </p>
          <p>
            When interior height increases, new possibilities appear. A loft
            introduced as a lightweight metal structure can add a second level
            of use without breaking the sense of an open, unified plan. The
            contrast between warm timber and slender metal becomes part of the
            composition: one material grounds the house, the other keeps it
            light.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Organizing everyday life
          </h2>
          <p>
            Spatial organization remains essential. A clear separation between
            day zones and private areas allows the house to feel generous where
            it should and quieter where it must. Living, dining, and kitchen
            spaces can flow into one another as a continuous field of everyday
            life, while bedrooms and more intimate functions withdraw into
            calmer parts of the plan.
          </p>
          <p>
            This is not open-plan living for its own sake. It is a practical
            reading of domestic rhythm: shared moments in the light, private
            moments in retreat, and a plan that supports both without friction.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Palette, texture, and natural light
          </h2>
          <p>
            Material restraint strengthens this clarity. Soft whites and earthy
            surfaces create a quiet backdrop for warm wood and carefully chosen
            furniture. Against that neutrality, natural textures become more
            readable, and light moves more freely across the interior.
          </p>
          <p>
            Large openings and through-organization allow daylight to travel
            deep into the house. Clean geometries and minimal finishes ensure
            that the roof and the structure remain the protagonists. Nothing
            competes unnecessarily. Everything supports the experience of a
            calm, bright, Mediterranean interior.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            A contemporary Mediterranean home
          </h2>
          <p>
            What emerges from this way of working is not a style, but a
            position. Renovation becomes an opportunity to combine the
            familiarity of natural wood and daylight with a contemporary,
            minimal architectural language. The house feels open without becoming
            cold, modern without becoming abstract, and personal without
            becoming decorative.
          </p>
          <p>
            For a studio working between tradition and present-day living, that
            balance is central. Good renovation does not shout over the existing
            building. It edits carefully, reveals structure where it matters,
            and lets light complete the work.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-stone-200 pt-8">
          <Link
            to="/articles"
            className="inline-flex items-center gap-x-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:translate-x-2 md:text-base"
          >
            All articles
            <img src={blackarrow} alt="" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ExposedStructureLiving;
