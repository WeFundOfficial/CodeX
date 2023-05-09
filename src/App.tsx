import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AppbunzzdevByHtmltodesig from "./pages/AppbunzzdevByHtmltodesig";
import AptosecoByHtmltodesign from "./pages/AptosecoByHtmltodesign";
import AptosdevByHtmltodesign from "./pages/AptosdevByHtmltodesign";
import ForumaptoslabscomByHtmlto from "./pages/ForumaptoslabscomByHtmlto";
import PetraappByHtmltodesign from "./pages/PetraappByHtmltodesign";
import WwwaptosnamescomByHtmlto from "./pages/WwwaptosnamescomByHtmlto";
import AppbunzzdevByHtmltodesig2 from "./pages/AppbunzzdevByHtmltodesig2";
import AppbunzzdevByHtmltodesig1 from "./pages/AppbunzzdevByHtmltodesig1";
import Libreries from "./pages/Libreries";
import LEVEL2 from "./pages/LEVEL2";
import FinderterramoneyByHtmlto from "./pages/FinderterramoneyByHtmlto";
import AndreaVersion from "./pages/AndreaVersion";
import Community from "./pages/Community";
import FrameComponent1 from "./pages/FrameComponent1";
import ToImplement from "./pages/ToImplement";
import FinderterramoneyByHtmlto1 from "./pages/FinderterramoneyByHtmlto1";
import CodeToFlowLEVEL1 from "./pages/CodeToFlowLEVEL1";
import TeamDark from "./pages/TeamDark";
import ExploreraptoslabscomByHtml from "./pages/ExploreraptoslabscomByHtml";
import DarkExplorer from "./pages/DarkExplorer";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/aptoseco-by-htmltodesign-free-version-09052023-104123-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/aptosdev-by-htmltodesign-free-version-09052023-100614-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/forumaptoslabscom-by-htmltodesign-free-version-09052023-100658-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/petraapp-by-htmltodesign-free-version-09052023-100556-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/wwwaptosnamescom-by-htmltodesign-free-version-09052023-100539-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/appbunzzdev-by-htmltodesign-free-version-07052023-171355-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/appbunzzdev-by-htmltodesign-free-version-07052023-171505-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/libreries":
        title = "";
        metaDescription = "";
        break;
      case "/level-2":
        title = "";
        metaDescription = "";
        break;
      case "/finderterramoney-by-htmltodesign-free-version-07052023-170914-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/andrea-version":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/frame-155":
        title = "";
        metaDescription = "";
        break;
      case "/to-implement":
        title = "";
        metaDescription = "";
        break;
      case "/finderterramoney-by-htmltodesign-free-version-07052023-153556-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/code-to-flow-level-1":
        title = "";
        metaDescription = "";
        break;
      case "/team-dark":
        title = "";
        metaDescription = "";
        break;
      case "/exploreraptoslabscom-by-htmltodesign-free-version-07052023-223148-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/dark-explorer":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AppbunzzdevByHtmltodesig />} />
      <Route
        path="/aptoseco-by-htmltodesign-free-version-09052023-104123-gmt7"
        element={<AptosecoByHtmltodesign />}
      />
      <Route
        path="/aptosdev-by-htmltodesign-free-version-09052023-100614-gmt7"
        element={<AptosdevByHtmltodesign />}
      />
      <Route
        path="/forumaptoslabscom-by-htmltodesign-free-version-09052023-100658-gmt7"
        element={<ForumaptoslabscomByHtmlto />}
      />
      <Route
        path="/petraapp-by-htmltodesign-free-version-09052023-100556-gmt7"
        element={<PetraappByHtmltodesign />}
      />
      <Route
        path="/wwwaptosnamescom-by-htmltodesign-free-version-09052023-100539-gmt7"
        element={<WwwaptosnamescomByHtmlto />}
      />
      <Route
        path="/appbunzzdev-by-htmltodesign-free-version-07052023-171355-gmt7"
        element={<AppbunzzdevByHtmltodesig2 />}
      />
      <Route
        path="/appbunzzdev-by-htmltodesign-free-version-07052023-171505-gmt7"
        element={<AppbunzzdevByHtmltodesig1 />}
      />
      <Route path="/libreries" element={<Libreries />} />
      <Route path="/level-2" element={<LEVEL2 />} />
      <Route
        path="/finderterramoney-by-htmltodesign-free-version-07052023-170914-gmt7"
        element={<FinderterramoneyByHtmlto />}
      />
      <Route path="/andrea-version" element={<AndreaVersion />} />
      <Route path="/community" element={<Community />} />
      <Route path="/frame-155" element={<FrameComponent1 />} />
      <Route path="/to-implement" element={<ToImplement />} />
      <Route
        path="/finderterramoney-by-htmltodesign-free-version-07052023-153556-gmt7"
        element={<FinderterramoneyByHtmlto1 />}
      />
      <Route path="/code-to-flow-level-1" element={<CodeToFlowLEVEL1 />} />
      <Route path="/team-dark" element={<TeamDark />} />
      <Route
        path="/exploreraptoslabscom-by-htmltodesign-free-version-07052023-223148-gmt7"
        element={<ExploreraptoslabscomByHtml />}
      />
      <Route path="/dark-explorer" element={<DarkExplorer />} />
    </Routes>
  );
}
export default App;
