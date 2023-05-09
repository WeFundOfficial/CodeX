import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./KavaContainer.module.css";

type KavaContainerType = {
  rosettaKava?: string;
  kavaImplementationOfTheCo?: string;
  svgh2d11e2bffd?: string;
  go?: string;
  frame?: string;
  prop?: string;
  frame1?: string;
  frame2?: string;
  prop1?: string;
  frame3?: string;
  prop2?: string;
  frame4?: string;
  prop3?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propBackgroundColor?: Property.BackgroundColor;
  propLeft1?: Property.Left;
  propLeft2?: Property.Left;
  propWidth1?: Property.Width;
  propLeft3?: Property.Left;
  propLeft4?: Property.Left;
  propLeft5?: Property.Left;
  propLeft6?: Property.Left;
  propWidth2?: Property.Width;
  propLeft7?: Property.Left;
  propLeft8?: Property.Left;
  propLeft9?: Property.Left;
  propLeft10?: Property.Left;
  propLeft11?: Property.Left;
};

const KavaContainer: FunctionComponent<KavaContainerType> = ({
  rosettaKava,
  kavaImplementationOfTheCo,
  svgh2d11e2bffd,
  go,
  frame,
  prop,
  frame1,
  frame2,
  prop1,
  frame3,
  prop2,
  frame4,
  prop3,
  propTop,
  propLeft,
  propWidth,
  propBackgroundColor,
  propLeft1,
  propLeft2,
  propWidth1,
  propLeft3,
  propLeft4,
  propLeft5,
  propLeft6,
  propWidth2,
  propLeft7,
  propLeft8,
  propLeft9,
  propLeft10,
  propLeft11,
}) => {
  const liBoxRowStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const spanLabel1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const goStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spanrepoLanguageColorStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameIcon1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  const frameIcon2Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const apache20Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const frameIcon3Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  const div3Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft6,
      width: propWidth2,
    };
  }, [propLeft6, propWidth2]);

  const frameIcon4Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft7,
    };
  }, [propLeft7]);

  const div4Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft8,
    };
  }, [propLeft8]);

  const frameIcon5Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft9,
    };
  }, [propLeft9]);

  const div5Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft10,
    };
  }, [propLeft10]);

  const updatedStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft11,
    };
  }, [propLeft11]);

  return (
    <div className={styles.liboxRow} style={liBoxRowStyle}>
      <div className={styles.divpublic}>
        <div className={styles.divdFlex}>
          <div className={styles.divmb1}>
            <div className={styles.rosettaKava}>{rosettaKava}</div>
            <div className={styles.spanlabel} style={spanLabel1Style}>
              <div className={styles.public}>Public</div>
            </div>
            <div className={styles.kavaImplementationOf}>
              {kavaImplementationOfTheCo}
            </div>
          </div>
          <img
            className={styles.svgh2d11e2bffdIcon}
            alt=""
            src={svgh2d11e2bffd}
          />
        </div>
        <div className={styles.divcolorFgMuted}>
          <div className={styles.go} style={goStyle}>
            {go}
          </div>
          <div
            className={styles.spanrepoLanguageColor}
            style={spanrepoLanguageColorStyle}
          />
          <img
            className={styles.frameIcon}
            alt=""
            src={frame}
            style={frameIcon1Style}
          />
          <div className={styles.div} style={div2Style}>
            {prop}
          </div>
          <img
            className={styles.frameIcon1}
            alt=""
            src={frame1}
            style={frameIcon2Style}
          />
          <div
            className={styles.apache20}
            style={apache20Style}
          >{`Apache-2.0 `}</div>
          <img
            className={styles.frameIcon2}
            alt=""
            src={frame2}
            style={frameIcon3Style}
          />
          <div className={styles.div1} style={div3Style}>
            {prop1}
          </div>
          <img
            className={styles.frameIcon3}
            alt=""
            src={frame3}
            style={frameIcon4Style}
          />
          <div className={styles.div2} style={div4Style}>
            {prop2}
          </div>
          <img
            className={styles.frameIcon4}
            alt=""
            src={frame4}
            style={frameIcon5Style}
          />
          <div className={styles.div3} style={div5Style}>
            {prop3}
          </div>
          <div
            className={styles.updated}
            style={updatedStyle}
          >{`Updated `}</div>
        </div>
      </div>
    </div>
  );
};

export default KavaContainer;
