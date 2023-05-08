import { FunctionComponent } from "react";
import styles from "./WhitepaperSection.module.css";
const WhitepaperSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logoNewParent}>
        <div className={styles.logoNew}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.whitepaperParent}>
            <div className={styles.whitepaper}>whitepaper</div>
            <div className={styles.whitepaper}>brand</div>
            <div className={styles.whitepaper}>privacy</div>
            <div className={styles.whitepaper}>terms</div>
          </div>
        </div>
      </div>
      <div className={styles.findUsParent}>
        <div className={styles.whitepaper}>find us</div>
        <div className={styles.mditwitterParent}>
          <img className={styles.mditwitterIcon} alt="" src="/mditwitter.svg" />
          <img
            className={styles.mditwitterIcon}
            alt=""
            src="/icoutlinediscord.svg"
          />
          <img className={styles.mditwitterIcon} alt="" src="/mdigithub.svg" />
        </div>
      </div>
    </div>
  );
};

export default WhitepaperSection;
