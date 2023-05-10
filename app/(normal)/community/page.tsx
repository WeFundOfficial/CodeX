import Hero from "@/components/community/hero";
import FirstEcosystem from "@/components/community/first-ecosystem"
import EffectImage from "../../../src/assets/images/community/effect.png";
import Xpander from "@/components/community/xpander";
import Compatibility from "@/components/community/compatibility";
import Scalable from "@/components/community/scalable";
import Simple from "@/components/community/simple";
import Overview from "@/components/community/overview";
import Channel from "@/components/community/channel";
import Core from "@/components/community/core";

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
        <Channel />
        <Core />
      </div>
    </div>
  )
};

export default Community;
