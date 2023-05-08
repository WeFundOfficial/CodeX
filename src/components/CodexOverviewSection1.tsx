import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./CodexOverviewSection11.module.css";
const CodexOverviewSection11: FunctionComponent = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.codexTokenomicsOverviewParent}>
        <div className={styles.codexTokenomicsOverview}>
          Codex Tokenomics Overview
        </div>
        <div className={styles.theCodexFoundationPresentsWrapper}>
          <div className={styles.theCodexFoundation}>
            The Codex Foundation presents a summary version of the Codex
            protocol tokenomics.
          </div>
        </div>
        <Button variant="contained" color="primary">
          view tokenomics
        </Button>
      </div>
    </div>
  );
};

export default CodexOverviewSection11;
