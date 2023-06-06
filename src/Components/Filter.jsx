import React, { useEffect } from "react";

const Filter = ({ popular, filter, setFilter, activeGenre, setActiveGenre }) => {
  // 
  // 
  // 
  // 
  // 
  // Logics

  useEffect(()=>{
    if(activeGenre === 0){
      setFilter(popular);
      return;
    }
    const filterMovie = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFilter(filterMovie);
  },[activeGenre]);

  // End Logics
  // 
  // 
  // 
  // 
  // 
  return (
    <div className=" ml-14 py-10">
      <button onClick={() => setActiveGenre(0)} className=" py-1 px-5 bg-gray-500 text-white shadow rounded me-3">
        All
      </button>
      <button onClick={() => setActiveGenre(28)} className=" py-1 px-5 bg-gray-500 text-white shadow rounded me-3">
        Action
      </button>
      <button onClick={() => setActiveGenre(35)} className=" py-1 px-5 bg-gray-500 text-white shadow rounded me-3">
        Comedy
      </button>
    </div>
  );
};

export default Filter;
