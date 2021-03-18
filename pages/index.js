import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../lib/cities";
import getCitiesData from "../lib/cities";
import { getIndexCity, getStrEmbededSrc, getYoutubeOptions } from "../lib/util";
import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import {
  isBrowser,
  isMobile,
} from "react-device-detect";

import Panel from "../components/panel";

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
  const [videoId, setState] = useState(indexCityRandom.id);
  function selectCity(id, e) {
    setState(id);
    const component = (
      <div id="youtuber-player">
        <YouTube
          videoId={id}
          opts={youtubeOption}
          onReady={(e) => _onready(e)}
          onStateChange={(e) => _onstatechange(e)}
        />
      </div>
    );
    setYoutubeComponent(component);
  }

  function _onready(event) {
    event.target.playVideo()
    // event.target.stopVideo();
  }

  function _onstatechange(event) {
    if (event.data === -1) {
      event.target.playVideo();
    }
  }

  function _onClickPlay(event) {
    const component = (
      <div id="youtuber-player">
        <YouTube
          videoId={videoId}
          opts={youtubeOption}
          onReady={(e) => _onready(e)}
          onStateChange={(e) => _onstatechange(e)}
        />
      </div>
    );
    setYoutubeComponent(component);
    let elLi = window.document.getElementsByClassName(videoId)[0];
    setClickVisible(false);
  }

  let tmpComponent;
  if (isBrowser) {
    tmpComponent = (
      <div id="youtuber-player">
        <YouTube
          videoId={videoId}
          opts={youtubeOption}
          onReady={(e) => _onready(e)}
          onStateChange={(e) => _onstatechange(e)}
        />
      </div>
    );
  }
  const [youtubeComponent, setYoutubeComponent] = useState(tmpComponent);
  const [mobileClickVisible, setClickVisible] = useState(true);
  const cityRef = useRef([]);
  useEffect(() => {
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Walking Tour</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
      </Head>

      {/* <YouTubePlayer /> */}
      <div className="video-background">
        <div className="video-foreground">
          <>{youtubeComponent}</>
        </div>
      </div>
      {mobileClickVisible && isMobile && <p onClick={_onClickPlay} className={styles.mobile_click_play}>click to play!!</p>}
      <Panel cities={cities} selectCity={selectCity} />
    </div>
  );
}
