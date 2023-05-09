import { FunctionComponent } from "react";
import styles from "./MessageBubbleContainer.module.css";

type MessageBubbleContainerType = {
  productId?: string;
};

const MessageBubbleContainer: FunctionComponent<MessageBubbleContainerType> = ({
  productId,
}) => {
  return (
    <div className={styles.divcontinuallyMessageBubble}>
      <img
        className={styles.divcloseContinuallyMessageIcon}
        alt=""
        src={productId}
      />
      <div className={styles.divcontinuallyMessageText}>
        <div className={styles.ifYouHaveContainer}>
          <p className={styles.ifYouHave}>👋 If you have any questions,</p>
          <p className={styles.ifYouHave}>Let's reach out to support</p>
          <p className={styles.ifYouHave}>staff!</p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubbleContainer;
