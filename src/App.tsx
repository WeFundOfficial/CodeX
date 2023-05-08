import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DarkExplorer from "./pages/DarkExplorer";
import ExploreraptoslabscomByHtml from "./pages/ExploreraptoslabscomByHtml";
import FrameComponent1 from "./pages/FrameComponent1";
import Community from "./pages/Community";
import ToImplement from "./pages/ToImplement";
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
      case "/exploreraptoslabscom-by-htmltodesign-free-version-07052023-223148-gmt7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-155":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/to-implement":
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
      <Route path="/" element={<DarkExplorer />} />
      <Route
        path="/exploreraptoslabscom-by-htmltodesign-free-version-07052023-223148-gmt7"
        element={<ExploreraptoslabscomByHtml />}
      />
      <Route path="/frame-155" element={<FrameComponent1 />} />
      <Route path="/community" element={<Community />} />
      <Route path="/to-implement" element={<ToImplement />} />
    </Routes>
  );
}
export default App;
