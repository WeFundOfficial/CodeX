import { FunctionComponent } from "react";
import ERC20DAOTokenContainer from "../components/ERC20DAOTokenContainer";
import MessageBubbleContainer from "../components/MessageBubbleContainer";
import styles from "./AppbunzzdevByHtmltodesig1.module.css";
const AppbunzzdevByHtmltodesig1: FunctionComponent = () => {
  return (
    <div className={styles.appbunzzdevByHtmltodesig}>
      <div className={styles.divcss120bx7o}>
        <div className={styles.divcss120bx7oChild} />
        <div className={styles.divcss2gr2zr}>
          <img
            className={styles.svgh2d7e26f77fIcon}
            alt=""
            src="/svgh2d9722522d.svg"
          />
          <div className={styles.divchakraStack}>
            <div className={styles.explorer}>Explorer</div>
            <div className={styles.documentation}>Documentation</div>
            <div className={styles.features}>Features</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
        <div className={styles.divcss100mnyh}>
          <ERC20DAOTokenContainer />
          <div className={styles.divcssOh1d2g}>
            <div className={styles.divcssOvn3gg}>
              <div className={styles.divcss1ojpa4o}>
                <div className={styles.divmarkdownPreview}>
                  <div className={styles.supportingErc20Standard}>
                    Supporting ERC20 standard, this contract is mainly used for
                    DAO.
                  </div>
                  <div className={styles.ulh2d9d3ff63e}>
                    <div className={styles.lih2d49441a33}>
                      <div className={styles.mainFunctionalityOf}>
                        Main functionality of this contract is snapshot of
                        balances of all the token holders. Every time the
                        proposal creators create the proposal,
                      </div>
                      <div className={styles.createsTheSnapshot}>
                        creates the snapshot by authorized user. Snapshot can be
                        used as voting power according to the proposal strategy.
                      </div>
                    </div>
                    <div className={styles.lih2d4e42a43f}>
                      <div className={styles.anotherFunctionalityOf}>
                        Another functionality of this contract is transferring
                        tokens to multiple addresses. Once the proposal has been
                        approved, sometimes it
                      </div>
                      <div className={styles.requiresToTransfer}>
                        requires to transfer assets to the specified addresses
                        if it is a funding proposal.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divchakraAccordion}>
                <div className={styles.buttonaccordionButton6}>
                  <b className={styles.changelog}>Changelog</b>
                  <img
                    className={styles.svgchakraIcon}
                    alt=""
                    src="/svgchakraselect--icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcontinuallyMessageContai}>
        <MessageBubbleContainer productId="/divclosecontinuallymessagebutton.svg" />
        <div className={styles.divcontinuallyMessageAvatar}>
          <img
            className={styles.anonymousNeutralpngIcon}
            alt=""
            src="/anonymousneutralpng@2x.png"
          />
        </div>
      </div>
      <div className={styles.acontinuallyPoweredByLink}>
        <div className={styles.poweredByContinually}>
          Powered by Continually
        </div>
      </div>
    </div>
  );
};

export default AppbunzzdevByHtmltodesig1;
