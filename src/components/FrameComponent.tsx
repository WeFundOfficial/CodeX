import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ onClose }) => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "community" to the project
  }, []);

  return (
    <div className={styles.frameParent}>
      <div
        className={styles.codexCommunityWrapper}
        onClick={onFrameContainer1Click}
      >
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
