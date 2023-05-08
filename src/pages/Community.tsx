import { FunctionComponent, useCallback } from "react";
import CodeXContainer1 from "../components/CodeXContainer1";
import WhitepaperSection from "../components/WhitepaperSection";
import DocumentationSection from "../components/DocumentationSection";
import DocSection from "../components/DocSection";
import Header1 from "../components/Header1";
import styles from "./Community.module.css";
const Community: FunctionComponent = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  const onLogoContainer1Click = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  return (
    <div className={styles.community}>
      <img className={styles.image16Icon} alt="" src="/image-162@2x.png" />
      <CodeXContainer1 />
      <WhitepaperSection />
      <DocumentationSection />
      <img className={styles.image16Icon} alt="" src="/image-162@2x.png" />
      <CodeXContainer1 />
      <WhitepaperSection />
      <DocSection />
      <Header1 onLogoContainerClick={onLogoContainerClick} />
      <Header1 onLogoContainerClick={onLogoContainer1Click} />
    </div>
  );
};

export default Community;
