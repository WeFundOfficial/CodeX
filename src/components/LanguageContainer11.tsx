import { FunctionComponent } from "react";
import styles from "./LanguageContainer11.module.css";
const LanguageContainer11: FunctionComponent = () => {
  return (
    <div className={styles.card1}>
      <div className={styles.frameChild} />
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.xpanderParent}>
          <div className={styles.xpander1}>Xpander</div>
          <div className={styles.simplifiedLanguageBlock}>
            Simplified Language, Block - Compiler Based
          </div>
          <textarea
            className={styles.designedForAllContainer}
            placeholder="Designed for all developers, without any programming knowledge. xpander is a block-based compiler smart contract derived from several advanced languages ​​such as Rust, Solidity, Ruby, Skala and many more. By implementing a sequential-level programming structure, developers are able to create no-code applications and contracts while more advanced developers are able to contribute to convert processing flows directly into working applications. Veteran coders can continue to create compiler-level code and contribute directly to the code libraries within the CodeX protocol."
          >
            <span className={styles.designed}>
              <span className={styles.designed1}>Designed</span>
            </span>
            <span className={styles.forAllDevelopersWithoutAn}>
              <span
                className={styles.designed}
              >{` for all developers, without any programming knowledge. `}</span>
              <span className={styles.x1}>x</span>
              <span className={styles.designed}>
                pander is a block-based compiler smart contract derived from
                several advanced languages ​​such as Rust, Solidity, Ruby, Skala
                and many more. By implementing a sequential-level programming
                structure, developers are able to create no-code applications
                and contracts while more advanced developers are able to
                contribute to convert processing flows directly into working
                applications. Veteran coders can continue to create
                compiler-level code and contribute directly to the code
                libraries within the CodeX protocol.
              </span>
            </span>
          </textarea>
          <div className={styles.joinTheCodex}>JOIN THE Codex MOVEMENT ↗</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageContainer11;
