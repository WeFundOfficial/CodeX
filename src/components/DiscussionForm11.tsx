import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DiscussionForm111.module.css";

type DiscussionForm11Type = {
  /** Style props */
  getInvolvedDisplay?: Property.Display;
};

const DiscussionForm111: FunctionComponent<DiscussionForm11Type> = ({
  getInvolvedDisplay,
}) => {
  const getInvolvedStyle: CSS.Properties = useMemo(() => {
    return {
      display: getInvolvedDisplay,
    };
  }, [getInvolvedDisplay]);

  return (
    <form className={styles.cardBottom}>
      <div className={styles.discussionForum}>Discussion Forum</div>
      <div className={styles.participateInOpenContainer}>
        <p
          className={styles.participateInOpen}
        >{`Participate in open discussions across various threads, explore opportunities `}</p>
        <p className={styles.participateInOpen}>
          to collaborate, and get more involved in projects building on Codex.
        </p>
      </div>
      <div className={styles.getInvolved} style={getInvolvedStyle}>
        get involved
      </div>
    </form>
  );
};

export default DiscussionForm111;
