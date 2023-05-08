import { FunctionComponent } from "react";
import ToImplement from "./ToImplement";
import styles from "./FrameComponent1.module.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.toImplementParent}>
      <ToImplement />
    </div>
  );
};

export default FrameComponent1;
