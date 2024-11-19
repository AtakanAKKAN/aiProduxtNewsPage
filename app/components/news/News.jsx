import React from "react";
import NewsLeftBar from "./left-bar/NewsLeftBar";
import NewsRightBar from "./right-bar/NewsRightBar";
import "./News.css";

const News = () => {
  return (
    <div className="news-main-box">
      <div className="news-left-box">
        <NewsLeftBar />
      </div>
      <div className="news-right-box">
        <NewsRightBar />
      </div>
    </div>
  );
};

export default News;
