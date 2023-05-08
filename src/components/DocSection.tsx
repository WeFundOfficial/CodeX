import { FunctionComponent } from "react";
import styles from "./DocSection.module.css";
const DocSection: FunctionComponent = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.cardBottomParent}>
        <textarea
          className={styles.cardBottom}
          placeholder="Documentation"
          defaultValue="Guides to develop applications for the Codex blockchain, run nodes, and get involved in the Codex ecosystem."
        />
        <textarea
          className={styles.cardBottom}
          placeholder="Discussion Forum"
          defaultValue={`Participate in open discussions across various threads, explore opportunities 
to collaborate, and get more involved in projects building on Codex.`}
        />
        <form className={styles.cardBottom2}>
          <div className={styles.discussionForum}>telegram</div>
          <div className={styles.participateInOpen}>
            Join our Telegram to chat with us directly, take part in our growing
            ecosystem.
          </div>
          <div className={styles.getInvolved}>join us</div>
        </form>
      </div>
    </div>
  );
};

export default DocSection;
