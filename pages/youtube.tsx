import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { Header } from "../common/Header";

import Head from "next/head";

import { SiteListWrapper } from "../common/SiteListWrapper";
import { youtubeList } from "../configs/youtubeList";

export const youtube = () => {
  return (
    <>
      <Head>
        <title>Learn English By Youtube</title>
        <meta name="description" content="收集一些Youtube上學英文的資源" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="flex">
          <SiteNavigation />
          <SiteListWrapper list={youtubeList} />
        </div>
      </div>
    </>
  );
};

export default youtube;
