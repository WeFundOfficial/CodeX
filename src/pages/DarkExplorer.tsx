import { FunctionComponent, useCallback } from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import styles from "./DarkExplorer.module.css";
const DarkExplorer: FunctionComponent = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "community" to the project
  }, []);

  return (
    <div className={styles.darkExplorer}>
      <div className={styles.mainmuiboxRoot}>
        <div className={styles.divmuiboxRoot}>
          <img
            className={styles.svgmuisvgiconRoot}
            alt=""
            src="/svgmuisvgiconroot31.svg"
          />
          <div className={styles.back}>Back</div>
          <div className={styles.search}>
            <img
              className={styles.svgmuisvgiconRoot1}
              alt=""
              src="/svgmuisvgiconroot1110.svg"
            />
            <div className={styles.divplaceholder}>
              <div className={styles.searchExplorer}>Search Explorer</div>
            </div>
            <div className={styles.fieldsetmuioutlinedinputNotc} />
          </div>
          <div className={styles.divmuistackRoot}>
            <div className={styles.userTransactions}>User Transactions</div>
            <div className={styles.viewAllTransactions}>
              View All Transactions
            </div>
          </div>
          <div className={styles.divmuistackRoot1}>
            <div className={styles.divmuiboxRoot1}>
              <div className={styles.version}>Version</div>
              <div className={styles.divmuistackRoot2}>
                <div className={styles.type}>Type</div>
                <img
                  className={styles.svgmuisvgiconRoot2}
                  alt=""
                  src="/svgmuisvgiconroot211.svg"
                />
              </div>
              <div className={styles.timestamp}>Timestamp</div>
              <div className={styles.sender}>Sender</div>
              <div className={styles.sentTo}>Sent To</div>
              <div className={styles.function}>Function</div>
              <div className={styles.amount}>Amount</div>
              <div className={styles.trmuitablerowRoot}>
                <div className={styles.div}>137350771</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot311.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:50</div>
                <div className={styles.divmuistackRoot3}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className={styles.amuitypographyRoot}>
                    <div className={styles.xf92b7d9c}>0x834d…a5d7</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot41.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image11@2x.png"
                  />
                  <div className={styles.amuitypographyRoot1}>
                    <div className={styles.xf92b7d9c}>0xc350…6cc9</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot51.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot}>
                  <div className={styles.divmuiboxRoot2}>
                    <div className={styles.divmuistackRoot5}>
                      <img
                        className={styles.svgmuisvgiconRoot6}
                        alt=""
                        src="/svgmuisvgiconroot61.svg"
                      />
                      <div className={styles.coinTransfer}>Coin Transfer</div>
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot6}>
                  <div className={styles.span}>
                    <div className={styles.div2}>0.0193</div>
                    <div className={styles.frame} />
                    <div className={styles.cdx}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas00010224}>Gas 0.0010224</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot1}>
                <div className={styles.div}>137350770</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot71.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:50</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0xf92b…7d9c</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot8.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image3@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot9.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot1}>
                  <div className={styles.divmuiboxRoot4}>
                    <div className={styles.coinTransfer}>
                      oracle_save_result_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot9}>
                  <div className={styles.span}>
                    <div className={styles.div2}>0.0193</div>
                    <div className={styles.frame} />
                    <div className={styles.cdx}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas00010224}>Gas 0.0010224</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot2}>
                <div className={styles.div6}>137350769</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot10.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:50</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image4@2x.png"
                  />
                  <div className={styles.amuitypographyRoot1}>
                    <div className={styles.xf92b7d9c}>0x55e9…0f55</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot11101.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot11}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image5@2x.png"
                  />
                  <div className={styles.amuitypographyRoot5}>
                    <div className={styles.xf92b7d9c}>0x29aa…665b</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot12.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot2}>
                  <div className={styles.divmuiboxRoot6}>
                    <div className={styles.coinTransfer}>
                      open_gift::mint_event_ticket
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot12}>
                  <div className={styles.span}>
                    <div className={styles.div2}>0.0193</div>
                    <div className={styles.frame} />
                    <div className={styles.cdx}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas00010224}>Gas 0.0010224</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot3}>
                <div className={styles.div6}>137350760</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot13.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:48</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className={styles.amuitypographyRoot6}>
                    <div className={styles.xf92b7d9c}>0xca62…8137</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot14.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image7@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot15.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot3}>
                  <div className={styles.divmuiboxRoot8}>
                    <div className={styles.coinTransfer}>
                      crank_pop_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot15}>
                  <div className={styles.span}>
                    <div className={styles.div2}>0.0193</div>
                    <div className={styles.frame} />
                    <div className={styles.cdx}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas00010224}>Gas 0.0010224</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot4}>
                <div className={styles.div6}>137350757</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot16.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:48</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image8@2x.png"
                  />
                  <div className={styles.amuitypographyRoot8}>
                    <div className={styles.xf92b7d9c}>0x77b5…a76a</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot17.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image9@2x.png"
                  />
                  <div className={styles.amuitypographyRoot9}>
                    <div className={styles.xf92b7d9c}>0xf22b…17fa</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot18.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot4}>
                  <div className={styles.divmuiboxRoot10}>
                    <div className={styles.coinTransfer}>
                      coin_bridge::send_coin_from
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot18}>
                  <div className={styles.span4}>
                    <div className={styles.div2}>0.03068106</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00024</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot5}>
                <div className={styles.div6}>137350756</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot19.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:48</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image10@2x.png"
                  />
                  <div className={styles.amuitypographyRoot8}>
                    <div className={styles.xf92b7d9c}>0xc20e…3255</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot20.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image111@2x.png"
                  />
                  <div className={styles.amuitypographyRoot11}>
                    <div className={styles.xf92b7d9c}>0xc284…94eb</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot2111.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot5}>
                  <div className={styles.divmuiboxRoot12}>
                    <div className={styles.coinTransfer}>
                      oracle::mso_propose
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot21}>
                  <div className={styles.span4}>
                    <div className={styles.div2}>0.03068106</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00024</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot6}>
                <div className={styles.div}>137350749</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot22.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:47</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image12@2x.png"
                  />
                  <div className={styles.amuitypographyRoot12}>
                    <div className={styles.xf92b7d9c}>0xa1bc…fd07</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot23.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot11}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image13@2x.png"
                  />
                  <div className={styles.amuitypographyRoot12}>
                    <div className={styles.xf92b7d9c}>0x163d…ba6e</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot24.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot6}>
                  <div className={styles.divmuiboxRoot14}>
                    <div className={styles.coinTransfer}>scripts::swap</div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot24}>
                  <div className={styles.span4}>
                    <div className={styles.div2}>0.03068106</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00024</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot7}>
                <div className={styles.div}>137350748</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot25.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:47</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image14@2x.png"
                  />
                  <div className={styles.amuitypographyRoot1}>
                    <div className={styles.xf92b7d9c}>0x13a3…2c7e</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot26.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image15@2x.png"
                  />
                  <div className={styles.amuitypographyRoot15}>
                    <div className={styles.xf92b7d9c}>0x5764…9d4f</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot27.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot7}>
                  <div className={styles.divmuiboxRoot16}>
                    <div className={styles.coinTransfer}>
                      transfer_tokens::transfer_tokens_entry
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot27}>
                  <div className={styles.span4}>
                    <div className={styles.div2}>0.03068106</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00024</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot8}>
                <div className={styles.div}>137350741</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot28.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:46</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image16@2x.png"
                  />
                  <div className={styles.amuitypographyRoot6}>
                    <div className={styles.xf92b7d9c}>0xca62…8137</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot29.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image17@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot30.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot3}>
                  <div className={styles.divmuiboxRoot18}>
                    <div className={styles.coinTransfer}>
                      crank_pop_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot30}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00006</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot9}>
                <div className={styles.div}>137350730</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot3111.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:44</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image18@2x.png"
                  />
                  <div className={styles.amuitypographyRoot15}>
                    <div className={styles.xf92b7d9c}>0xc69a…b8ea</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot32.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image19@2x.png"
                  />
                  <div className={styles.amuitypographyRoot19}>
                    <div className={styles.xf92b7d9c}>0xf22b…17fa</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot33.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot9}>
                  <div className={styles.divmuiboxRoot20}>
                    <div className={styles.coinTransfer}>
                      coin_bridge::claim_coin
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot33}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00006</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot10}>
                <div className={styles.div6}>137350725</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot34.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:43</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image20@2x.png"
                  />
                  <div className={styles.amuitypographyRoot}>
                    <div className={styles.xf92b7d9c}>0xdee4…2fc5</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot35.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot11}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image21@2x.png"
                  />
                  <div className={styles.amuitypographyRoot5}>
                    <div className={styles.xf92b7d9c}>0x7778…ddbb</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot36.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot10}>
                  <div className={styles.divmuiboxRoot22}>
                    <div className={styles.coinTransfer}>
                      apter::claim_quest
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot36}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00006</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot11}>
                <div className={styles.div6}>137350720</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot37.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:43</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image22@2x.png"
                  />
                  <div className={styles.amuitypographyRoot6}>
                    <div className={styles.xf92b7d9c}>0xca62…8137</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot38.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image23@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot39.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot3}>
                  <div className={styles.divmuiboxRoot8}>
                    <div className={styles.coinTransfer}>
                      crank_pop_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot39}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00006</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot12}>
                <div className={styles.div6}>137350717</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot40.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:43</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image24@2x.png"
                  />
                  <div className={styles.amuitypographyRoot24}>
                    <div className={styles.xf92b7d9c}>0xf92b…7d9c</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot411.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image25@2x.png"
                  />
                  <div className={styles.amuitypographyRoot24}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot42.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot1}>
                  <div className={styles.divmuiboxRoot26}>
                    <div className={styles.coinTransfer}>
                      oracle_save_result_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot42}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.apt}>APT</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas000024}>Gas 0.00006</div>
                    <div className={styles.frame1} />
                    <div className={styles.apt1}>APT</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot13}>
                <div className={styles.div6}>137350714</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot43.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:43</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image26@2x.png"
                  />
                  <div className={styles.amuitypographyRoot26}>
                    <div className={styles.xf92b7d9c}>0xef84…f26c</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot44.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image27@2x.png"
                  />
                  <div className={styles.amuitypographyRoot27}>
                    <div className={styles.xf92b7d9c}>0x190d…1e12</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot45.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot3}>
                  <div className={styles.divmuiboxRoot28}>
                    <div className={styles.coinTransfer}>
                      scripts_v2::swap_into
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot45}>
                  <div className={styles.span4}>
                    <div className={styles.div41}>0.04254705</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000108</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot14}>
                <div className={styles.div}>137350711</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot46.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:42</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image28@2x.png"
                  />
                  <div className={styles.amuitypographyRoot28}>
                    <div className={styles.xf92b7d9c}>0x8fa1…1d00</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot47.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot11}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image29@2x.png"
                  />
                  <div className={styles.amuitypographyRoot5}>
                    <div className={styles.xf92b7d9c}>0x8957…8039</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot48.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot14}>
                  <div className={styles.divmuiboxRoot30}>
                    <div className={styles.coinTransfer}>aggregator::swap</div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot48}>
                  <div className={styles.span4}>
                    <div className={styles.div41}>0.04254705</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000108</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot15}>
                <div className={styles.div}>137350696</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot49.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:40</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image30@2x.png"
                  />
                  <div className={styles.amuitypographyRoot6}>
                    <div className={styles.xf92b7d9c}>0xca62…8137</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot50.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image31@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot511.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot3}>
                  <div className={styles.divmuiboxRoot18}>
                    <div className={styles.coinTransfer}>
                      crank_pop_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot51}>
                  <div className={styles.span4}>
                    <div className={styles.div41}>0.04254705</div>
                    <div className={styles.frame8} />
                    <div className={styles.cdx8}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000108</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot16}>
                <div className={styles.div}>137350689</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot52.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:39</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image32@2x.png"
                  />
                  <div className={styles.amuitypographyRoot28}>
                    <div className={styles.xf92b7d9c}>0xdf07…40fd</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot53.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image33@2x.png"
                  />
                  <div className={styles.divmuistackRoot54}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image34@2x.png"
                    />
                    <div className={styles.amuitypographyRoot2}>
                      <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                      <img
                        className={styles.svgmuisvgiconRoot4}
                        alt=""
                        src="/svgmuisvgiconroot54.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot16}>
                  <div className={styles.divmuiboxRoot34}>
                    <div className={styles.coinTransfer}>
                      token::opt_in_direct_transfer
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot30}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000519</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot17}>
                <div className={styles.div}>137350682</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot55.svg"
                />
                <div className={styles.div1}>05/07/2023 15:41:38</div>
                <div className={styles.divmuistackRoot3}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image35@2x.png"
                  />
                  <div className={styles.amuitypographyRoot}>
                    <div className={styles.xf92b7d9c}>0x470d…2d07</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot56.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image36@2x.png"
                  />
                  <div className={styles.amuitypographyRoot15}>
                    <div className={styles.xf92b7d9c}>0x5764…9d4f</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot57.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot7}>
                  <div className={styles.divmuiboxRoot16}>
                    <div className={styles.coinTransfer}>
                      transfer_tokens::transfer_tokens_entry
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot58}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000519</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot18}>
                <div className={styles.div6}>137350671</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot58.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:36</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image37@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0xf92b…7d9c</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot59.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image38@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0x7d7e…9fb8</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot60.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot1}>
                  <div className={styles.divmuiboxRoot4}>
                    <div className={styles.coinTransfer}>
                      oracle_save_result_action::run
                    </div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot61}>
                  <div className={styles.span8}>
                    <div className={styles.div26}>0</div>
                    <div className={styles.frame16} />
                    <div className={styles.cdx16}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas0000108}>Gas 0.000519</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
              <div className={styles.trmuitablerowRoot19}>
                <div className={styles.div6}>137350662</div>
                <img
                  className={styles.svgmuisvgiconRoot3}
                  alt=""
                  src="/svgmuisvgiconroot611.svg"
                />
                <div className={styles.div7}>05/07/2023 15:41:34</div>
                <div className={styles.divmuistackRoot7}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image39@2x.png"
                  />
                  <div className={styles.amuitypographyRoot}>
                    <div className={styles.xf92b7d9c}>0xd14b…2fe4</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot62.svg"
                    />
                  </div>
                </div>
                <div className={styles.divmuistackRoot4}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image40@2x.png"
                  />
                  <div className={styles.amuitypographyRoot2}>
                    <div className={styles.xf92b7d9c}>0xa7f0…e498</div>
                    <img
                      className={styles.svgmuisvgiconRoot4}
                      alt=""
                      src="/svgmuisvgiconroot63.svg"
                    />
                  </div>
                </div>
                <div className={styles.tdmuitablecellRoot19}>
                  <div className={styles.divmuiboxRoot40}>
                    <div className={styles.coinTransfer}>clmm_router::swap</div>
                  </div>
                </div>
                <div className={styles.divmuistackRoot42}>
                  <div className={styles.span19}>
                    <div className={styles.div59}>0.1</div>
                    <div className={styles.frame38} />
                    <div className={styles.cdx36}>CDX</div>
                  </div>
                  <div className={styles.divmuiboxRoot3}>
                    <div className={styles.gas00002265}>Gas 0.0002265</div>
                    <div className={styles.frame1} />
                    <div className={styles.cdx1}>CDX</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ulmuipaginationUl}>
              <div className={styles.goToFirstPage}>
                <img
                  className={styles.svgmuisvgiconRoot64}
                  alt=""
                  src="/svgmuisvgiconroot64.svg"
                />
              </div>
              <div className={styles.goToPreviousPage}>
                <img
                  className={styles.svgmuisvgiconRoot64}
                  alt=""
                  src="/svgmuisvgiconroot65.svg"
                />
              </div>
              <div className={styles.page1}>
                <div className={styles.xf92b7d9c}>1</div>
              </div>
              <div className={styles.goToPage2}>
                <div className={styles.xf92b7d9c}>2</div>
              </div>
              <div className={styles.goToPage3}>
                <div className={styles.xf92b7d9c}>3</div>
              </div>
              <div className={styles.goToPage4}>
                <div className={styles.xf92b7d9c}>4</div>
              </div>
              <div className={styles.goToPage5}>
                <div className={styles.xf92b7d9c}>5</div>
              </div>
              <div className={styles.goToPage6}>
                <div className={styles.xf92b7d9c}>6</div>
              </div>
              <div className={styles.goToPage7}>
                <div className={styles.xf92b7d9c}>7</div>
              </div>
              <div className={styles.goToPage8}>
                <div className={styles.xf92b7d9c}>8</div>
              </div>
              <div className={styles.goToPage9}>
                <div className={styles.xf92b7d9c}>9</div>
              </div>
              <div className={styles.goToPage10}>
                <div className={styles.xf92b7d9c}>10</div>
              </div>
              <div className={styles.div70}>…</div>
              <div className={styles.goToNextPage}>
                <img
                  className={styles.svgmuisvgiconRoot64}
                  alt=""
                  src="/svgmuisvgiconroot66.svg"
                />
              </div>
              <div className={styles.goToLastPage}>
                <img
                  className={styles.svgmuisvgiconRoot64}
                  alt=""
                  src="/svgmuisvgiconroot67.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainnetWrapper} onClick={onFrameContainerClick}>
          <div className={styles.mainnet}>Mainnet</div>
        </div>
        <div className={styles.testnetWrapper}>
          <div className={styles.testnet}>Testnet</div>
        </div>
        <div className={styles.devnetWrapper}>
          <div className={styles.testnet}>Devnet</div>
        </div>
        <Footer />
        <MainHeader
          productIds="/svgmuisvgiconroot73.svg"
          productDimensions="/icondark1.svg"
          productIds24x24="/svgmuisvgiconroot74.svg"
          productIds40x40="/codex3-1@2x.png"
        />
      </div>
      <div className={styles.buttonHjEtll8Minimizedwid}>
        <div className={styles.feedback}>Feedback</div>
      </div>
    </div>
  );
};

export default DarkExplorer;
