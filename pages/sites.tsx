import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { Header } from "../common/Header";
import Image from "next/image";

export const sites = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SiteNavigation />
        <ul className="w-1/5 w-full">
          {siteList.map((x, i) => {
            const { title, link, image } = x;
            return (
              <li key={i} className="p-8 flex">
                <div className="flex w-48">
                  <Image
                    src={image}
                    alt={title}
                    width={350}
                    height={219}
                    priority
                  />
                </div>
                <div className="pl-5">
                  <a href={link}>{title}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default sites;
