import React from "react";

import DataTable from "./components/DataTable/DataTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<DataTable />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
