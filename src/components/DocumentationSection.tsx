import { FunctionComponent } from "react";
import DiscussionForm1111 from "./DiscussionForm1111";
import styles from "./DocumentationSection.module.css";
const DocumentationSection: FunctionComponent = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.cardBottomParent}>
        <form className={styles.cardBottom}>
          <input
            className={styles.discussionForum}
            type="text"
            placeholder="Documentation"
          />
          <div className={styles.participateInOpen}>
            Guides to develop applications for the Codex blockchain, run nodes,
            and get involved in the Codex ecosystem.
          </div>
          <div className={styles.getInvolved}>get started</div>
        </form>
        <DiscussionForm11111 getInvolvedDisplay="inline-block" />
        <textarea
          className={styles.cardBottom1}
          placeholder="telegram"
          defaultValue="Join our Telegram to chat with us directly, take part in our growing ecosystem."
        />
      </div>
    </div>
  );
};

export default DocumentationSection;
