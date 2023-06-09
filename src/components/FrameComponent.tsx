import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ onClose }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.codexCommunityWrapper}>
        <div className={styles.codexCommunity}>Codex Community</div>
      </div>
      <div className={styles.discussionForumWrapper}>
        <div className={styles.discussionForum}>Discussion Forum</div>
      </div>
      <div className={styles.discussionForumWrapper}>
        <div className={styles.discussionForum}>Ecosystem Projects</div>
      </div>
    </div>
  );
};

export default FrameComponent;
