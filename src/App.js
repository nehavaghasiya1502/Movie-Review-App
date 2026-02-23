// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import Home from "./pages/Home";
// // // import MovieDetails from "./pages/MovieDetails";
// // // import SearchPage from "./components/SearchPage";
// // // import Navbar from "./components/Navbar";

// // // function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <Navbar />
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/movie/:id" element={<MovieDetails />} />
// // //         <Route path="/search" element={<SearchPage />} />
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import MovieDetails from "./pages/MovieDetails";
// // import SearchPage from "./components/SearchPage";
// // import Navbar from "./components/Navbar";
// // import LoginPage from "./components/LoginPage";

// // function PrivateRoute({ children }) {
// //   return localStorage.getItem("isLoggedIn")
// //     ? children
// //     : <LoginPage />;
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/login" element={<LoginPage />} />

// //         <Route path="/" element={
// //           <PrivateRoute>
// //             <Home />
// //           </PrivateRoute>
// //         } />

// //         <Route path="/movie/:id" element={
// //           <PrivateRoute>
// //             <MovieDetails />
// //           </PrivateRoute>
// //         } />

// //         <Route path="/search" element={
// //           <PrivateRoute>
// //             <SearchPage />
// //           </PrivateRoute>
// //         } />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import MovieDetails from "./pages/MovieDetails";
// import SearchPage from "./components/SearchPage";
// import Navbar from "./components/Navbar";
// import LoginPage from "./components/LoginPage";

// function PrivateRoute({ children }) {
//   return localStorage.getItem("isLoggedIn")
//     ? children
//     : <LoginPage />;
// }

// function AppContent() {
//   const location = useLocation();

//   return (
//     <>
//       {/* 👉 Login page par navbar hide */}
//       {location.pathname !== "/login" && <Navbar />}

//       <Routes>
//         <Route path="/login" element={<LoginPage />} />

//         <Route path="/" element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         } />

//         <Route path="/movie/:id" element={
//           <PrivateRoute>
//             <MovieDetails />
//           </PrivateRoute>
//         } />

//         <Route path="/search" element={
//           <PrivateRoute>
//             <SearchPage />
//           </PrivateRoute>
//         } />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import MovieDetails from "./pages/MovieDetails";
import SearchPage from "./components/SearchPage";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* ✅ Login page me navbar hide */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
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