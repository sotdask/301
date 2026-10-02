import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import { parallax } from "../../assets";

const ParallaxSection = () => {
  const { t } = useTranslation("home");

  return (
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
          <div className="grid w-full gap-10 text-center text-white md:grid-cols-2 md:gap-16 md:text-start">
            <div>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl leading-tight font-bold uppercase text-primary md:text-5xl"
              >
                {t("parallax.title")}
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {t("parallax.body")}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary md:text-4xl">20+</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white/80">
                    {t("parallax.projects")}
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-primary md:text-4xl">30+</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white/80">
                    {t("parallax.customers")}
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-primary md:text-4xl">4</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white/80">
                    {t("parallax.locations")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ParallaxSection;
