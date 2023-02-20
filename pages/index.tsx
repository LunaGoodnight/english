import Head from "next/head";

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
        <title>English Learning Resources - Index</title>
        <meta name="description" content="Path to learn English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-col">
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          學英文資源都在這邊
        </div>
      </main>
    </>
  );
}
