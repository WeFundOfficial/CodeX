import { FunctionComponent } from "react";
import Web3Card from "../components/Web3Card";
import CodexContainer from "../components/CodexContainer";
import CodexOverviewSection from "../components/CodexOverviewSection";
import EcosystemSection1 from "../components/Frame130";
import LanguageContainer1 from "../components/Card1";
import UpgradeabilityCard from "../components/UpgradeabilityCard";
import CommunitySection from "../components/CommunitySection";
import FormContainer from "../components/FormContainer";
import DocumentationContainer from "../components/DocumentationContainer";
import Header from "../components/Header";
import styles from "./ToImplement.module.css";
const ToImplement: FunctionComponent = () => {
  return (
    <div className={styles.toImplement}>
      <div className={styles.toImplementChild} />
      <Web3Card1 />
      <CodexContainer2 />
      <div className={styles.xpander}>Xpander</div>
      <div className={styles.toImplementItem} />
      <CodexOverviewSection1 />
      <EcosystemSection11 />
      <LanguageContainer11 />
      <div className={styles.card1Parent}>
        <UpgradeabilityCard1
          featuresText="Upgradeability"
          compatibilityFeaturesText={`Compatibility Cosmos SDK & EVM`}
          evmCosmwasmFeaturesText="Combining the Ethereum Virtual Machine (EVM) and CosmWasm can provide developers with a powerful set of tools to build decentralized applications. CodeX supports the functionality for developers to be multichain allowing EVM ecosystem and Cosmoswasm ecosystem to be able interact seamlessly."
          propTop="0px"
          propAlignItems="flex-end"
          propLeft="0px"
          propAlignSelf="stretch"
          propTextTransform="capitalize"
        />
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
      <UpgradeabilityCard1
        featuresText="Performace"
        compatibilityFeaturesText={`Scalable & Reliable`}
        evmCosmwasmFeaturesText="Codex focuses on performance for the user. With a parallel, batch-optimized, and modular transaction processing pipeline, plus innovations like combining between Proof-of-stake, Proof-of-History and Proof-of-Contribute, Codex brings advance performance to developers and a seamless experience for end users."
        propTop="2083px"
        propAlignItems="flex-start"
        propAlignSelf="unset"
        propWidth="140px"
        propTextTransform="unset"
      />
      <img className={styles.groupIcon1} alt="" src="/group1.svg" />
      <UpgradeabilityCard1
        featuresText="User Experiance"
        compatibilityFeaturesText="Simple Development, Enjoyable Applications"
        evmCosmwasmFeaturesText="The ecosystem being built by CodeX is poised to improve rapid adoption and development of blockchain technologies by removing the common barriers to entering the industry - the steep learning curve to build on web 3.0 infrastructures and the ambiguous safety and security risks associated blockchain interactions for new web 3.0 users. With Codex’s reliable infrastructure, developers can focus on making great applications and end-users can enjoy a friendly, seamless experience."
        propTop="2475px"
        propLeft="473px"
        propTextTransform="unset"
      />
      <img className={styles.groupIcon2} alt="" src="/group2.svg" />
      <CommunitySection1 />
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <FormContainer1 />
          <DocumentationContainer1 />
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.image16Parent}>
          <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
          <div className={styles.image17Parent}>
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
            <img className={styles.image18Icon} alt="" src="/image-17@2x.png" />
          </div>
        </div>
        <img className={styles.image16Icon1} alt="" src="/image-161@2x.png" />
      </div>
      <Header2 />
    </div>
  );
};

export default ToImplement;
