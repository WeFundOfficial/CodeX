import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Web3Card11.module.css";
const Web3Card11: FunctionComponent = () => {
  return (
    <div className={styles.buildingWidelyUsedWeb3ApplParent}>
      <div className={styles.buildingWidelyUsedWeb3}>
        Building Widely-Used Web3 Applications.
      </div>
      <input
        className={styles.codexIsAContainer}
        type="text"
        placeholder="CodeX is a dedicated project for the mass adoption of blockchain users."
      >
        <span className={styles.c}>C</span>
        <span className={styles.ode}>ode</span>
        <span className={styles.c}>X</span>
        <span className={styles.ode}>
          {" "}
          is a dedicated project for the mass adoption of blockchain users.
        </span>
      </input>
      <div className={styles.buttonCtaParent}>
        <Button variant="contained" color="primary">
          build on Codex
        </Button>
        <Button variant="contained" color="primary">
          eksplore whitepaper
        </Button>
      </div>
    </div>
  );
};

export default Web3Card11;
