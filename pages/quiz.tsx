import { Header } from "../common/Header";
import Image from "next/image";
import Head from "next/head";

export const quiz = () => {
  return (
    <>
      <Head>
        <title>Quiz 英文隨堂考</title>
        <meta name="description" content="英文文法考試" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="flex">
          <p>開發中</p>
        </div>
      </div>
    </>
  );
};

export default quiz;
