import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import MovieDetails from "./pages/MovieDetails";
import SearchPage from "./components/SearchPage";

// New pages
import Trending from "./pages/Trending";
import TopRated from "./pages/TopRated";
import Genres from "./pages/Genres";
import Watchlist from "./pages/Watchlist";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />

        {/* New pages routes */}
        <Route path="/trending" element={<Trending />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      
      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;