import React from "react";
import { Link } from "react-router-dom";
import { blackarrow } from "../assets";

function SantoriniArchitecture() {
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
            The Architecture of Santorini: Form Shaped by Landscape and Light
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            From the island&apos;s small villages to the cliffs of the Caldera,
            Santorini reveals an architecture that is anything but accidental,
            carefully and thoroughly expressing geology, climate, and the beauty
            of Aegean light.
          </p>
          <span className="mt-8 block h-0.5 w-16 bg-primary" />
        </div>
      </header>

      <div className="section-padding pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-[1.8] text-neutral-700 md:text-lg md:leading-[1.85]">
          <p>
            From the island&apos;s small villages to the cliffs of the Caldera,
            Santorini reveals an architecture that is anything but accidental,
            carefully and thoroughly expressing geology, climate, and the beauty
            of Aegean light.
          </p>

          <p>
            Although Santorini&apos;s landscape ranks among the most recognizable
            in the Mediterranean, its architectural character steadily follows
            the familiar and beloved pattern of Cycladic culture: white houses
            with blue domes and sunlit terraces filled with flowers. Behind this
            pattern, however, lies a deeper logic. The architecture of the island
            was born to meet the practical needs of survival, and over time it
            evolved into the identity it carries today.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Geology as the first architect
          </h2>
          <p>
            Almost every design decision, and every realization of that design,
            is determined by the island&apos;s volcanic geology. Volcanic tuff and
            soft pumice allowed the inhabitants to carve settlements into the
            rock, creating cave dwellings with spaces that remain cool in summer
            and protected from the winds of the Aegean. This carving of
            settlements creates a density in which houses stay low and compact,
            producing on the one hand shade and coolness, and on the other the
            picturesque image of Santorini that everyone knows.
          </p>
          <p>
            The villages of Santorini function as a single architectural
            organism, adapted to cover changes in elevation and to serve the
            island&apos;s views: the lanes, balconies, and courtyards of the houses
            follow the slope of the ground rather than trying to conceal it.
            Circulation across the island, therefore, becomes a sequence of
            narrow alleys, stepped passages, and sudden openings toward the sea.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Vaults, curves, and structural honesty
          </h2>
          <p>
            One of the most distinctive features of Santorini&apos;s interiors is
            the vaulted ceiling. Throughout human history, vaults were
            structurally essential in regions with limited timber. Their curves
            allowed loads and household belongings to be distributed and stored
            within the home, while at the same time creating spacious, generous
            volumes.
          </p>
          <p>
            Today, these geometries retain their identity both because of their
            heritage and because of their effect on space. They create a sense of
            continuity by softening the corners of the house, and on a more
            practical level they capture light and keep the interior bright and
            sunlit.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Light, whitewash, and material restraint
          </h2>
          <p>
            Even the openings are carefully considered. Small, discreet windows,
            combined with deep wall reveals, act as protection against the
            intense reflection of light without closing off the beautiful view
            the island offers. Because in Santorini the view is not simply a
            postcard background; it is an active part of the architectural
            composition.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            Contemporary practice without imitation
          </h2>
          <p>
            For architects today, our main challenge is to honor tradition
            without trapping ourselves in nostalgia, while at the same time
            bringing a sense of renewal and modernity to the landscape. A
            contemporary project in Santorini should not merely reproduce white
            volumes and large openings as stylistic devices. It must revisit the
            fundamental principles: adaptation to climate, respect for
            topography, restraint in materials, and the design of spaces that
            serve both everyday life and aesthetic pleasure. In residential
            work, this often means placing particular emphasis on comfort within
            a generous space, while preserving the island&apos;s domestic, local
            character.
          </p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            An architecture of belonging
          </h2>
          <p>
            The lasting quality of Santorini&apos;s architecture is not simply a
            static glossary of rules to follow, but a complete way of thinking.
            The island teaches us that architecture can appear restrained at first
            glance and yet remain complex in the experience it offers: carved
            into the rock, shaped by the wind, bathed in light, and oriented
            toward the horizon.
          </p>
          <p>
            For an architecture studio like ours, moving between tradition and
            contemporary life, this character of Santorini is a vital lesson. The
            island&apos;s design does not try to draw attention to itself. It reads
            the place, makes precise choices, and allows the natural environment
            to complete the work.
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

export default SantoriniArchitecture;
