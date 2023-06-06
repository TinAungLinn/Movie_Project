import { createContext, useContext, useEffect, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const [popular,setPopular] = useState([]);

    useEffect(()=>{
      fetchApi();
    },[])

    const fetchApi = async () => {
      const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c7f77bb3bdc3a7caae350c798f5227&language=en-US&page=1`)
      const {results} = await api.json();
      setPopular(results);
    }

    const data = { popular, setPopular};

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CustomContext = () => useContext(StateContext);