import React from "react";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "73e344dd21c3c87667faa2380060ff4d2e956eca572e1d8b807a3e2338fdd0dc/stage";

export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="py-8">
      <NewsCards articles={newsArticles} />
    </div>
  );
}
