import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../lib/cities";
import getCitiesData from "../lib/cities";
import { getIndexCity, getStrEmbededSrc, getYoutubeOptions } from "../lib/util";
import React, { useState } from "react"
import YouTube from "react-youtube"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export async function getStaticProps(context) {
  const cities = getCitiesData();
  return {
    props: {
      cities: cities,
      youtubeOption: getYoutubeOptions(),
    },
  };
}

export default function Home({ cities, youtubeOption }) {
  const indexCityRandom = getIndexCity(cities);
  const indexSrc = getStrEmbededSrc(indexCityRandom);
  const [videoId, setState] = useState(indexCityRandom.id);
  function selectCity(id, e) {
    setState(id);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Walking Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="video-background">
        <YouTube
          videoId={videoId}
          opts={youtubeOption}
          onReady={(e) => e.target.playVideo()}
          onStateChange={(e) => e.target.playVideo()}
          containerClassName="video-foreground"
          id="youtube-player"
        />
      </div>

      <div className={styles.panelWrap}>
        <h2>Walking Tour</h2>
        <div className={styles.city_list}>
          <ul>
            {cities.map(({ name, url, id }) => (
              <li key={id} onClick={(e) => selectCity(id, e)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className={styles.main}>
        <h1>{indexCityRandom.name}</h1>
        <ul>
          {cities.map(({ name, url, id }) => (
            <li key={id}>
              {name} - {url}
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
