import React from "react";
import { Header } from "../../common/Header";
import { SiteNavigation } from "../../common/SiteNavigation";
import { SiteContent } from "../../styles/common";

export const grammar = () => {
  return (
    <div>
      <Header />
      <SiteContent>
        <SiteNavigation />
      </SiteContent>
    </div>
  );
};

export default grammar;
