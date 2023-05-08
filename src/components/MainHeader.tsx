import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MainHeader.module.css";

type MainHeaderType = {
  productIds?: string;
  productDimensions?: string;
  productIds24x24?: string;
  productIds40x40?: string;

  /** Style props */
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;
  propColor3?: Property.Color;
  propColor4?: Property.Color;
  propBorder?: Property.Border;
  propLeft?: Property.Left;
  propBackground?: Property.Background;
  propBackgroundColor?: Property.BackgroundColor;
  propColor5?: Property.Color;
  propWidth?: Property.Width;
  propHeight?: Property.Height;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({
  productIds,
  productDimensions,
  productIds24x24,
  productIds40x40,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propBorder,
  propLeft,
  propBackground,
  propBackgroundColor,
  propColor5,
  propWidth,
  propHeight,
}) => {
  const transactionsStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const analyticsStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const validatorsStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const blocksStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const mainnetStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const fieldsetMuiOutlinedInputNotcStyle: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const iconDarkStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const buttonMuiButtonBaseRootStyle: CSS.Properties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  const connectWalletStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const codeX31IconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.divmuitoolbarRoot}>
      <div className={styles.divmuiboxRoot}>
        <b className={styles.transactions} style={transactionsStyle}>
          Transactions
        </b>
        <div className={styles.analytics} style={analyticsStyle}>
          Analytics
        </div>
        <div className={styles.validators} style={validatorsStyle}>
          Validators
        </div>
        <div className={styles.blocks} style={blocksStyle}>
          Blocks
        </div>
      </div>
      <div className={styles.divmuiinputbaseRoot}>
        <div className={styles.selectNetwork}>
          <div className={styles.mainnet} style={mainnetStyle}>
            mainnet
          </div>
        </div>
        <img className={styles.svgmuisvgiconRoot} alt="" src={productIds} />
        <div
          className={styles.fieldsetmuioutlinedinputNotc}
          style={fieldsetMuiOutlinedInputNotcStyle}
        />
      </div>
      <img
        className={styles.iconDark}
        alt=""
        src={productDimensions}
        style={iconDarkStyle}
      />
      <div
        className={styles.buttonmuibuttonbaseRoot}
        style={buttonMuiButtonBaseRootStyle}
      >
        <img
          className={styles.svgmuisvgiconRoot1}
          alt=""
          src={productIds24x24}
        />
        <div className={styles.pmuitypographyRoot} />
        <div className={styles.connectWallet} style={connectWalletStyle}>
          Connect Wallet
        </div>
      </div>
      <img
        className={styles.codex31Icon}
        alt=""
        src={productIds40x40}
        style={codeX31IconStyle}
      />
    </div>
  );
};

export default MainHeader;
