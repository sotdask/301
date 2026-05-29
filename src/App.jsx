import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Kamari from "./pages/Kamari";
import NotFound from "./pages/NotFound";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import LoadingScreen from "./components/global/LoadingScreen";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [pathname]);
  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  useEffect(() => {
    const hide = () => setTimeout(() => setShowLoader(false), 1200);

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  const rawBase = import.meta.env.BASE_URL;
  const routerBase = rawBase && rawBase !== "/" && rawBase !== "/./"
    ? rawBase.replace(/\/+$/, "")
    : undefined;

  if (showLoader) return <LoadingScreen />;

  return (
    <Router basename={routerBase}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/kamari-santorinis" element={<Kamari />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;