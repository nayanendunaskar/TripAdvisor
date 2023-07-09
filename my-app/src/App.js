import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Continents } from "./Pages/Continents";
import { SingleContinent, SinglePage } from "./Pages/SinglePage";
import { Country } from "./Pages/Country";
import { DestinationDetail, Destinations } from "./Pages/Destinations";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continent/:continentId" element={<SinglePage />} />
        <Route path="/:continentId/country/:countryId" element={<Country />} />
        <Route
          path="/:continentId/country/:countryId/destination/:destinationId"
          element={<Destinations />}
        />
      </Routes>
    </div>
  );
}

export default App;