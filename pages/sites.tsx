import styled from "styled-components";
import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { Header } from "../common/Header";
import Image from "next/image";

const SiteListWrapper = styled.ul`
  width: 80%;
`;

export const ImageWrapper = styled.div`
  width: 20%;
`;

export const sites = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SiteNavigation />
        <SiteListWrapper>
          {siteList.map((x, i) => {
            const { title, link, image } = x;
            return (
              <li key={i}>
                <div className="flex">
                  <Image
                    src={image}
                    alt={title}
                    width={350}
                    height={219}
                    priority
                  />
                </div>
                <div>
                  <a href={link}>{title}</a>
                </div>
              </li>
            );
          })}
        </SiteListWrapper>
      </div>
    </div>
  );
};

export default sites;
