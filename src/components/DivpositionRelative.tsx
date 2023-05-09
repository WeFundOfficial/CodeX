import { FunctionComponent } from "react";
import styles from "./DivpositionRelative.module.css";
const DivpositionRelative: FunctionComponent = () => {
  return (
    <div className={styles.divpositionRelative}>
      <div className={styles.apx2} />
      <div className={styles.headerheaderOld}>
        <div className={styles.divcontainerLg}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <div className={styles.divheaderMenuWrapper}>
            <div className={styles.uldLgFlex}>
              <div className={styles.buttonheadermenuLink}>
                <div className={styles.product}>Product</div>
                <img className={styles.frameIcon1} alt="" src="/frame11.svg" />
              </div>
              <div className={styles.buttonheadermenuLink1}>
                <div className={styles.product}>Solutions</div>
                <img className={styles.frameIcon2} alt="" src="/frame21.svg" />
              </div>
              <div className={styles.buttonheadermenuLink2}>
                <div className={styles.openSource}>Open Source</div>
                <img className={styles.frameIcon3} alt="" src="/frame31.svg" />
              </div>
              <div className={styles.pricing}>Pricing</div>
            </div>
            <div className={styles.divdLgFlex}>
              <div className={styles.labelformControl}>
                <div className={styles.pseudo}>
                  <div className={styles.search}>Search</div>
                </div>
                <img className={styles.svgmr1Icon} alt="" src="/svgmr1.svg" />
              </div>
              <div className={styles.aheadermenuLink}>
                <div className={styles.signUp}>Sign up</div>
              </div>
              <div className={styles.signIn}>Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivpositionRelative;
