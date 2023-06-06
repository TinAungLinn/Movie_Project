import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Discover from "./Pages/Discover";
import TvShows from "./Pages/TvShows";
import Genre from "./Pages/Genre";
import Nav from "./Components/Nav";

const App = () => {
  //
  //
  //
  //
  // Logics

  // End Logics
  //
  //
  //
  //
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/tvShows" element={<TvShows />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>

      {/* <Filter
        popular={popular}
        filter={filter}
        setFilter={setFilter}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {popular ? (
        <motion.div layout className=" flex flex-wrap justify-center gap-5">
          <AnimatePresence>
            {filter.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div>Loading</div>
      )} */}
    </div>
  );
};

export default App;
