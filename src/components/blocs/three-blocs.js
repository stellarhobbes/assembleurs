import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { useStaticQuery, graphql } from "gatsby";

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
  const MissionsContent = useStaticQuery(graphql`
    query {
      strapiMission {
        missionFour {
          bottomBlocOne {
            title
            accroche
          }
          bottomBlocTwo {
            title
            accroche
          }
          topBloc {
            title
            accroche
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <GlobalStyle />
      <Top>
        <ContentWrap>
          <Title>
            {MissionsContent.strapiMission.missionFour.topBloc.title}
          </Title>
          <Content>
            {MissionsContent.strapiMission.missionFour.topBloc.accroche}
          </Content>
        </ContentWrap>
      </Top>
      <Bottom>
        <ContentWrap>
          <Title>
            {MissionsContent.strapiMission.missionFour.bottomBlocOne.title}
          </Title>
          <Content>
            {MissionsContent.strapiMission.missionFour.bottomBlocOne.accroche}
          </Content>
        </ContentWrap>
        <ContentWrap>
          <Title>
            {MissionsContent.strapiMission.missionFour.bottomBlocTwo.title}
          </Title>
          <Content>
            {MissionsContent.strapiMission.missionFour.bottomBlocTwo.accroche}
          </Content>
        </ContentWrap>
      </Bottom>
    </Wrapper>
  );
};

export default ThreeBlocs;
