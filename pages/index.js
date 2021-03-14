import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../lib/cities'
import getCitiesData from '../lib/cities'
import {getIndexCity, getStrEmbededSrc} from '../lib/util'
import React, { useState } from 'react'

export async function getStaticProps(context) {
  const cities = getCitiesData()
  return {
    props: {
      cities: cities,
    }
  }
}

export default function Home({ cities }) {
  const indexCityRandom = getIndexCity(cities) 
  const indexSrc = getStrEmbededSrc(indexCityRandom)
  const [embedSrc, setState] = useState(indexSrc)
  function selectCity(id, e) {
    let src = `https://www.youtube.com/embed/${id}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`;  
    setState(src)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Walking Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="video-background">
        <div className="video-foreground">
          <iframe src={embedSrc} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div className={styles.panelWrap}>
        <h2>Walking Tour</h2>
        <div className={styles.city_list}>
          <ul>
            { cities.map(({ name, url, id }) => (
                  <li key={id} onClick={(e) => selectCity(id, e)}>{name}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <main className={styles.main}>
        <h1>{indexCityRandom.name}</h1>
        <ul>
          {cities.map(({name, url, id}) => (
            
            <li key={id}>{name} - {url}</li>
            
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
