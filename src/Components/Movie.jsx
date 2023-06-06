import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@mantine/core";

const Movie = ({ title, backdrop_path }) => {
  //
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
  //
  return (
    <motion.div
      layout
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <p className=" text-xs">{title}</p>
      <img
        className=" rounded"
        src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
        alt=""
      />
    </motion.div>
  );
};

export default Movie;
