import { FunctionComponent } from "react";
import styles from "./KavaLabsHeaderContainer.module.css";
const KavaLabsHeaderContainer: FunctionComponent = () => {
  return (
    <div className={styles.headerpagehead}>
      <div className={styles.divdFlex}>
        <img className={styles.icon} alt="" src="/36107286@2x.png" />
        <div className={styles.divflex1}>
          <div className={styles.kavaLabs}>Kava Labs</div>
          <div className={styles.uldMdFlex}>
            <div className={styles.limrMd3}>
              <img className={styles.frameIcon} alt="" src="/frame41.svg" />
              <div className={styles.followers}>
                <span className={styles.followersTxt}>
                  <span className={styles.span}>96</span>
                  <span className={styles.followers1}> followers</span>
                </span>
              </div>
            </div>
            <div className={styles.limrMd31}>
              <img className={styles.frameIcon1} alt="" src="/frame51.svg" />
              <div className={styles.httpskavaio}>https://kava.io</div>
            </div>
            <div className={styles.limrMd32}>
              <img className={styles.frameIcon2} alt="" src="/frame6.svg" />
              <div className={styles.hellokavaio}>hello@kava.io</div>
            </div>
            <div className={styles.summarylabel}>
              <div className={styles.verified}>Verified</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.organization}>
        <div className={styles.ullistStyleNone}>
          <div className={styles.aunderlinenavItem}>
            <img className={styles.frameIcon3} alt="" src="/frame7.svg" />
            <div className={styles.overview}>Overview</div>
            <div className={styles.pseudo} />
          </div>
          <div className={styles.aunderlinenavItem1}>
            <img className={styles.frameIcon4} alt="" src="/frame8.svg" />
            <div className={styles.spancounter}>
              <div className={styles.verified}>83</div>
            </div>
            <div className={styles.repositories}>Repositories</div>
          </div>
          <div className={styles.aunderlinenavItem2}>
            <img className={styles.frameIcon5} alt="" src="/frame9.svg" />
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.aunderlinenavItem3}>
            <img className={styles.frameIcon6} alt="" src="/frame10.svg" />
            <div className={styles.packages}>Packages</div>
          </div>
          <div className={styles.aunderlinenavItem4}>
            <img className={styles.frameIcon7} alt="" src="/frame111.svg" />
            <div className={styles.spancounter1}>
              <div className={styles.verified}>5</div>
            </div>
            <div className={styles.repositories}>People</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KavaLabsHeaderContainer;
