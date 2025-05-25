import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { LikeProvider } from "./context/LikeContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Movie from "./pages/Movie.jsx";
import TvShow from "./pages/TvShow.jsx";
import Search from "./pages/Search.jsx";
import Detail from "./pages/Detail.jsx";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <LikeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tvshow" element={<TvShow />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </LikeProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
