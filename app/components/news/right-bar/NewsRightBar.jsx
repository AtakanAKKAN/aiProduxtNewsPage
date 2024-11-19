"use client";
import React, { useContext, useEffect, useState } from "react";
import "./Right.css";
import Image from "next/image";
import useFormattedDate from "@/app/hooks/useFormatteDate";
import { MyContext } from "@/app/context/MyContext";

const NewsRightBar = () => {
  const { API_KEY, API_URL } = useContext(MyContext);
  const { format } = useFormattedDate();

  const [isChecked, setIsChechked] = useState(1);
  const [rCategory, setRCategory] = useState("business");

  // const publishedAt = "2024-11-19T04:30:00Z";
  // console.log(format(publishedAt));

  const [rightCategoryNews, setRightCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setRightCategoryNews([]);
      try {
        const response = await fetch(
          `${API_URL}?category=${rCategory}&apiKey=${API_KEY}`
        );

        if (response.status === 429) {
          throw new Error(
            "Günlük API veri çekim limitiniz doldu. Daha fazla haber görmek için lütfen planınızı yükseltin"
          );
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (response.status === 200) {
          const data = await response.json();
          setRightCategoryNews(data.articles.slice(0, limit));
          setLoading(false);
        }
      } catch (error) {
        console.log("Hata: " + error);
        setErrorMessage(error.message);
      }
    };

    fetchNews();
  }, [API_KEY, API_URL, rCategory, limit]);

  return (
    <div className="news-right-main-box">
      <div className="news-right-h-box">
        <h2
          onClick={() => {
            setIsChechked(1);
            setRCategory("entertainment");
          }}
          className={`news-right-h ${isChecked === 1 ? "chechked-right" : ""}`}
        >
          entertainment
        </h2>
        <h2
          onClick={() => {
            setIsChechked(2);
            setRCategory("business");
          }}
          className={`news-right-h ${isChecked === 2 ? "chechked-right" : ""}`}
        >
          science
        </h2>
      </div>

      <div className="news-card-boxs">
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          rightCategoryNews.map((item, index) => (
            <React.Fragment key={index}>
              <div className="news-card-box" key={index}>
                <div
                  onClick={() => {
                    if (item.url) {
                      window.open(item.url, "_blank");
                    }
                  }}
                  className="news-right-img-box"
                >
                  <Image
                    src={item.urlToImage || "https://picsum.photos/800/800"}
                    alt="asd"
                    width={500}
                    height={500}
                    className="news-right-img"
                  />
                </div>
                <div className="news-right-cntn-box">
                  <span className="news-r-date">
                    {format(item.publishedAt) || "No Date"}
                  </span>
                  <h3 className="news-l-cntn">{item.title || "No Title"}</h3>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsRightBar;
