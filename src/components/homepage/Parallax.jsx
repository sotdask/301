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
      transform: "scale(1.2)",
    }}
  >
    <div className="h-[55vh] min-h-[420px] w-full md:h-[70vh]" />
  </Parallax>
);

export default ParallaxSection;