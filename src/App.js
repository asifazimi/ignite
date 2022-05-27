import React from "react";
// Pages
import Home from "./pages/Home";
// Components
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Routes
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
