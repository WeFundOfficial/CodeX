import Hero from "@/components/community/hero";
import FirstEcosystem from "@/components/community/FirstEcosystem"
import EffectImage from "../../src/assets/images/community/effect.png";
import Xpander from "@/components/community/xpander";

const Community = () => {

  return (
    <div className="w-full bg-black">
      <Hero />
      <div className="w-full"
        style={{backgroundImage: `${EffectImage.src}`}}
      >
      <FirstEcosystem />
      <Xpander />
      </div>
    </div>
  )
};

export default Community;
