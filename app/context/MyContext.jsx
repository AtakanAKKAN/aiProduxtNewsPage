"use client";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [source, setSource] = useState("bbc-news");



  // useEffect(() => {
  //   setMyData([]);
  //   const getArticles = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/${filter}`
  //       );
  //       setMyData(await response.data.slice(0, limit));
  //     } catch (error) {
  //       console.error("Veri çekme hatası:", error);
  //     }
  //   };
  //   getArticles();
  // }, [filter, limit]);

  const value = {
    API_URL,
    API_KEY,
    source,
    setSource,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
