import { FunctionComponent, useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import styles from "./TeamDark.module.css";
const TeamDark: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.teamDark}>
        <div className={styles.frameParent}>
          <div className={styles.logoNewParent}>
            <div className={styles.logoNew}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.frameGroup}>
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
                src="/mditwitter.svg"
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
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.logoNew1}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-121@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.communityGroup}>
              <div className={styles.community1} onClick={openFrame}>
                community
              </div>
              <div className={styles.blog}>Developers</div>
              <div className={styles.blog}>Grants</div>
              <div className={styles.community}>About us</div>
            </div>
            <div className={styles.btnSmall}>
              <div className={styles.community}>{`build on Codex `}</div>
            </div>
          </div>
        </div>
        <div className={styles.ourTeamParent}>
          <div className={styles.ourTeam}>our team</div>
          <div className={styles.theTeamBehind}>The team behind codeX</div>
          <div className={styles.theCodexTeam}>
            The CodeX team is made up of a highly-accomplished team of
            engineers, researchers, strategists, designers, and builders—all
            committed to delivering universal and equitable access to
            decentralization that is capable of scaling for billions of people
          </div>
        </div>
        <div className={styles.teamDarkChild} />
        <div className={styles.teamDarkItem} />
        <div className={styles.teamDarkInner} />
        <div className={styles.frameDiv}>
          <div className={styles.andreaBelloParent}>
            <div className={styles.andreaBello}>andrea bello</div>
            <div className={styles.ceoAndCoFounders}>CEO and Co-Founders</div>
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation `}</div>
          <div className={styles.socialNetwork}>
            <img
              className={styles.phtwitterLogoIcon}
              alt=""
              src="/phtwitterlogo.svg"
            />
            <img
              className={styles.phtwitterLogoIcon}
              alt=""
              src="/iconoirfacebook.svg"
            />
            <img
              className={styles.phtwitterLogoIcon}
              alt=""
              src="/mdiinstagram.svg"
            />
            <img
              className={styles.phtwitterLogoIcon}
              alt=""
              src="/rilinkedinboxline.svg"
            />
          </div>
        </div>
        <img className={styles.image292Icon} alt="" src="/image-292@2x.png" />
        <div className={styles.lineDiv} />
        <div className={styles.frameParent1}>
          <div className={styles.teamWrapper}>
            <div className={styles.community}>team</div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blog}>blog</div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blog}>career</div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blog}>research</div>
          </div>
        </div>
        <div className={styles.teamDarkInner1}>
          <div className={styles.cardFounderParent}>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.teamDarkInner2}>
          <div className={styles.cardFounderParent}>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
            <div className={styles.cardFounder}>
              <div className={styles.image86Wrapper}>
                <img
                  className={styles.image86Icon}
                  alt=""
                  src="/image-86@2x.png"
                />
              </div>
              <div className={styles.andreaBelloGroup}>
                <div className={styles.community}>andrea bello</div>
                <div className={styles.ceoAndCoFounders1}>
                  CEO and Co-Founders
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.community}>core team</div>
        </div>
        <div className={styles.lineGroup}>
          <div className={styles.frameChild} />
          <div className={styles.community}>team</div>
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

export default TeamDark;
