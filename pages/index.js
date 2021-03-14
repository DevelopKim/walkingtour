import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../lib/cities'
import getCitiesData from '../lib/cities'
import {getIndexCity, getStrEmbededSrc} from '../lib/util'

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
  const embedSrc = getStrEmbededSrc(indexCityRandom)
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
      <main className={styles.main}>
        <h1>{indexCityRandom.name}</h1>
        <ul>
          {cities.map(({name, url}) => (
            
            <li>{name} - {url}</li>
            
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
