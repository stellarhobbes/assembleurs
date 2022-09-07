import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import LogoAssembleurs from "../../images/icons/Icone_logo_Assembleurs.png";
import LinkedinLogo from "../../images/icons/Icone_linkedin_cyan.png";
import TwitterLogo from "../../images/icons/Icone_twitter_cyan.png";
import JobsLogo from "../../images/icons/Icone_jobs_cyan.png";
import ContactLogo from "../../images/icons/Icone_contact_cyan.png";

/*styles*/
const Main = styled.div`
  background-color: #252d80;
  padding: 50px 0px;
`;

const Navbar = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 75px;
  margin-right: 50px;
  @media (max-width: 960px) {
    margin-right: initial;
  }
`;

const NavLink = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.5em;
  margin: 10px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    color: #33cbeb;
    transition: 0.3s;
  }
  @media (max-width: 960px) {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
  }
`;

const SubFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

const SubFooterText = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const SubFooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 30px;
  margin-left: 10px;
  @media (max-width: 960px) {
    margin-left: initial;
    margin-top: 10px;
  }
`;

/*Contents*/
const navContents = [
  {
    title: "Coopérative",
    url: "/cooperative",
  },
  {
    title: "Solutions",
    url: "#",
  },
  {
    title: "Ressources",
    url: "#",
  },
  {
    title: "Mentions légales",
    url: "#",
  },
  {
    title: "Missions",
    url: "/missions",
  },
  {
    title: "Sur le terrain",
    url: "#",
  },
  {
    title: "Agenda",
    url: "#",
  },
  {
    title: "Cookies & RGPD",
    url: "#",
  },
];

const Footer = () => {
  return (
    <Main>
      <GlobalStyle />
      <Navbar>
        <div>
          <Link to="/"><Logo src={LogoAssembleurs} alt="Logo Assembleurs"></Logo></Link>
        </div>
        <Nav>
          {navContents.map((content) => (
            <Link to={content.url}>
              <NavLink>{content.title}</NavLink>
            </Link>
          ))}
        </Nav>
      </Navbar>
      <SubFooter>
        <SubFooterText>
          <Link to="/contact">
            <NavLink>
              Contact
              <Image src={ContactLogo} alt=""></Image>
            </NavLink>
          </Link>
          <Link to="#">
            <NavLink>
              Jobs
              <Image src={JobsLogo} alt=""></Image>
            </NavLink>
          </Link>
        </SubFooterText>
        <SubFooterIcons>
          <Link to="#">
            <NavLink>
              Twitter
              <Image src={TwitterLogo} alt=""></Image>
            </NavLink>
          </Link>
          <Link to="#">
            <NavLink>
              Linkedin
              <Image src={LinkedinLogo} alt=""></Image>
            </NavLink>
          </Link>
        </SubFooterIcons>
      </SubFooter>
    </Main>
  );
};

export default Footer;
