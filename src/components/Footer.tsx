import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.divmuiboxRoot}>
      <div className={styles.divmuigrid2Root}>
        <div className={styles.divmuigrid2Root1}>
          <div className={styles.pmuitypographyRoot}>
            <div className={styles.codexLabs}>© 2023 CodeX Labs</div>
          </div>
          <div className={styles.divmuistackRoot}>
            <div className={styles.privacy}>Privacy</div>
            <div className={styles.privacy}>Terms</div>
          </div>
        </div>
        <div className={styles.divmuigrid2Root2}>
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot68.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot69.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot70.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot71.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot72.svg"
          />
        </div>
        <img className={styles.codex32Icon} alt="" src="/codex3-2@2x.png" />
      </div>
    </div>
  );
};

export default Footer;
