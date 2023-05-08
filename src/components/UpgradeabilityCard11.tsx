import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./UpgradeabilityCard111.module.css";

type UpgradeabilityCard11Type = {
  featuresText?: string;
  compatibilityFeaturesText?: string;
  evmCosmwasmFeaturesText?: string;

  /** Style props */
  propTop?: Property.Top;
  propAlignItems?: Property.AlignItems;
  propLeft?: Property.Left;
  propAlignSelf?: Property.AlignSelf;
  propWidth?: Property.Width;
  propTextTransform?: Property.TextTransform;
};

const UpgradeabilityCard111: FunctionComponent<UpgradeabilityCard11Type> = ({
  featuresText,
  compatibilityFeaturesText,
  evmCosmwasmFeaturesText,
  propTop,
  propAlignItems,
  propLeft,
  propAlignSelf,
  propWidth,
  propTextTransform,
}) => {
  const card1Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      alignItems: propAlignItems,
      left: propLeft,
    };
  }, [propTop, propAlignItems, propLeft]);

  const xpanderStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const designedForAllStyle: CSS.Properties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className={styles.card1} style={card1Style}>
      <div className={styles.card1Child} />
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon1.svg" />
        <div className={styles.xpanderParent}>
          <div className={styles.xpander} style={xpanderStyle}>
            {featuresText}
          </div>
          <div className={styles.simplifiedLanguageBlock}>
            {compatibilityFeaturesText}
          </div>
          <div className={styles.designedForAll} style={designedForAllStyle}>
            {evmCosmwasmFeaturesText}
          </div>
          <div className={styles.joinTheCodex}>JOIN THE Codex MOVEMENT ↗</div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeabilityCard111;
