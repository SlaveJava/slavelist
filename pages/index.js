import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slavebos | Home</title>
        <meta name="keywords" content="slave-keyword" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laboriosam odio amet dolores voluptates reiciendis iure possimus,
          repudiandae sunt aliquam debitis, perferendis nostrum fuga cupiditate
          enim sed qui iste architecto.
        </p>
        <Link href="/slavebos">
          <a className={styles.btn}>To Slavebos Links</a>
        </Link>
      </div>
    </>
  );
}
