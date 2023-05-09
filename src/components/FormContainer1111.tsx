import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DiscussionForm1111 from "./DiscussionForm1111";
import styles from "./FormContainer11111.module.css";
const FormContainer11111: FunctionComponent = () => {
  return (
    <div className={styles.cardBottomParent}>
      <form className={styles.cardBottom}>
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
      </form>
      <DiscussionForm11111 />
      <form className={styles.cardBottom}>
        <div className={styles.discussionForum1}>telegram</div>
        <div className={styles.participateInOpen}>
          Join our Telegram to chat with us directly, take part in our growing
          ecosystem.
        </div>
        <div className={styles.getInvolved}>join us</div>
      </form>
    </div>
  );
};

export default FormContainer11111;
