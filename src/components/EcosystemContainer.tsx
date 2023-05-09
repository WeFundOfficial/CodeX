import { FunctionComponent } from "react";
import styles from "./EcosystemContainer.module.css";
const EcosystemContainer: FunctionComponent = () => {
  return (
    <div className={styles.theCodexFoundationIsKeyBeParent}>
      <div className={styles.theCodexFoundationContainer}>
        <p className={styles.theCodexFoundation}>{`The Codex Foundation `}</p>
        <p className={styles.theCodexFoundation}>
          is Key Behind the CodeX Ecosystem
        </p>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.missionParent}>
          <div className={styles.mission}>Mission</div>
          <div className={styles.supportCodexInContainer}>
            <p className={styles.theCodexFoundation}>
              Support Codex in fostering the growth of the network, cultivating
              a strong and evolving ecosystem, and attracting developers to
              continually improve the infrastructure of the Codex Layer 1
              blockchain.
            </p>
          </div>
        </div>
        <div className={styles.coreFocusParent}>
          <div className={styles.coreFocus}>Core Focus</div>
          <div className={styles.theCodexFoundation1}>
            The Codex Foundation is dedicated to supporting the growth and
            development of the Codex protocol, decentralized network, and
            developer ecosystem.
          </div>
          <div className={styles.fosterParticipationAndContainer}>
            <p className={styles.theCodexFoundation}>
              <span className={styles.span}>→</span>
              <span> Foster participation and growth</span>
            </p>
            <p className={styles.theCodexFoundation}>
              <span className={styles.span}>→</span>
              <span> Encourage application development</span>
            </p>
            <p className={styles.theCodexFoundation}>
              <span className={styles.span}>→</span>
              <span> Cultivate a strong developer ecosystem</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemContainer;
