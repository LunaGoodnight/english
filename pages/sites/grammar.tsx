import React from "react";
import { Header } from "../../common/Header";
import { SiteNavigation } from "../../common/SiteNavigation";
import styled from "styled-components";

const SiteContent = styled.div`
  display: flex;
  width: 100%;
`;
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
