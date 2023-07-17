import React, { useState } from "react";

import SearchAppBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [search, setSearch] = useState({
    isSearching: false,
    searchedItems: [],
  });
  return (
    <>
      <SearchAppBar itemsData={itemsData} setSearch={setSearch} />
      <HomePage
        itemsData={search.isSearching ? search.searchedItems : itemsData}
        setItemsData={setItemsData}
        isSearching={search.isSearching}
      />
    </>
  );
}

export default App;
