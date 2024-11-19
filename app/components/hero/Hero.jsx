"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { MyContext } from "@/app/context/MyContext";
import Link from "next/link";
import useFormattedDate from "@/app/hooks/useFormatteDate";

const Hero = () => {
  const { API_URL, API_KEY, source } = useContext(MyContext);
  const { format } = useFormattedDate();

  const [isChecked, setIsChecked] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const [anmtnCls, SetAnmtnCls] = useState("hero-img-anmt");
  const [heroNews, setHeroNews] = useState([]);

  const [sourceNews, setSourceNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setSourceNews([]);
      try {
        const response = await fetch(
          `${API_URL}?source=${source}&apiKey=${API_KEY}`
        );

        if (response.status === 429) {
          throw new Error(
            "Günlük API veri çekim limitiniz doldu. Daha fazla haber görmek için lütfen planınızı yükseltin"
          );
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSourceNews(data.articles.slice(0, limit));
        setLoading(false);
      } catch (error) {
        console.log("Hata: " + error);
        setErrorMessage(error.message);
      }
    };

    fetchNews();
  }, [API_KEY, API_URL, source, limit]);

  useEffect(() => {
    const Interval = setInterval(() => {
      if (!isTouched) {
        setIsChecked((prev) => (prev < 2 ? prev + 1 : 0));
        SetAnmtnCls("hero-img-anmt");
        setTimeout(() => {
          SetAnmtnCls("");
        }, 2000);
      }
    }, 8000);

    return () => {
      clearInterval(Interval);
    };
  }, [isTouched]);

  const handleClick = (index) => {
    setIsChecked(index);
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 8000);
    SetAnmtnCls("hero-img-anmt");
    setTimeout(() => {
      SetAnmtnCls("");
    }, 1000);
  };

  return (
    <div>
      <div className="hero-icrk-kt">
        <a
          href={sourceNews[isChecked]?.url}
          className="hero-img-kt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={
              sourceNews[isChecked]?.urlToImage ||
              "https://placehold.co/1500x1500/png"
            }
            width={1000}
            height={1500}
            alt="exmp"
            className={`hero-img ${anmtnCls}`}
            unoptimized
          />
        </a>

        <article className="hero-içrk-kt">
          {errorMessage ? (
            <>
              <section className="hero-içrk">
                <div className="hero-içrk-pad">
                  <h4 className="hero-cntn">{errorMessage} </h4>
                </div>
              </section>
            </>
          ) : loading ? (
            <>
              <section className="hero-içrk">
                <div className="hero-içrk-pad">
                  <h4 className="hero-cntn">Loading...</h4>
                </div>
              </section>
            </>
          ) : (
            sourceNews.map((item, index) => (
              <React.Fragment key={index}>
                <section
                  className="hero-içrk"
                  onClick={() => handleClick(index)}
                >
                  <div className="hero-içrk-pad">
                    <span className="hero-date">
                      {format(item.publishedAt) || "No Date"}
                    </span>
                    <h4 className="hero-cntn">{item.title || "No Title"}</h4>
                  </div>
                </section>
              </React.Fragment>
            ))
          )}
        </article>
      </div>
    </div>
  );
};

export default Hero;
