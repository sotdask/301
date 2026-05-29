import { Parallax } from "react-parallax";
import { parallax } from "../../assets";

const ParallaxSection = () => (
  <Parallax
    bgImage={parallax}
    bgImageAlt="parallax"
    strength={200}
    bgImageStyle={{
      objectFit: "cover",
      objectPosition: "60% center",
    }}
  >
    <section className="relative h-[55vh] min-h-105 w-full overflow-hidden md:h-[70vh]">
      <div className="absolute inset-0 bg-black/45" />

      <div className="section-padding relative flex h-full items-center">
        <div className="grid w-full gap-10 text-white md:grid-cols-2 md:gap-16 text-center md:text-start">
          <div>
            <h2 data-aos="fade-up" data-aos-duration="800" className="text-3xl leading-tight md:text-5xl uppercase font-bold text-primary">
              our journey so far
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              A team turning ideas into thoughtful spaces since 2023, we create spaces with character, clarity, and purpose.
            </p>

            <div className="mt-8 grid gap-6 grid-cols-3">
              <div>
                <p className="text-3xl text-primary md:text-4xl font-bold">20+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/80 font-bold">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl text-primary md:text-4xl font-bold">30+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/80 font-bold">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-3xl text-primary md:text-4xl font-bold">4</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/80 font-bold">
                  Locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Parallax>
);

export default ParallaxSection;