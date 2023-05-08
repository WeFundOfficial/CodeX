import { FunctionComponent, useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import styles from "./ToImplement.module.css";
const ToImplement: FunctionComponent = () => {
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
      <div className={styles.toImplement}>
        <div className={styles.toImplementChild} />
        <div className={styles.buildingWidelyUsedWeb3ApplParent}>
          <div className={styles.mission}>
            Building Widely-Used Web3 Applications.
          </div>
          <input
            className={styles.codexIsAContainer}
            type="text"
            placeholder="CodeX is a dedicated project for the mass adoption of blockchain users."
          >
            <span className={styles.c}>C</span>
            <span className={styles.ode}>ode</span>
            <span className={styles.c}>X</span>
            <span className={styles.ode}>
              {" "}
              is a dedicated project for the mass adoption of blockchain users.
            </span>
          </input>
          <div className={styles.buttonCtaParent}>
            <Button variant="contained" color="primary">
              build on Codex
            </Button>
            <Button variant="contained" color="primary">
              eksplore whitepaper
            </Button>
          </div>
        </div>
        <div className={styles.theCodexFoundationIsKeyBeParent}>
          <div className={styles.theCodexFoundationContainer}>
            <p
              className={styles.theCodexFoundation}
            >{`The Codex Foundation `}</p>
            <p className={styles.theCodexFoundation}>
              is Key Behind the CodeX Ecosystem
            </p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.missionParent}>
              <div className={styles.mission}>Mission</div>
              <div className={styles.supportCodexInContainer}>
                <p className={styles.theCodexFoundation}>
                  Support Codex in to ensure the growth of the network,
                  fostering a strong and evolving ecosystem, and attracting
                  builders and developers to continually improve the
                  infrastructure of the Codex Ecosystem to reach the goal for
                  mass adoption.
                </p>
              </div>
            </div>
            <div className={styles.coreFocusParent}>
              <div className={styles.coreFocus}>Core Focus</div>
              <div className={styles.theCodexFoundation1}>
                The Codex Foundation is dedicated to supporting the growth and
                development of the Codex protocol, decentralized network, and
                builder as well developer ecosystem.
              </div>
              <div className={styles.ensureParticipationAndContainer}>
                <p className={styles.theCodexFoundation}>
                  <span className={styles.span}>→</span>
                  <span> Ensure participation and growth</span>
                </p>
                <p className={styles.theCodexFoundation}>
                  <span className={styles.span}>→</span>
                  <span> Encourage application development</span>
                </p>
                <p className={styles.theCodexFoundation}>
                  <span className={styles.span}>→</span>
                  <span> Develop a strong developer ecosystem</span>
                </p>
                <p className={styles.theCodexFoundation}>
                  <span className={styles.span}>{`→ `}</span>
                  <span>Provide a decent infrastructure for builder</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.xpander}>Xpander</div>
        <div className={styles.toImplementItem} />
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.codexTokenomicsOverviewParent}>
            <div className={styles.codexTokenomicsOverview}>
              Codex Tokenomics Overview
            </div>
            <div className={styles.theCodexFoundationPresentsWrapper}>
              <div className={styles.theCodexFoundation2}>
                The Codex Foundation presents a summary version of the Codex
                protocol tokenomics.
              </div>
            </div>
            <Button variant="contained" color="primary">
              view tokenomics
            </Button>
          </div>
        </div>
        <div className={styles.lineGroup}>
          <div className={styles.frameChild} />
          <div className={styles.theFirstEcosystemProvidesNParent}>
            <div className={styles.theFirstEcosystem}>
              The First Ecosystem provides No-Code for developers
            </div>
            <textarea
              className={styles.frameInner}
              placeholder="The Future-proof Network"
              defaultValue="With a unique combination of safety, user experience, upgradeability, and performance, the Codex infrastructure and its Move programming language empower developers to build web3 applications that solve today’s consumer needs on a network that can evolve for anything to come."
            />
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.frameChild} />
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.xpanderParent}>
              <div className={styles.xpander1}>Xpander</div>
              <div className={styles.simplifiedLanguageBlock}>
                Simplified Language, Block - Compiler Based
              </div>
              <textarea
                className={styles.designedForAllContainer}
                placeholder="Designed for all developers, without any programming knowledge. xpander is a block-based compiler smart contract derived from several advanced languages ​​such as Rust, Solidity, Ruby, Skala and many more. By implementing a sequential-level programming structure, developers are able to create no-code applications and contracts while more advanced developers are able to contribute to convert processing flows directly into working applications. Veteran coders can continue to create compiler-level code and contribute directly to the code libraries within the CodeX protocol."
              >
                <span className={styles.designed}>
                  <span className={styles.designed1}>Designed</span>
                </span>
                <span className={styles.forAllDevelopersWithoutAn}>
                  <span
                    className={styles.designed}
                  >{` for all developers, without any programming knowledge. `}</span>
                  <span className={styles.x1}>x</span>
                  <span className={styles.designed}>
                    pander is a block-based compiler smart contract derived from
                    several advanced languages ​​such as Rust, Solidity, Ruby,
                    Skala and many more. By implementing a sequential-level
                    programming structure, developers are able to create no-code
                    applications and contracts while more advanced developers
                    are able to contribute to convert processing flows directly
                    into working applications. Veteran coders can continue to
                    create compiler-level code and contribute directly to the
                    code libraries within the CodeX protocol.
                  </span>
                </span>
              </textarea>
              <div className={styles.joinTheCodex}>
                JOIN THE Codex MOVEMENT ↗
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1Parent}>
          <div className={styles.card11}>
            <div className={styles.frameChild} />
            <div className={styles.iconParent}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.xpanderParent}>
                <div className={styles.xpander2}>Upgradeability</div>
                <div
                  className={styles.simplifiedLanguageBlock1}
                >{`Compatibility Cosmos SDK & EVM`}</div>
                <div className={styles.designedForAll}>
                  Combining the Ethereum Virtual Machine (EVM) and CosmWasm can
                  provide developers with a powerful set of tools to build
                  decentralized applications. CodeX supports the functionality
                  for developers to be multichain allowing EVM ecosystem and
                  Cosmoswasm ecosystem to be able interact seamlessly.
                </div>
                <div className={styles.joinTheCodex}>
                  JOIN THE Codex MOVEMENT ↗
                </div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group3.svg" />
        </div>
        <div className={styles.card12}>
          <div className={styles.frameChild} />
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.xpanderParent}>
              <div className={styles.xpander3}>Performace</div>
              <div
                className={styles.simplifiedLanguageBlock1}
              >{`Scalable & Reliable`}</div>
              <div className={styles.designedForAll1}>
                Codex focuses on performance for the user. With a parallel,
                batch-optimized, and modular transaction processing pipeline,
                plus innovations like combining between Proof-of-stake,
                Proof-of-History and Proof-of-Contribute, Codex brings advance
                performance to developers and a seamless experience for end
                users.
              </div>
              <div className={styles.joinTheCodex}>
                JOIN THE Codex MOVEMENT ↗
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon1} alt="" src="/group11.svg" />
        <div className={styles.card13}>
          <div className={styles.frameChild} />
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.xpanderParent}>
              <div className={styles.xpander2}>User Experiance</div>
              <div className={styles.simplifiedLanguageBlock1}>
                Simple Development, Enjoyable Applications
              </div>
              <div className={styles.designedForAll1}>
                The ecosystem being built by CodeX is poised to improve rapid
                adoption and development of blockchain technologies by removing
                the common barriers to entering the industry - the steep
                learning curve to build on web 3.0 infrastructures and the
                ambiguous safety and security risks associated blockchain
                interactions for new web 3.0 users. With Codex’s reliable
                infrastructure, developers can focus on making great
                applications and end-users can enjoy a friendly, seamless
                experience.
              </div>
              <div className={styles.joinTheCodex}>
                JOIN THE Codex MOVEMENT ↗
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="/group21.svg" />
        <div className={styles.frameGroup}>
          <div className={styles.logoNewParent}>
            <div className={styles.logoNew}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.communityParent}>
                <div className={styles.community}>community</div>
                <div className={styles.community}>Developers</div>
                <div className={styles.community}>Grants</div>
                <div className={styles.community}>About us</div>
              </div>
              <div className={styles.communityParent}>
                <div className={styles.community}>whitepaper</div>
                <div className={styles.community}>brand</div>
                <div className={styles.community}>privacy</div>
                <div className={styles.community}>terms</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.community}>find us</div>
            <div className={styles.mditwitterParent}>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mditwitter1.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/icoutlinediscord.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mdigithub.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent1}>
            <div className={styles.cardBottomParent}>
              <form className={styles.cardBottom}>
                <Button
                  className={styles.discussionForum}
                  sx={{ width: 328 }}
                  variant="contained"
                  color="primary"
                >
                  Documentation
                </Button>
                <div className={styles.participateInOpen}>
                  Guides to develop applications for the Codex blockchain, run
                  nodes, and get involved in the Codex ecosystem.
                </div>
                <div className={styles.getInvolved}>get started</div>
              </form>
              <form className={styles.cardBottom}>
                <div className={styles.discussionForum1}>Discussion Forum</div>
                <div className={styles.participateInOpen}>
                  <p
                    className={styles.theCodexFoundation}
                  >{`Participate in open discussions across various threads, explore opportunities `}</p>
                  <p className={styles.theCodexFoundation}>
                    to collaborate, and get more involved in projects building
                    on Codex.
                  </p>
                </div>
                <div className={styles.getInvolved}>get involved</div>
              </form>
              <form className={styles.cardBottom}>
                <div className={styles.discussionForum1}>telegram</div>
                <div className={styles.participateInOpen}>
                  Join our Telegram to chat with us directly, take part in our
                  growing ecosystem.
                </div>
                <div className={styles.getInvolved}>join us</div>
              </form>
            </div>
            <div className={styles.cardBottomParent}>
              <div className={styles.cardBottom}>
                <Button
                  className={styles.discussionForum}
                  sx={{ width: 328 }}
                  variant="contained"
                  color="primary"
                >
                  Documentation
                </Button>
                <div className={styles.participateInOpen3}>
                  Guides to develop applications for the Codex blockchain, run
                  nodes, and get involved in the Codex ecosystem.
                </div>
                <div className={styles.getInvolved3}>get started</div>
              </div>
              <form className={styles.cardBottom}>
                <div className={styles.discussionForum1}>Discussion Forum</div>
                <div className={styles.participateInOpen}>
                  <p
                    className={styles.theCodexFoundation}
                  >{`Participate in open discussions across various threads, explore opportunities `}</p>
                  <p className={styles.theCodexFoundation}>
                    to collaborate, and get more involved in projects building
                    on Codex.
                  </p>
                </div>
                <div className={styles.getInvolved}>get involved</div>
              </form>
              <div className={styles.cardBottom5}>
                <div className={styles.discussionForum5}>Discord</div>
                <div className={styles.participateInOpen5}>
                  Join our Discord to chat with us directly, take part in our
                  growing ecosystem, and participate in Move Mondays.
                </div>
                <div className={styles.getInvolved3}>join us</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.image16Parent}>
            <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
            <div className={styles.image17Parent}>
              <img
                className={styles.image17Icon}
                alt=""
                src="/image-17@2x.png"
              />
              <img
                className={styles.image18Icon}
                alt=""
                src="/image-17@2x.png"
              />
            </div>
          </div>
          <img className={styles.image16Icon1} alt="" src="/image-161@2x.png" />
        </div>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.codexColor11Icon}
              alt=""
              src="/codexcolor1-1@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.buttonCtaParent}>
              <div className={styles.community1} onClick={openFrame}>
                community
              </div>
              <div
                className={styles.developers1}
                onClick={onDevelopersText1Click}
              >
                Developers
              </div>
              <div className={styles.grants1}>Grants</div>
              <div className={styles.grants1}>About us</div>
            </div>
            <Button
              variant="contained"
              color="primary"
            >{`build on Codex `}</Button>
          </div>
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

export default ToImplement;
