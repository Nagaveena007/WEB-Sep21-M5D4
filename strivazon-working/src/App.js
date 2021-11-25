import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FavoriteIndicator from "./components/FavoriteIndicator";
import Favorite from "./components/Favorite";

function App() {
  return (
    <BrowserRouter>
      <>
        <MainSearch />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
