import Image from "next/image";
import { Header } from "../../common/Header";
import { SiteNavigation } from "../../common/SiteNavigation";
import { grammarList } from "../../configs/grammarList";

export const grammar = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SiteNavigation />
        <ul className="w-1/5 w-full">
          {grammarList.map((x, i) => {
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

export default grammar;
