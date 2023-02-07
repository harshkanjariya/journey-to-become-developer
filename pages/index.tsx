import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {links} from "@/utils/constants";

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
        Procedure Oriented Programming
        <ul>
          <li>
            <Link href={links.pops.vars.int}>Variables & Data Types</Link>
            <ul>
              <li><Link href={links.pops.vars.int}>int</Link></li>
              <li><Link href={links.pops.vars.float}>float</Link></li>
            </ul>
          </li>
          <li><Link href={links.pops.funs.baseUrl}>Function</Link></li>
        </ul>
      </main>
    </>
  )
}
