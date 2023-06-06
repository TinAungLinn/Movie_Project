import React from "react";
import { Link } from "react-router-dom";
import {GrSearch} from "react-icons/gr"

const Nav = () => {
  // 
  // 
  // 
  // 
  // 
  // Logics

  const searchHandler = (e)=>{
    e.preventDefault()
  }

  // End  Logics
  // 
  // 
  // 
  // 
  // 
  return (
    <div className=" z-[1000] bg-black py-10 w-screen fixed top-0 flex justify-around items-center">
      <Link to="/">
        <h1 className=" text-3xl font-semibold text-amber-300">M-Movie</h1>
      </Link>
      <div className=" flex gap-7">
        <Link to="/">
          <p className=" text-white">Home</p>
        </Link>
        <Link to="trending">
          <p className=" text-white">Trending</p>
        </Link>
        <Link to="discover">
          <p className=" text-white">Discover</p>
        </Link>
        <Link to="tvShows">
          <p className=" text-white">Tv Shows</p>
        </Link>
        <Link to="genre">
          <p className=" text-white">Genre</p>
        </Link>
      </div>
      <div>
        <form onSubmit={searchHandler} className=" flex align-middle border border-black rounded">
          <input className=" rounded-s outline-none px-5" type="text" />
          <button className=" bg-yellow-300 py-1 px-5 rounded-e">
            <GrSearch className=" text-black"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
