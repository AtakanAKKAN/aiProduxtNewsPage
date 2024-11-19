"use client";
import React, { useContext, useEffect, useState } from "react";
import "./Left.css";
import Image from "next/image";
import { MyContext } from "@/app/context/MyContext";
import { RxHamburgerMenu } from "react-icons/rx";
import useFormattedDate from "@/app/hooks/useFormatteDate";

const NewsLeftBar = () => {
  const { API_URL, API_KEY } = useContext(MyContext);
  const { format } = useFormattedDate();

  const [leftSource, setLeftSource] = useState("bbc-news");
  const [leftSourceNews, setLeftSourceNews] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setLeftSourceNews([]);
      try {
        const response = await fetch(
          `${API_URL}?source=${leftSource}&apiKey=${API_KEY}`
        );
        if (response.status === 429) {
          throw new Error(
            "Günlük API veri çekim limitiniz doldu. Daha fazla haber görmek için lütfen planınızı yükseltin"
          );
        }
        if (!response.ok) {
          throw new Error(error);
        }
        if (response.status === 200) {
          const data = await response.json();
          setLeftSourceNews(data.articles.slice(0, limit));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
      }
    };

    fetchNews();
  }, [API_KEY, API_URL, limit, leftSource]);

  return (
    <div className="news-l-main-box">
      <div className="news-h-box">
        <h2 className="news-left-h">Son haberler</h2>
        <div className="news-left-kategry">
          <span
            onClick={() => setLeftSource("bbc-news")}
            className={`left-ktgry-spn ${
              leftSource === "bbc-news" ? "marked" : ""
            }`}
          >
            BBC NEWS
          </span>
          <span
            onClick={() => setLeftSource("cnn")}
            className={`left-ktgry-spn ${leftSource === "cnn" ? "marked" : ""}`}
          >
            CNN{" "}
          </span>
          <span
            onClick={() => setLeftSource("fox-news")}
            className={`left-ktgry-spn ${
              leftSource === "fox-news" ? "marked" : ""
            }`}
          >
            Fox News
          </span>
          <span
            onClick={() => setLeftSource("bloomberg")}
            className={`left-ktgry-spn ${
              leftSource === "bloomberg" ? "marked" : ""
            }`}
          >
            Bloomberg
          </span>
          <span
            onClick={() => setLeftSource("the-new-york-times")}
            className={`left-ktgry-spn ${
              leftSource === "the-new-york-times" ? "marked" : ""
            }`}
          >
            The New York Times
          </span>
        </div>

        <div className="responsive-hamb">
          <RxHamburgerMenu />

          <div className="news-left-kategry">
            <span
              onClick={() => setLeftSource("bbc-news")}
              className={`left-ktgry-spn ${
                leftSource === "bbc-news" ? "marked" : ""
              }`}
            >
              BBC NEWS
            </span>
            <span
              onClick={() => setLeftSource("cnn")}
              className={`left-ktgry-spn ${
                leftSource === "cnn" ? "marked" : ""
              }`}
            >
              CNN{" "}
            </span>
            <span
              onClick={() => setLeftSource("fox-news")}
              className={`left-ktgry-spn ${
                leftSource === "fox-news" ? "marked" : ""
              }`}
            >
              Fox News
            </span>
            <span
              onClick={() => setLeftSource("bloomberg")}
              className={`left-ktgry-spn ${
                leftSource === "bloomberg" ? "marked" : ""
              }`}
            >
              Bloomberg
            </span>
            <span
              onClick={() => setLeftSource("the-new-york-times")}
              className={`left-ktgry-spn ${
                leftSource === "the-new-york-times" ? "marked" : ""
              }`}
            >
              The New York Times
            </span>
          </div>
        </div>
      </div>

      <div className="news-main-grid">
        {errorMessage ? (
          <p>{errorMessage} </p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          leftSourceNews.map((item, index) => (
            <React.Fragment key={index}>
              <div className="news-grid-box">
                <div
                  onClick={() => {
                    if (item.url) {
                      window.open(item.url, "_blank");
                    }
                  }}
                  className="news-grid-img-box"
                >
                  <Image
                    src={item.urlToImage || "https://picsum.photos/800/800"}
                    width={500}
                    height={350}
                    alt="expl"
                    className="news-grid-img"
                  />
                </div>

                <div className="news-grid-cntn-box">
                  <span className="news-grid-date">
                    {" "}
                    {format(item.publishedAt) || "No Date"}
                  </span>
                  <h4 className="news-grid-cntn">
                    {item.description || "No Description"}
                  </h4>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsLeftBar;
