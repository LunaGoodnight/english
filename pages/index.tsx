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

        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
