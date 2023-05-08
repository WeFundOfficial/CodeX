import { FunctionComponent } from "react";
import styles from "./CodeXContainer1.module.css";
const CodeXContainer1: FunctionComponent = () => {
  return (
    <div className={styles.codexCommunityParent}>
      <div className={styles.codexCommunity}>Codex Community</div>
      <div className={styles.codexIsDesigned}>
        CodeX is designed for those who thrilled to not quit
      </div>
      <div className={styles.theCodexCommunity}>
        The Codex community is a worldwide movement of developers, node
        operators, educators, and other contributors building a safer,
        user-ready, and widely accessible blockchain ecosystem.
      </div>
      <button className={styles.buttonCta}>
        <div className={styles.buildOnCodex}>join the community</div>
      </button>
    </div>
  );
};

export default CodeXContainer1;
