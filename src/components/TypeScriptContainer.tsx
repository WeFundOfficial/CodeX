import { FunctionComponent } from "react";
import styles from "./TypeScriptContainer.module.css";
const TypeScriptContainer: FunctionComponent = () => {
  return (
    <div className={styles.divmuigridRoot}>
      <div className={styles.divmuioutlinedinputRoot}>
        <div className={styles.divmuiselectSelect}>
          <div className={styles.fieldsetmuioutlinedinputNotc}>
            <div className={styles.typescript}>TypeScript</div>
          </div>
        </div>
        <img
          className={styles.svgmuisvgiconRoot}
          alt=""
          src="/svgmuisvgiconroot11.svg"
        />
      </div>
      <div className={styles.labelfromSelect}>
        <div className={styles.fromLanguage}>From Language</div>
      </div>
      <div className={styles.divmuioutlinedinputRoot1}>
        <div className={styles.divmuiselectSelect1}>
          <div className={styles.labeltoSelect}>
            <div className={styles.toLanguage}>To Language</div>
          </div>
        </div>
        <img
          className={styles.svgmuisvgiconRoot1}
          alt=""
          src="/svgmuisvgiconroot21.svg"
        />
        <div className={styles.fieldsetmuioutlinedinputNotc1}>
          <div className={styles.java}>JAVA</div>
        </div>
      </div>
    </div>
  );
};

export default TypeScriptContainer;
