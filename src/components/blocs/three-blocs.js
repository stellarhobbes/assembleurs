import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import BackgroundPattern from "../../images/pictures/pattern-ovale-red.png";

const Wrapper = styled.div`
  background-image: url(${BackgroundPattern});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentWrap = styled.div`
  margin: 0px 20px;
`;

const Title = styled.h3`
  text-transform: none;
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: 700;
`;
const Content = styled.p`
  text-align: center;
`;

const ThreeBlocs = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Top>
        <ContentWrap>
          <Title>Programmes d'accompagnement</Title>
          <Content>Voyages, apprenants, conférences, échanges ...</Content>
        </ContentWrap>
      </Top>
      <Bottom>
        <ContentWrap>
          <Title>Pass numérique</Title>
          <Content>
            Mettre en réseau des prescripteurs avec des opérateurs de médiation
          </Content>
        </ContentWrap>
        <ContentWrap>
          <Title>Conseillers</Title>
          <Content>
            Animer le réseau des CNFS en Hauts-de-France : webinaires,
            rencontres, échanges ...
          </Content>
        </ContentWrap>
      </Bottom>
    </Wrapper>
  );
};

export default ThreeBlocs;
