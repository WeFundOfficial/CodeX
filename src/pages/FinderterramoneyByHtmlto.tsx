import { FunctionComponent } from "react";
import SearchBlockContainer from "../components/SearchBlockContainer";
import ChainBlockList from "../components/ChainBlockList";
import styles from "./FinderterramoneyByHtmlto.module.css";
const FinderterramoneyByHtmlto: FunctionComponent = () => {
  return (
    <div className={styles.finderterramoneyByHtmlto}>
      <SearchBlockContainer />
      <div className={styles.sectionappContent2otig}>
        <div className={styles.h2title}>
          <div className={styles.block}>Block</div>
          <div className={styles.div}>#11</div>
        </div>
        <ChainBlockList />
        <div className={styles.divtxsTablecontainer3o7or}>
          <div className={styles.articlecard}>
            <div className={styles.articleinfoComponent2j9sv}>
              <div className={styles.infoOutline}>info_outline</div>
              <div className={styles.noMoreTransactions}>
                No more transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinderterramoneyByHtmlto;
