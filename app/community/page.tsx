import Hero from "@/components/community/hero";
import FirstEcosystem from "@/components/community/FirstEcosystem"
import EffectImage from "../../src/assets/images/community/effect.png";
import Xpander from "@/components/community/xpander";
import Compatibility from "@/components/community/compatibility";
import Scalable from "@/components/community/scalable";
import Simple from "@/components/community/simple";
import Overview from "@/components/community/overview";

const Community = () => {

  return (
    <div className="w-full bg-black">
      <Hero />
      <div className="w-full"
        style={{ backgroundImage: `${EffectImage.src}` }}
      >
        <FirstEcosystem />
        <Xpander />
        <Compatibility />
        <Scalable />
        <Simple />
        <Overview />
      </div>
    </div>
  )
};

export default Community;
