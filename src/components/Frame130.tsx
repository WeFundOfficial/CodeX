import { FunctionComponent } from "react";
import styles from "./Frame130.module.css";
const EcosystemSection1: FunctionComponent = () => {
  return (
    <div className={styles.lineGroup}>
      <div className={styles.frameChild} />
      <div className={styles.theFirstEcosystemProvidesNParent}>
        <div className={styles.theFirstEcosystem}>
          The First Ecosystem provides No-Code for developers
        </div>
        <textarea
          className={styles.frameInner}
          placeholder="The Future-proof Network"
          defaultValue="With a unique combination of safety, user experience, upgradeability, and performance, the Codex infrastructure and its Move programming language empower developers to build web3 applications that solve today’s consumer needs on a network that can evolve for anything to come."
        />
      </div>
    </div>
  );
};

export default EcosystemSection1;
