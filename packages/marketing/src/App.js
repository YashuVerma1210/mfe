import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
