import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

type Header1Type = {
  /** Action props */
  onLogoContainerClick?: () => void;
};

const Header1: FunctionComponent<Header1Type> = ({ onLogoContainerClick }) => {
  return (
    <div className={styles.logoParent}>
      <div className={styles.logo} onClick={onLogoContainerClick}>
        <div className={styles.logoNew}>
          <img className={styles.image12Icon} alt="" src="/image-121@2x.png" />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.communityParent}>
          <div className={styles.community}>community</div>
          <div className={styles.product}>product</div>
          <div className={styles.product}>About us</div>
        </div>
        <button className={styles.btnSmall}>
          <div className={styles.buildOnCodex}>{`build on Codex `}</div>
        </button>
      </div>
    </div>
  );
};

export default Header1;
