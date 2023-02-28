import { Header } from "../../common/Header";
import { SiteNavigation } from "../../common/SiteNavigation";
import { SiteListWrapper } from "../../common/SiteListWrapper";
import { siteList } from "../../configs/siteList";

export const grammar = () => {
  // @ts-ignore
  const grammarList = siteList.filter((x) => x.tags.includes("grammar"));
  return (
    <div>
      <Header />
      <div className="flex">
        <SiteNavigation />
        <SiteListWrapper list={grammarList} />
      </div>
    </div>
  );
};

export default grammar;
