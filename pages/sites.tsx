import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { Header } from "../common/Header";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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
          <ul className="w-1/5 w-full">
            {siteList.map((x, i) => {
              const { title, link, image } = x;
              return (
                <li key={link} className="p-8 hover:bg-blue-100">
                  <Link className="w-full flex" href={link} target="_blank">
                    <div className="flex w-48">
                      <Image
                        src={image}
                        alt={title}
                        width={350}
                        height={219}
                        priority
                      />
                    </div>
                    <div className="pl-5">{title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default sites;
