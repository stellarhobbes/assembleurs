import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

/*Images*/
import BanqueDesTerritoires from "../../images/partners/logo-bdt.png";
import HautsdeFrance from "../../images/partners/logo-hdf.jpg";
import LogoPop from "../../images/partners/logo-pop.jpg";
import Mission from "../../images/partners/logo-mission.jpg";
import LogoSylab from "../../images/partners/logo-sylab.png";

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
    src: BanqueDesTerritoires,
    alt: "Logo de la Banque des territoires",
  },
  {
    src: HautsdeFrance,
    alt: "Logo de la région Hauts de France",
  },
  {
    src: LogoSylab,
    alt: "Logo de SYLAB",
  },
  {
    src: LogoPop,
    alt: "Logo du groupe POP",
  },
  {
    src: Mission,
    alt: "Logo de la Mission de Société Numérique",
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
