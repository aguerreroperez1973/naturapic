import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import FavoriteProvider from "./context/context";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <FavoriteProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />}/>
      </Routes>
      </FavoriteProvider>
  );
};
export default App;
