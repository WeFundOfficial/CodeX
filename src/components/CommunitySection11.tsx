import { FunctionComponent } from "react";
import styles from "./CommunitySection111.module.css";
const CommunitySection111: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logoNewParent}>
        <div className={styles.logoNew}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.communityParent}>
            <div className={styles.community}>community</div>
            <div className={styles.community}>Developers</div>
            <div className={styles.community}>Grants</div>
            <div className={styles.community}>About us</div>
          </div>
          <div className={styles.communityParent}>
            <div className={styles.community}>whitepaper</div>
            <div className={styles.community}>brand</div>
            <div className={styles.community}>privacy</div>
            <div className={styles.community}>terms</div>
          </div>
        </div>
      </div>
      <div className={styles.findUsParent}>
        <div className={styles.community}>find us</div>
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

export default CommunitySection111;
