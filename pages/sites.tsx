import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { Header } from "../common/Header";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { SiteListWrapper } from "../common/SiteListWrapper";

export const sites = () => {
  return (
    <>
      <Head>
        <title>Sites</title>
        <meta name="description" content="一些學英文的網站" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="flex">
          <SiteNavigation />
          <SiteListWrapper list={siteList} />
        </div>
      </div>
    </>
  );
};

export default sites;
