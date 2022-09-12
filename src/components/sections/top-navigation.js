import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import SubNavLink from "../elements/sub-navlink";

const Main = styled.div`
  background-color: #ffffff;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 0.1em solid #e1f4fa;
`;

const links = [
  {
    to: "/cooperative",
    title: "Présentation",
  },
  {
    to: "/equipe",
    title: "Équipe",
  },
  {
    to: "/chiffres",
    title: "Chiffres",
  },
  {
    to: "/societaire",
    title: "Devenir Sociétaire",
  },
  {
    to: "/temoignages",
    title: "Témoignages",
  },
];

const TopNav = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        {links.map((link) => (
          <SubNavLink to={link.to}>{link.title}</SubNavLink>
        ))}
      </Wrapper>
    </Main>
  );
};

export default TopNav;
