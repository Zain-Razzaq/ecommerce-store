import React, { useState } from "react";

import SearchAppBar from "./Components/NavBar";
import HomePage from "./Pages/Home";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [onSearch, setOnSearch] = useState(false);

  return (
    <>
      <SearchAppBar
        itemsData={itemsData}
        setFilteredData={setFilteredData}
        setOnSearch={setOnSearch}
      />
      <HomePage
        itemsData={onSearch ? filteredData : itemsData}
        setItemsData={setItemsData}
        onSearch={onSearch}
      />
    </>
  );
}

export default App;
