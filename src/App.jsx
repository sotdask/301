import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  const rawBase = import.meta.env.BASE_URL;
  const routerBase =
    rawBase && rawBase !== "/" && rawBase !== "/./"
      ? rawBase.replace(/\/+$/, "")
      : undefined;

  return (
    <Router basename={routerBase}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
