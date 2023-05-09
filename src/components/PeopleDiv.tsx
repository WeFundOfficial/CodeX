import { FunctionComponent } from "react";
import styles from "./PeopleDiv.module.css";
const PeopleDiv: FunctionComponent = () => {
  return (
    <div className={styles.divpx3}>
      <div className={styles.divh2dF9944e5e}>
        <div className={styles.people}>People</div>
        <div className={styles.divclearfix}>
          <img className={styles.icon} alt="" src="/903469@2x.png" />
          <img className={styles.icon1} alt="" src="/6594417@2x.png" />
          <img className={styles.icon2} alt="" src="/10601061@2x.png" />
          <img className={styles.icon3} alt="" src="/14897503@2x.png" />
          <img className={styles.icon4} alt="" src="/22536567@2x.png" />
        </div>
      </div>
      <div className={styles.divmb3}>
        <div className={styles.divh2d20181c1d}>
          <div className={styles.topLanguages}>Top languages</div>
          <div className={styles.go}>Go</div>
          <div className={styles.spanrepoLanguageColor} />
          <div className={styles.javascript}>JavaScript</div>
          <div className={styles.spanrepoLanguageColor1} />
          <div className={styles.typescript}>TypeScript</div>
          <div className={styles.spanrepoLanguageColor2} />
          <div className={styles.kotlin}>Kotlin</div>
          <div className={styles.spanrepoLanguageColor3} />
          <div className={styles.vue}>Vue</div>
          <div className={styles.spanrepoLanguageColor4} />
        </div>
      </div>
      <div className={styles.divmb31}>
        <div className={styles.divh2d5b58f5e2}>
          <div className={styles.mostUsedTopics}>Most used topics</div>
          <div className={styles.atopicTag}>
            <div className={styles.blockchain}>blockchain</div>
          </div>
          <div className={styles.atopicTag1}>
            <div className={styles.blockchain}>cryptocurrency</div>
          </div>
          <div className={styles.atopicTag2}>
            <div className={styles.blockchain}>cosmos-sdk</div>
          </div>
          <div className={styles.atopicTag3}>
            <div className={styles.blockchain}>go</div>
          </div>
          <div className={styles.atopicTag4}>
            <div className={styles.blockchain}>interledger</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDiv;
