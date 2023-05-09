import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SearchBlockContainer.module.css";

type SearchBlockContainerType = {
  /** Style props */
  divHeaderInnerRFKIWBackgroundColor?: Property.BackgroundColor;
  divHeaderInnerRFKIWBackground?: Property.Background;
};

const SearchBlockContainer: FunctionComponent<SearchBlockContainerType> = ({
  divHeaderInnerRFKIWBackgroundColor,
  divHeaderInnerRFKIWBackground,
}) => {
  const divHeaderHeader1rP9OStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: divHeaderInnerRFKIWBackgroundColor,
      background: divHeaderInnerRFKIWBackground,
    };
  }, [divHeaderInnerRFKIWBackgroundColor, divHeaderInnerRFKIWBackground]);

  return (
    <div
      className={styles.divheaderHeader1rp9o}
      style={divHeaderHeader1rP9OStyle}
    >
      <div className={styles.divheaderInnerRfkiw}>
        <img
          className={styles.logo909802fasvgIcon}
          alt=""
          src="/logo909802fasvg.svg"
        />
        <div className={styles.divsearchGroup1zhcg}>
          <div className={styles.inputh2dB9717424}>
            <div className={styles.pseudo}>
              <div className={styles.searchBlock}>
                Search Block / Tx / Account
              </div>
            </div>
          </div>
          <div className={styles.search}>search</div>
        </div>
        <div className={styles.divselectoptionsRight2qqmj}>
          <div className={styles.selectselectnetworksSelect}>
            <div className={styles.pseudo1}>
              <div className={styles.mainnet}>Mainnet</div>
            </div>
          </div>
          <div className={styles.divselectnetworksAddon2gxn}>
            <div className={styles.arrowDropDown}>arrow_drop_down</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlockContainer;
