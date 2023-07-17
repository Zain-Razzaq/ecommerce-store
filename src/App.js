import React, { useState } from "react";

import SearchAppBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [search, setSearch] = useState({
    isSearching: false,
    searchedItems: [],
  });

  function deleteItem(id) {
    setItemsData(itemsData.filter((item) => item.id !== id));
    setSearch({
      isSearching: search.isSearching,
      searchedItems: search.searchedItems.filter((item) => item.id !== id),
    });
  }

  return (
    <>
      <SearchAppBar itemsData={itemsData} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              itemsData={search.isSearching ? search.searchedItems : itemsData}
              setItemsData={setItemsData}
              isSearching={search.isSearching}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
