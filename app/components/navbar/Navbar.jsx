"use client";
import React, { useContext } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { MyContext } from "@/app/context/MyContext";

const Navbar = () => {
  const { source, setSource } = useContext(MyContext);

  console.log(source);

  return (
    <div className="nav-ana-kutu">
      <div className="nav-içerik-kutu">
        <h2 className="nav-logo">The Peanut News</h2>
        <div className="nav-kategry">
          <span onClick={() => setSource("bbc-news")} className="nav-ktgry-spn">
            BBC NEWS
          </span>
          <span onClick={() => setSource("cnn")} className="nav-ktgry-spn">
            CNN{" "}
          </span>
          <span onClick={() => setSource("fox-news")} className="nav-ktgry-spn">
            Fox News
          </span>
          <span
            onClick={() => setSource("bloomberg")}
            className="nav-ktgry-spn"
          >
            Bloomberg
          </span>
          <span
            onClick={() => setSource("the-new-york-times")}
            className="nav-ktgry-spn"
          >
            The New York Times
          </span>
        </div>
        <div className="nav-btns">
          <span>
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
