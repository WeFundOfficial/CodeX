import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CommunitySection11111.module.css";

type CommunitySection1111Type = {
  /** Style props */
  communitySection11111FramBottom?: Property.Bottom;
  communitySection11111FramLeft?: Property.Left;
  communitySection11111FramTop?: Property.Top;
};

const CommunitySection11111: FunctionComponent<CommunitySection1111Type> = ({
  communitySection11111FramBottom,
  communitySection11111FramLeft,
  communitySection11111FramTop,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      bottom: communitySection11111FramBottom,
      left: communitySection11111FramLeft,
      top: communitySection11111FramTop,
    };
  }, [
    communitySection11111FramBottom,
    communitySection11111FramLeft,
    communitySection11111FramTop,
  ]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
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
          <img
            className={styles.mditwitterIcon}
            alt=""
            src="/mditwitter1.svg"
          />
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

export default CommunitySection11111;
