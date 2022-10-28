import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { Seo } from "../components/seo";

import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import SectionWrap from "../components/sections/section-wrap";

import StripesImage from "../images/pictures/motif_lignes_cyan.png";

const Wrapper = styled.section``;
const Title = styled.h3``;
const Content = styled.p``;

const MentionsLegales = () => {
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <HalfImage
        backgroundImage={StripesImage}
        backgroundColor="lightgrey"
        subtitleText="Mentions légales"
        contentText="Mentions légales et politique de confidentialité"
      />
      <SectionWrap>
        <Wrapper>
          <Title>Commentaires</Title>
          <Content>
            Quand vous laissez un commentaire sur notre site web, les données
            inscrites dans le formulaire de commentaire, mais aussi votre
            adresse IP et l’agent utilisateur de votre navigateur sont collectés
            pour nous aider à la détection des commentaires indésirables. Une
            chaîne anonymisée créée à partir de votre adresse de messagerie
            (également appelée hash) peut être envoyée au service Gravatar pour
            vérifier si vous utilisez ce dernier. Les clauses de confidentialité
            du service Gravatar sont disponibles ici :
            https://automattic.com/privacy/. Après validation de votre
            commentaire, votre photo de profil sera visible publiquement à coté
            de votre commentaire.
          </Content>
          <Title>Médias</Title>
          <Content>
            Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que
            vous téléversez des images sur le site web, nous vous conseillons
            d’éviter de téléverser des images contenant des données EXIF de
            coordonnées GPS. Les visiteurs de votre site web peuvent télécharger
            et extraire des données de localisation depuis ces images.{" "}
          </Content>
          <Title>Formulaires de contact</Title>
          <Title>Cookies</Title>
          <Content>
            Si vous déposez un commentaire sur notre site, il vous sera proposé
            d’enregistrer votre nom, adresse de messagerie et site web dans des
            cookies. C’est uniquement pour votre confort afin de ne pas avoir à
            saisir ces informations si vous déposez un autre commentaire plus
            tard. Ces cookies expirent au bout d’un an. Si vous vous rendez sur
            la page de connexion, un cookie temporaire sera créé afin de
            déterminer si votre navigateur accepte les cookies. Il ne contient
            pas de données personnelles et sera supprimé automatiquement à la
            fermeture de votre navigateur. Lorsque vous vous connecterez, nous
            mettrons en place un certain nombre de cookies pour enregistrer vos
            informations de connexion et vos préférences d’écran. La durée de
            vie d’un cookie de connexion est de deux jours, celle d’un cookie
            d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi »,
            votre cookie de connexion sera conservé pendant deux semaines. Si
            vous vous déconnectez de votre compte, le cookie de connexion sera
            effacé. En modifiant ou en publiant une publication, un cookie
            supplémentaire sera enregistré dans votre navigateur. Ce cookie ne
            comprend aucune donnée personnelle. Il indique simplement l’ID de la
            publication que vous venez de modifier. Il expire au bout d’un jour.
          </Content>
          <Title>Contenu embarqué depuis d’autres sites</Title>
          <Content>
            Les articles de ce site peuvent inclure des contenus intégrés (par
            exemple des vidéos, images, articles…). Le contenu intégré depuis
            d’autres sites se comporte de la même manière que si le visiteur se
            rendait sur cet autre site. Ces sites web pourraient collecter des
            données sur vous, utiliser des cookies, embarquer des outils de
            suivis tiers, suivre vos interactions avec ces contenus embarqués si
            vous disposez d’un compte connecté sur leur site web.
          </Content>
          <Title>Utilisation et transmission de vos données personnelles</Title>
          <Title>Durées de stockage de vos données</Title>
          <Content>
            Si vous laissez un commentaire, le commentaire et ses métadonnées
            sont conservés indéfiniment. Cela permet de reconnaître et approuver
            automatiquement les commentaires suivants au lieu de les laisser
            dans la file de modération. Pour les utilisateurs et utilisatrices
            qui s’enregistrent sur notre site (si cela est possible), nous
            stockons également les données personnelles indiquées dans leur
            profil. Tous les utilisateurs et utilisatrices peuvent voir,
            modifier ou supprimer leurs informations personnelles à tout moment
            (à l’exception de leur nom d’utilisateur·ice). Les gestionnaires du
            site peuvent aussi voir et modifier ces informations.
          </Content>
          <Title>Les droits que vous avez sur vos données</Title>
          <Content>
            Si vous avez un compte ou si vous avez laissé des commentaires sur
            le site, vous pouvez demander à recevoir un fichier contenant toutes
            les données personnelles que nous possédons à votre sujet, incluant
            celles que vous nous avez fournies. Vous pouvez également demander
            la suppression des données personnelles vous concernant. Cela ne
            prend pas en compte les données stockées à des fins administratives,
            légales ou pour des raisons de sécurité.
          </Content>
          <Title>Transmission de vos données personnelles</Title>
          <Content>
            Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un
            service automatisé de détection des commentaires indésirables.
          </Content>
        </Wrapper>
      </SectionWrap>
      <Footer />
    </body>
  );
};

export default MentionsLegales;

export const Head = () => (
  <Seo
    title="Les Assembleurs - Mentions légales"
    pathname="/mentions-legales"
  ></Seo>
);