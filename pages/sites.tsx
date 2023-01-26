import styled from "styled-components";
import { Header } from "../common/Header";
import { SiteNavigation } from "../common/SiteNavigation";
import { siteList } from "../configs/siteList";

const SiteListWrapper = styled.ul`
  width: 80%;
`;

export const sites = () => {
  return (
    <div>
      <Header />
      <SiteNavigation />
      <SiteListWrapper>
        {siteList.map((x, i) => {
          const { title, link } = x;
          return (
            <li key={i}>
              <a href={link}></a>

              {title}
            </li>
          );
        })}
      </SiteListWrapper>
    </div>
  );
};

export default sites;
