import { FunctionComponent } from "react";
import styles from "./ChainBlockList.module.css";
const ChainBlockList: FunctionComponent = () => {
  return (
    <div className={styles.divblockList2nwqg}>
      <div className={styles.divblockRow1ycgp}>
        <div className={styles.divblockHead2zi3u}>
          <div className={styles.chainId}>Chain ID</div>
        </div>
        <div className={styles.divblockBody1hm4j}>
          <div className={styles.syncnode}>phoenix-1</div>
        </div>
      </div>
      <div className={styles.divblockRow1ycgp1}>
        <div className={styles.divblockHead2zi3u}>
          <div className={styles.blockHeight}>Block height</div>
        </div>
        <div className={styles.divblockBody1hm4j1}>
          <div className={styles.spanblockHeight10cz2}>
            <div className={styles.div}>11</div>
            <div className={styles.ah2d780b99f5}>
              <div className={styles.chevronLeft}>chevron_left</div>
            </div>
            <div className={styles.ah2dB1076df3}>
              <div className={styles.chevronLeft}>chevron_right</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divblockRow1ycgp2}>
        <div className={styles.divblockHead2zi3u}>
          <div className={styles.timestamp}>Timestamp</div>
        </div>
        <div className={styles.divblockBody1hm4j2}>
          <div className={styles.syncnode}>2022.05.28 13:06:00+07:00</div>
        </div>
      </div>
      <div className={styles.divblockRow1ycgp3}>
        <div className={styles.divblockHead2zi3u}>
          <div className={styles.transactions}>Transactions</div>
        </div>
        <div className={styles.divblockBody1hm4j3}>
          <div className={styles.syncnode}>0</div>
        </div>
      </div>
      <div className={styles.divblockRow1ycgp4}>
        <div className={styles.divblockHead2zi3u}>
          <div className={styles.proposer}>Proposer</div>
        </div>
        <div className={styles.divblockBody1hm4j4}>
          <div className={styles.syncnode}>syncnode</div>
        </div>
      </div>
    </div>
  );
};

export default ChainBlockList;
