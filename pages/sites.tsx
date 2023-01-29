import styled from "styled-components";
import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";
import { SiteContent } from "../styles/common";
import { Header } from "../common/Header";

const SiteListWrapper = styled.ul`
  width: 80%;
`;

export const sites = () => {
  return (
    <div>
      <Header />
      <SiteContent>
        <SiteNavigation />
        <SiteListWrapper>
          {siteList.map((x, i) => {
            const { title, link } = x;
            return (
              <li key={i}>
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
