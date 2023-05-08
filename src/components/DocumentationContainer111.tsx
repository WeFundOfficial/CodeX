import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DiscussionForm111 from "./DiscussionForm111";
import styles from "./DocumentationContainer1111.module.css";
const DocumentationContainer1111: FunctionComponent = () => {
  return (
    <div className={styles.cardBottomParent}>
      <div className={styles.cardBottom}>
        <Button
          className={styles.discussionForum}
          sx={{ width: 328 }}
          variant="contained"
          color="primary"
        >
          Documentation
        </Button>
        <div className={styles.participateInOpen}>
          Guides to develop applications for the Codex blockchain, run nodes,
          and get involved in the Codex ecosystem.
        </div>
        <div className={styles.getInvolved}>get started</div>
      </div>
      <DiscussionForm1111 getInvolvedDisplay="inline-block" />
      <div className={styles.cardBottom1}>
        <div className={styles.discussionForum1}>Discord</div>
        <div className={styles.participateInOpen1}>
          Join our Discord to chat with us directly, take part in our growing
          ecosystem, and participate in Move Mondays.
        </div>
        <div className={styles.getInvolved}>join us</div>
      </div>
    </div>
  );
};

export default DocumentationContainer1111;
