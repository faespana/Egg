import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles }) => {
  if (!articles.length) {
    return (
      <div className="flex justify-center flex-wrap gap-5 max-w-full mx-auto">
        {infoCards.map((infoCard) => (
          <div
            className="w-full max-w-[300px] h-[360px] rounded-xl overflow-hidden transition-transform ease-out duration-200 hover:ease-in hover:scale-105 shadow shadow-black-500/40 flex flex-col justify-between text-center text-white p-7 text-lg"
            style={{ backgroundColor: infoCard.color }}
          >
            <h1>{infoCard.title}</h1>
            {infoCard.info ? (
              <div>
                <strong>{infoCard.title.split(" ")[2]}</strong> : <br />
                <div>{infoCard.info}</div>
              </div>
            ) : null}
            <h4>
              Trying saying: <br /> <i>{infoCard.text}</i>
            </h4>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap gap-5 w-max max-w-full mx-auto">
      {articles?.map((article, i) => (
        <NewsCard article={article} i={i} key={i} />
      ))}
    </div>
  );
};

export default NewsCards;
