import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

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
  const contact = useStaticQuery(graphql`
  query {
    strapiContact {
      mailAdress
      title
      bandeau
      adress
      accroche
    }
  }
`);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <Header
        iconUrl={LogoAssembleurs}
        iconAlt="Icone du logo des Assembleurs"
        titleText={contact.strapiContact.title}
        contentText={contact.strapiContact.accroche}
      ></Header>
      <MailCTA>
        <MailText>
          {contact.strapiContact.bandeau}
          <MailNumber>
            <Mail href={`mailto:` + contact.strapiContact.mailAdress}>
              &nbsp;{contact.strapiContact.mailAdress}
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
              <Content>{contact.strapiContact.adress}</Content>
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

export const Head = () => (
  <Seo
    title="Les Assembleurs - Contact"
    pathname="/contact"
  ></Seo>
);
