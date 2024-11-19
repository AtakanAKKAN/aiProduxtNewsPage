"use client";
import React, { useContext, useEffect, useState } from "react";
import "./SecondSHero.css";
import { FaAngleLeft } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";
import { MdSchedule } from "react-icons/md";
import useFormattedDate from "@/app/hooks/useFormatteDate";
import { MyContext } from "@/app/context/MyContext";

const SecondSHero = () => {
  const { API_URL, API_KEY } = useContext(MyContext);
  const { format } = useFormattedDate();

  const [secondCategoryNews, setSecondCategoryNews] = useState([]);
  const [sCategory, setSCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setSecondCategoryNews([]);
      try {
        const response = await fetch(
          `${API_URL}?category=${sCategory}&apiKey=${API_KEY}`
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
          setSecondCategoryNews(data.articles.slice(0, limit));
          setLoading(false);
        }
      } catch (error) {
        console.log("Hata: " + error);
        setErrorMessage(error.message);
      }
    };

    fetchNews();
  }, [API_KEY, API_URL, sCategory, limit]);

  return (
    <div className="sub-hero-main">
      <div className="sub-hero-top">
        <div className="subhero-ktgr">
          <h4>{sCategory}</h4>
          <div className="subhero-downside">
            <span>Kategori</span>{" "}
            <span className="subhero-i">
              <FaAngleLeft />
            </span>{" "}
            <div className="subhero-options">
              <span
                onClick={() => setSCategory("business")}
                className="subhero-option"
              >
                business
              </span>
              <span
                onClick={() => setSCategory("health")}
                className="subhero-option"
              >
                health
              </span>
              <span
                onClick={() => setSCategory("technology")}
                className="subhero-option"
              >
                technology
              </span>
              <span
                onClick={() => setSCategory("general")}
                className="subhero-option"
              >
                general
              </span>
            </div>
          </div>
        </div>
        <div className="subhero-pagint">
          <span className="btn-left">
            <CiCircleChevLeft />
          </span>
          <span className="btn-right">
            <CiCircleChevRight />
          </span>
        </div>
      </div>

      <div className="sub-hero-main-news-box">
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          secondCategoryNews.map((item, index) => (
            <React.Fragment key={index}>
              <div className="sub-hero-news-box" key={index}>
                <div className="subhero-img-box">
                  <Image
                    src={item.urlToImage || "https://picsum.photos/1200/1200"}
                    width={250}
                    height={150}
                    alt="alt"
                    className="subhero-img"
                  />
                </div>

                <div className="subhero-news-cntn">
                  <span className="sbhr-news-cntn-h">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.2rem",
                      }}
                    >
                      <span className="subhero-news-i">
                        <MdSchedule />
                      </span>
                      <span className="subhero-news-h">
                        {format(item.publishedAt) || "No Date"}
                      </span>
                    </div>
                  </span>

                  <span className="sbhr-cntn">{item.title || "No Title"}</span>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default SecondSHero;
