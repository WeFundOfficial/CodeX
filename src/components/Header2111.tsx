import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import PortalPopup from "./PortalPopup";
import styles from "./Header21111.module.css";
const Header21111: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onDevelopersText1Click = useCallback(() => {
    // Please sync "developer option a" to the project
  }, []);

  return (
    <>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <img
            className={styles.codexColor11Icon}
            alt=""
            src="/codexcolor1-1@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.communityParent}>
            <div className={styles.community} onClick={openFrame}>
              community
            </div>
            <div className={styles.developers} onClick={onDevelopersText1Click}>
              Developers
            </div>
            <div className={styles.grants}>Grants</div>
            <div className={styles.grants}>About us</div>
          </div>
          <Button
            variant="contained"
            color="primary"
          >{`build on Codex `}</Button>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header21111;
