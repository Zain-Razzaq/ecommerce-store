import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";
import EditPage from "./pages/EditPage";

function AllRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddItemPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </>
  );
}

export default AllRoutes;
