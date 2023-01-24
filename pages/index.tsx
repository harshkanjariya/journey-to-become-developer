import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Journey To Become Developer</title>
        <meta name="description" content="journey to become a developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          <li><a href="/procedure-oriented-programming/variables-and-data-types">Variables & Data Types</a></li>
          <li><a href="/procedure-oriented-programming/functions">Function</a></li>
        </ul>
      </main>
    </>
  )
}
