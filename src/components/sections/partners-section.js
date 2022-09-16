import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

/*Images*/
import Europe from "../../images/partners/logo-europe.jpg";
import Anct from "../../images/partners/logo-anct.jpg";
import Banque from "../../images/partners/logo-bdt.png";
import Region from "../../images/partners/logo-hdf.jpg";
import Pop from "../../images/partners/logo-pop.jpg";

/*Styles*/
const Main = styled.div`
  padding: 50px 0px;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  height: 50px;
  margin: 10px 20px;
`;

const contents = [
  {
    src: Europe,
    alt: "Logo de l'Union Européenne",
  },
  {
    src: Anct,
    alt: "Logo de l'Agence Nationale de la Cohésion des Territoires'",
  },
  {
    src: Banque,
    alt: "Logo de la Banque des territoires",
  },
  {
    src: Region,
    alt: "Logo de la région Hauts-de-France",
  },
  {
    src: Pop,
    alt: "Logo du groupe POP",
  },
];

const Partners = () => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        {contents.map((content) => (
          <Image src={content.src} alt={content.alt} />
        ))}
      </Wrapper>
    </Main>
  );
};

export default Partners;
