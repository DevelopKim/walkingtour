export function getIndexCity(cities) {
  return cities[Math.floor(Math.random() * cities.length)];
}

export function getStrEmbededSrc(city) {
  return `https://www.youtube.com/embed/${city.id}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`;
}

export function getYoutubeOptions() {
  return {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      loop: 1,
      rel: 0,
      playsinline: 1,
    },
  };
}
