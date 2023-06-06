import React from "react";
import { CustomContext } from "../Context/StateContext";

const Home = () => {
  const { popular, setPopular } = CustomContext();

  console.log(popular);

  return (
    <div className=" pt-32 pb-10 bg-slate-950">
      {popular ? (
        <div className=" flex flex-wrap justify-center items-center gap-7">
          {popular.map((movie) => {
            return (
              <div key={movie.id}>
                <img
                className=" movie w-80 rounded-md mb-3"
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt=""
                />
                <h4 className=" text-white">{movie.title}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>Loading.....</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
