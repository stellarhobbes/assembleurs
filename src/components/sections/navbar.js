import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import NavLink from "../elements/navlink";

import LogoAssembleurs from "../../images/icons/Icone_logo_Assembleurs.png";
import IconContact from "../../images/icons/Icone_contact_marine.png";
import IconAgenda from "../../images/icons/icon-agenda.png";
import IconHamburger from "../../images/icons/icon-hamburger.png";

const Main = styled.div`
  padding: 20px 0px;
  background-color: #ffffff;
  @media (max-width: 960px) {
    padding: 40px 0px;
  }
`;

const DesktopWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-right: 30px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

const MobileSocial = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 40px;
  height: auto;
  margin: 0px 10px;
  cursor: pointer;
`;

const MobileWrapper = styled.div`
  z-index: 100;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  padding: 20px 50px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MobileNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
  transition: max-height 0.3s ease-in;
  width: 100%;
`;

const navigationContents = [
  {
    text: "Coopérative",
    link: "/cooperative",
  },
  {
    text: "Missions",
    link: "/missions",
  },
  {
    text: "Solutions",
    link: "/solutions",
  },
  {
    text: "Sur le terrain",
    link: "/sur-le-terrain",
  },
  {
    text: "Nos communs",
    link: "/nos-communs",
  },
];

const mobileNavigationContents = [
  {
    text: "Coopérative",
    link: "/cooperative",
  },
  {
    text: "Équipe",
    link: "/equipe",
  },
  {
    text: "Chiffres",
    link: "/chiffres",
  },
  {
    text: "Devenir sociétaire",
    link: "/societaire",
  },
  {
    text: "Témoignage",
    link: "/temoignages",
  },
  {
    text: "Missions",
    link: "/missions",
  },
  {
    text: "Solutions",
    link: "/solutions",
  },
  {
    text: "Sur le terrain",
    link: "/sur-le-terrain",
  },
  {
    text: "Nos communs",
    link: "/nos-communs",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Main>
      <GlobalStyle />
      <DesktopWrapper>
        <Nav>
          <Link to="/">
            <Logo src={LogoAssembleurs} alt=""></Logo>
          </Link>
          <Navigation>
            {navigationContents.map((navigation) => (
              <NavLink to={navigation.link} target={navigation.target}>
                {navigation.text}
              </NavLink>
            ))}
          </Navigation>
        </Nav>
        <Social>
          <Link to="/contact">
            <Icon src={IconContact} />
          </Link>
          <Link to="https://openagenda.com/assembleurs" target="_blank">
            <Icon src={IconAgenda} />
          </Link>
        </Social>
      </DesktopWrapper>

      <MobileWrapper>
        <MobileNav>
          <Link to="/">
            <Logo src={LogoAssembleurs} alt=""></Logo>
          </Link>
          <Icon src={IconHamburger} onClick={() => setIsOpen(!isOpen)} />
        </MobileNav>
        <MobileNavigation isOpen={isOpen}>
          {mobileNavigationContents.map((mobileNavigation) => (
            <NavLink to={mobileNavigation.link} target={mobileNavigation.target}>
              {mobileNavigation.text}
            </NavLink>
          ))}
          <MobileSocial>
            <Link to="/contact">
              <Icon src={IconContact} />
            </Link>
            <Link to="https://openagenda.com/assembleurs" target="_blank">
              <Icon src={IconAgenda} />
            </Link>
          </MobileSocial>
        </MobileNavigation>
      </MobileWrapper>
    </Main>
  );
};

export default Navbar;
