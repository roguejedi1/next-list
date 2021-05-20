import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninjas | Home</title>
        <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <Link href="/ninjas">
        <a className={styles.btn}>Find people</a>
      </Link>
    </div>
    </>
  )
}
