import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import FourColumns from "../components/sections/four-columns";
import DarkCard from "../components/elements/darkcard";
import ThreeColumns from "../components/sections/three-columns";
import Card from "../components/elements/card";
import NumberBloc from "../components/blocs/number-bloc";
import DoubleColumns from "../components/sections/double-columns";
import ReverseDoubleColumns from "../components/sections/reverse-double-columns";
import SolutionsCTA from "../components/sections/solutions-cta";
import Footer from "../components/sections/footer";
import SectionWrap from "../components/sections/section-wrap";
import ThreeBlocs from "../components/blocs/three-blocs";
import Separator from "../components/blocs/separator";

/*Images*/
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import NumberOne from "../images/icons/number01-assembleurs.png";
import NumberTwo from "../images/icons/number02-assembleurs.png";
import NumberThree from "../images/icons/number03-assembleurs.png";
import NumberFour from "../images/icons/number04-assembleurs.png";

/*Styles*/
const Image = styled.img`
  width: 100%;
`;

const Missions = () => {
  const MissionsContent = useStaticQuery(graphql`
    query {
      strapiMission {
        id
        title
        accroche
        numberSection {
          numberCard {
            title
            number {
              url
            }
            content
          }
        }
        missionOne {
          title
          image {
            url
          }
          content
          subContent
        }
        missionTwo {
          title
          content
          calltoactionOne {
            image {
              url
            }
            title
            buttonText
            buttonUrl
          }
          calltoactionTwo {
            image {
              url
            }
            title
            buttonText
            buttonUrl
          }
        }
        missionThree {
          title
          image {
            url
          }
          content
          subContent
        }
        subMissionThree {
          numberCard {
            number {
              url
            }
            title
            content
          }
        }
        missionFour {
          title
          content
          subContent
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <Header
        isChildren="yes"
        iconUrl={CyanEye}
        iconAlt="Icoône oeil rouge"
        titleText={MissionsContent.strapiMission.title}
        contentText={MissionsContent.strapiMission.accroche}
      >
        <FourColumns>
          {MissionsContent.strapiMission.numberSection.numberCard.map(
            (content) => (
              <DarkCard
                iconUrl={content.number.url}
                titleText={content.title}
                contentText={content.content}
              />
            )
          )}
        </FourColumns>
      </Header>
      <SectionWrap>
        <DoubleColumns>
          <NumberBloc
            url={NumberOne}
            iconAlt="Numéro un"
            subtitleText={MissionsContent.strapiMission.missionOne.title}
            contentText={MissionsContent.strapiMission.missionOne.content}
            bubbleText={MissionsContent.strapiMission.missionOne.subContent}
          />
          <Image src={MissionsContent.strapiMission.missionOne.image.url} />
        </DoubleColumns>
      </SectionWrap>
      <SectionWrap backgroundColor="lightgrey">
        <ThreeColumns backgroundColor="lightgrey">
          <Card
            url={
              MissionsContent.strapiMission.missionTwo.calltoactionOne.image.url
            }
            altimage="Icône de loupe"
            titleText={
              MissionsContent.strapiMission.missionTwo.calltoactionOne.title
            }
            buttonText={
              MissionsContent.strapiMission.missionTwo.calltoactionOne
                .buttonText
            }
            buttonUrl={
              MissionsContent.strapiMission.missionTwo.calltoactionOne.buttonUrl
            }
            target="_blank"
          />
          <Card
            url={
              MissionsContent.strapiMission.missionTwo.calltoactionTwo.image.url
            }
            altimage="Icône de loupe"
            titleText={
              MissionsContent.strapiMission.missionTwo.calltoactionTwo.title
            }
            buttonText={
              MissionsContent.strapiMission.missionTwo.calltoactionTwo
                .buttonText
            }
            buttonUrl={
              MissionsContent.strapiMission.missionTwo.calltoactionTwo.buttonUrl
            }
            target="_blank"
          />
          <NumberBloc
            url={NumberTwo}
            iconAlt="Numéro deux"
            subtitleText={MissionsContent.strapiMission.missionTwo.title}
            contentText={MissionsContent.strapiMission.missionTwo.content}
          />
        </ThreeColumns>
      </SectionWrap>
      <SectionWrap>
        <DoubleColumns>
          <NumberBloc
            url={NumberThree}
            iconAlt="Numéro trois"
            subtitleText={MissionsContent.strapiMission.missionThree.title}
            contentText={MissionsContent.strapiMission.missionThree.content}
            bubbleText={MissionsContent.strapiMission.missionThree.subContent}
          />
          <Image src={MissionsContent.strapiMission.missionThree.image.url} />
        </DoubleColumns>
        <div style={{ padding: "50px" }}>
          <ThreeColumns>
            {MissionsContent.strapiMission.subMissionThree.numberCard.map(
              (content) => (
                <Card
                  iconUrl={content.number.url}
                  titleText={content.title}
                  contentText={content.content}
                />
              )
            )}
          </ThreeColumns>
        </div>
      </SectionWrap>
      <Separator />
      <SectionWrap>
        <ReverseDoubleColumns>
          <ThreeBlocs></ThreeBlocs>
          <NumberBloc
            url={NumberFour}
            iconAlt="Numéro quatre"
            subtitleText={MissionsContent.strapiMission.missionFour.title}
            contentText={MissionsContent.strapiMission.missionFour.content}
            otherContentText={MissionsContent.strapiMission.missionFour.subContent}
          />
        </ReverseDoubleColumns>
      </SectionWrap>
      <SolutionsCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Missions;

export const Head = () => (
  <Seo title="Les Assembleurs - Missions" pathname="/missions"></Seo>
);
