
export function getIndexCity(cities) {
  return cities[Math.floor(Math.random() * cities.length)] 
}

export function getStrEmbededSrc(city){
  return `https://www.youtube.com/embed/${city.id}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`;  
}
