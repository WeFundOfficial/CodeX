import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./PinnedContainer.module.css";

type PinnedContainerType = {
  deFiForCrypto?: string;
  kava?: string;
  prop?: string;
  frame?: string;
  prop1?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propLeft1?: Property.Left;
  propWidth1?: Property.Width;
  propLeft2?: Property.Left;
  propLeft3?: Property.Left;
  propWidth2?: Property.Width;
};

const PinnedContainer: FunctionComponent<PinnedContainerType> = ({
  deFiForCrypto,
  kava,
  prop,
  frame,
  prop1,
  propRight,
  propLeft,
  propTop,
  propWidth,
  propLeft1,
  propWidth1,
  propLeft2,
  propLeft3,
  propWidth2,
}) => {
  const divBoxStyle: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
      top: propTop,
    };
  }, [propRight, propLeft, propTop]);

  const deFiForCryptoStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spanLabelStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft3,
      width: propWidth2,
    };
  }, [propLeft3, propWidth2]);

  return (
    <div className={styles.divbox} style={divBoxStyle}>
      <div className={styles.divpinnedItemListItemCont}>
        <div className={styles.defiForCrypto} style={deFiForCryptoStyle}>
          {deFiForCrypto}
        </div>
        <div className={styles.divflex1}>
          <img className={styles.frameIcon} alt="" src="/frame12.svg" />
          <div className={styles.kava}>{kava}</div>
          <div className={styles.spanlabel} style={spanLabelStyle}>
            <div className={styles.public}>Public</div>
          </div>
        </div>
        <div className={styles.pmb0}>
          <div className={styles.go}>Go</div>
          <div className={styles.spanrepoLanguageColor} />
          <img className={styles.frameIcon1} alt="" src="/frame13.svg" />
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
          <img
            className={styles.frameIcon2}
            alt=""
            src={frame}
            style={frameIconStyle}
          />
          <div className={styles.div1} style={div1Style}>
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnedContainer;
