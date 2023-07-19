import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddItemPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
