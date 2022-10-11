/* eslint-disable react-hooks/exhaustive-deps */
// import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Navbar from "../component/Navbar";
import Favorite from "../pages/Favorite";
// import NotFound from "../pages/NotFound";

import { ThemeContext } from "utils/Context";
import { setFavorites } from "utils/redux/reducer/reducer";

function App() {
  const dispatch = useDispatch();
  const [isLight, setIslight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIslight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(setFavorites(JSON.parse(getMovies)));
    }
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div className=" bg-light-mode dark:bg-secondary-600 overflow-auto w-full h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id_movie" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
