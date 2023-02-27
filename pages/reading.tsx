import { Header } from "../common/Header";
import Image from "next/image";
import Head from "next/head";

export const reading = () => {
  return (
    <>
      <Head>
        <title>Quiz 英文閱讀</title>
        <meta name="description" content="英文閱讀" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="flex px-8">
          <p>開發中</p>
        </div>
      </div>
    </>
  );
};

export default reading;
