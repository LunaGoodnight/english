import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Header } from "../common/Header";

const inter = Inter({ subsets: ["latin"] });

const quickDictionaries = [
  {
    title: "Cambridge",
    link: "https://dictionary.cambridge.org/dictionary/english-chinese-traditional/",
  },
];
const quickTranslate = [
  {
    title: "Reverso",
    link: "https://www.reverso.net/text-translation",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>English</title>
        <meta name="description" content="Path to learn English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
    </>
  );
}
