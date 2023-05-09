import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MultiTokenMarketplaceContainer.module.css";

type MultiTokenMarketplaceContainerType = {
  marketplaceType?: string;
  marketplaceModuleText?: string;
  marketplaceERC1155Text?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propPadding?: Property.Padding;
  propWidth1?: Property.Width;
};

const MultiTokenMarketplaceContainer: FunctionComponent<
  MultiTokenMarketplaceContainerType
> = ({
  marketplaceType,
  marketplaceModuleText,
  marketplaceERC1155Text,
  propTop,
  propWidth,
  propPadding,
  propWidth1,
}) => {
  const divcss1v21fwjStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const simpleMarketplaceForStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const pchakraTextStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const moduleUsedToContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.divcss1v21fwj} style={divcss1v21fwjStyle}>
      <div className={styles.divcssX6ul58}>
        <div className={styles.divcss19idom}>
          <div className={styles.pchakraText}>
            <b
              className={styles.simpleMarketplaceFor}
              style={simpleMarketplaceForStyle}
            >
              {marketplaceType}
            </b>
          </div>
          <div className={styles.pchakraText1} style={pchakraTextStyle}>
            <div
              className={styles.moduleUsedToContainer}
              style={moduleUsedToContainerStyle}
            >
              <span className={styles.moduleUsedToContainer1}>
                <p className={styles.moduleUsedTo}>{marketplaceModuleText}</p>
                <p className={styles.moduleUsedTo}>{marketplaceERC1155Text}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.divcssBasxhu}>
          <div className={styles.pchakraText2}>
            <div className={styles.createdByBunzz}>Created by bunzz</div>
          </div>
          <div className={styles.createdByBunzz}>2022-12-27</div>
        </div>
      </div>
    </div>
  );
};

export default MultiTokenMarketplaceContainer;
