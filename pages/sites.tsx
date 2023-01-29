import styled from "styled-components";
import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { SiteContent } from "../styles/common";
import { Header } from "../common/Header";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
      <SiteContent>
        <SiteNavigation />
        <SiteListWrapper>
          {siteList.map((x, i) => {
            const { title, link, image } = x;
            return (
              <li key={i}>
                <ImageWrapper>
                  <Image
                    src={image}
                    alt={title}
                    width={350}
                    height={219}
                    priority
                  />
                </ImageWrapper>

                <a href={link}>{title}</a>
              </li>
            );
          })}
        </SiteListWrapper>
      </SiteContent>
    </div>
  );
};

export default sites;
