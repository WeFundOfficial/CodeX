import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AppbunzzdevByHtmltodesig from "./pages/AppbunzzdevByHtmltodesig";
import Libreries from "./pages/Libreries";
import AppbunzzdevByHtmltodesig1 from "./pages/AppbunzzdevByHtmltodesig1";
import AppbunzzdevByHtmltodesig2 from "./pages/AppbunzzdevByHtmltodesig2";
import Community from "./pages/Community";
import FrameComponent1 from "./pages/FrameComponent1";
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
      case "/libreries":
        title = "";
        metaDescription = "";
        break;
      case "/appbunzzdev-by-htmltodesign-free-version-07052023-171505-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/appbunzzdev-by-htmltodesign-free-version-07052023-171355-gmt7":
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
      <Route path="/libreries" element={<Libreries />} />
      <Route
        path="/appbunzzdev-by-htmltodesign-free-version-07052023-171505-gmt7"
        element={<AppbunzzdevByHtmltodesig1 />}
      />
      <Route
        path="/appbunzzdev-by-htmltodesign-free-version-07052023-171355-gmt7"
        element={<AppbunzzdevByHtmltodesig2 />}
      />
      <Route path="/community" element={<Community />} />
      <Route path="/frame-155" element={<FrameComponent1 />} />
      <Route
        path="/exploreraptoslabscom-by-htmltodesign-free-version-07052023-223148-gmt7"
        element={<ExploreraptoslabscomByHtml />}
      />
      <Route path="/dark-explorer" element={<DarkExplorer />} />
    </Routes>
  );
}
export default App;
