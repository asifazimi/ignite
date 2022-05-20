import React from "react";
// Pages
import Home from "./pages/Home";
// Components
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
