import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SearchAppBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function addItem(newItem) {
    setItemsData([...itemsData, newItem]);
  }

  return (
    <>
      <SearchAppBar setSearch={setSearchText} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              itemsData={itemsData}
              setItemsData={setItemsData}
              searchText={searchText}
            />
          }
        />
        <Route path="/add" element={<AddItemPage addItem={addItem} />} />
      </Routes>
    </>
  );
}

export default App;
