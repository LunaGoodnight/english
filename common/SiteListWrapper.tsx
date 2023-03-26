import Image from "next/image";
import Link from "next/link";
import { Site } from "../configs/siteList";

interface Props {
  list: Site[];
}

export const SiteListWrapper = ({ list }: Props) => {
  return (
    <ul className="w-4/5 w-full h-full overflow-y-scroll max-h-[54rem]">
      {list.map((x) => {
        const { title, link, image } = x;
        return (
          <li key={link} className="p-6 hover:bg-blue-100">
            <Link className="w-full flex" href={link} target="_blank">
              <div className="flex w-32">
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
  );
};
