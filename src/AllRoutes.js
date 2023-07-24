import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";
import EditPage from "./pages/EditPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddItemPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}

export default AllRoutes;
