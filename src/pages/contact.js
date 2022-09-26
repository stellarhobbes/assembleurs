import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import SectionWrap from "../components/sections/section-wrap";
import Footer from "../components/sections/footer";

/*Images*/
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";
import Enveloppe from "../images/illustrations/Picto_mail.png";

/*Styles*/
const MailCTA = styled.div`
  background-color: #e0f3f9;
  padding: 10px 0px;
  text-align: center;
`;

const MailText = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.8em;
`;

const MailNumber = styled.span`
  color: #00bee6;
  text-decoration: none;
`;

const Mail = styled.a`
  color: inherit;
`;

const ContactSection = styled.div``;
const TopContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 250px;
  margin: 0px 25px;
`;

const Adresse = styled.div`
  margin: 0px 25px;
`;

const Icon = styled.img`
  width: 50px;
`;

const Title = styled.h3`
  margin: 10px 0px;
`;

const Content = styled.p`
  margin: 5px 0px;
`;

const FormContact = styled.div``;

const Contact = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Contact</title>
        <link rel="canonical" href="https://les.assembleurs.co/contact" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Header
        iconUrl={LogoAssembleurs}
        iconAlt="Icoône du logo des Assembleurs"
        titleText="Envie d'échanger avec nous ?"
        contentText="Vous souhaitez co-construire avec nous une société numérique inclusive et créative en Hauts-de-France&nbsp;? Une question, une remarque, une requête&nbsp;? Contactez les Assembleurs&nbsp;!"
      ></Header>
      <MailCTA>
        <MailText>
          Nous sommes joignable par e-mail :
          <MailNumber>
            <Mail href="mailto:bonjour@assembleurs.co">
              &nbsp;bonjour@assembleurs.co
            </Mail>
          </MailNumber>
        </MailText>
      </MailCTA>
      <SectionWrap>
        <ContactSection>
          <TopContact>
            <Image src={Enveloppe} alt="Illustration d'une enveloppe"></Image>
            <Adresse>
              <Icon src={LogoAssembleurs} alt="Logo des Assembleurs"></Icon>
              <Title>Les Assembleurs</Title>
              <Content>8 rue Nicolas Leblanc</Content>
              <Content>59000 Lille</Content>
            </Adresse>
          </TopContact>
          <FormContact></FormContact>
        </ContactSection>
      </SectionWrap>
      <Footer />
    </body>
  );
};

export default Contact;
