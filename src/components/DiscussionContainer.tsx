import { FunctionComponent } from "react";
import styles from "./DiscussionContainer.module.css";
const DiscussionContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.participateInOpenContainer}>
        <p
          className={styles.participateInOpen}
        >{`Participate in open discussions across various threads, explore opportunities `}</p>
        <p className={styles.participateInOpen}>
          to collaborate, and get more involved in projects building on Codex.
        </p>
      </div>
      <div className={styles.discussionForum}>Discussion Forum</div>
      <div className={styles.getInvolved}>get involved</div>
      <div className={styles.documentationParent}>
        <div className={styles.documentation}>Documentation</div>
        <div className={styles.guidesToDevelop}>
          Guides to develop applications for the Codex blockchain, run nodes,
          and get involved in the Codex ecosystem.
        </div>
      </div>
      <div className={styles.getStarted}>get started</div>
      <div className={styles.telegramParent}>
        <div className={styles.telegram}>Telegram</div>
        <div className={styles.joinOurTelegram}>
          Join our Telegram to chat with us directly, take part in our growing
          ecosystem.
        </div>
      </div>
      <div className={styles.joinUs}>join us</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.groupChild2} />
      <div className={styles.participateInOpenContainer1}>
        <p
          className={styles.participateInOpen}
        >{`Participate in open discussions across various threads, explore opportunities `}</p>
        <p className={styles.participateInOpen}>
          to collaborate, and get more involved in projects building on Codex.
        </p>
      </div>
      <div className={styles.discussionForum1}>Discussion Forum</div>
      <div className={styles.getInvolved1}>get involved</div>
      <div className={styles.documentationGroup}>
        <div className={styles.documentation}>Documentation</div>
        <div className={styles.guidesToDevelop}>
          Guides to develop applications for the Codex blockchain, run nodes,
          and get involved in the Codex ecosystem.
        </div>
      </div>
      <div className={styles.getStarted1}>get started</div>
      <div className={styles.discordParent}>
        <div className={styles.telegram}>Discord</div>
        <div className={styles.joinOurTelegram}>
          Join our Discord to chat with us directly, take part in our growing
          ecosystem, and participate in Move Mondays.
        </div>
      </div>
      <div className={styles.joinUs1}>join us</div>
    </div>
  );
};

export default DiscussionContainer;
