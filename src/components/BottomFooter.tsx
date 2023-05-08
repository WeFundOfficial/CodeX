import { FunctionComponent } from "react";
import styles from "./BottomFooter.module.css";
const BottomFooter: FunctionComponent = () => {
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
            src="/svgmuisvgiconroot141.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot142.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot143.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot144.svg"
          />
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot145.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
