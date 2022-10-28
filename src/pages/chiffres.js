import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import TopNav from "../components/sections/top-navigation";
import TextImage from "../components/sections/text-image";
import Footer from "../components/sections/footer";
import SectionWrap from "../components/sections/section-wrap";
import SubtitleCenter from "../components/sections/subtitle-center";
import DataCard from "../components/elements/data-card";
import ThreeColumns from "../components/sections/three-columns.js";
import ContactCTA from "../components/sections/contact-cta";
import Separator from "../components/blocs/separator";

/*Styles*/
const GeoNumbers = styled.div``;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 2em;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  @media (max-width: 960px) {
    display: none;
  }
`;
const NumbersBloc = styled.div``;
const Numbers = styled.div``;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Bottom = styled.div``;

const Chiffres = () => {
  const chiffresContent = useStaticQuery(graphql`
  query {
    strapiChiffre {
      textImage {
        image {
          url
        }
        title
        description
      }
      assembleursData {
        numberImage {
          url
        }
        title
        dataCard {
          cardImage {
            url
          }
          content
          title
          subContent
          source
        }
      }
      inclusionData {
        numberImage {
          url
        }
        title
        dataCard {
          cardImage {
            url
          }
          title
          content
          subContent
          source
        }
      }
      geoData {
        numberImage {
          url
        }
        title
        decorationImage {
          url
        }
        firstGeoData {
          cardImage {
            url
          }
          title
          content
          subContent
          source
        }
        secondGeoData {
          cardImage {
            url
          }
          title
          content
          subContent
          source
        }
        thirdGeoData {
          cardImage {
            url
          }
          title
          content
          subContent
          source
        }
      }
    }
  }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <TextImage
        backgroundColor="darkblue"
        bulletColor="red"
        titleColor="white"
        title={chiffresContent.strapiChiffre.textImage.title}
        contentColor="white"
        imageUrl={chiffresContent.strapiChiffre.textImage.image.url}
        alt="Une réunion chez les Assembleurs"
      >
        {chiffresContent.strapiChiffre.textImage.description}
      </TextImage>
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <SectionWrap>
          <SubtitleCenter iconUrl={chiffresContent.strapiChiffre.assembleursData.numberImage.url} iconAlt="">
          {chiffresContent.strapiChiffre.assembleursData.title}
          </SubtitleCenter>
          <SectionWrap>
            <ThreeColumns>
              {chiffresContent.strapiChiffre.assembleursData.dataCard.map((data) => (
                <DataCard
                  imageUrl={data.cardImage.url}
                  subtitleText={data.title}
                  contentText={data.content}
                  subcontentText={data.subContent}
                  sourceText={data.source}
                />
              ))}
            </ThreeColumns>
          </SectionWrap>
        </SectionWrap>
      </div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <SectionWrap>
          <SubtitleCenter iconUrl={chiffresContent.strapiChiffre.inclusionData.numberImage.url} iconAlt="">
          {chiffresContent.strapiChiffre.inclusionData.title}
          </SubtitleCenter>
          <SectionWrap>
            <ThreeColumns>
            {chiffresContent.strapiChiffre.inclusionData.dataCard.map((data) => (
                <DataCard
                  imageUrl={data.cardImage.url}
                  subtitleText={data.title}
                  contentText={data.content}
                  subcontentText={data.subContent}
                  sourceText={data.source}
                />
              ))}
            </ThreeColumns>
          </SectionWrap>
        </SectionWrap>
      </div>
      <Separator />
      <SectionWrap>
        <GeoNumbers>
          <Wrapper>
            <Image src={chiffresContent.strapiChiffre.geoData.decorationImage.url}></Image>
            <NumbersBloc>
              <SubtitleCenter iconUrl={chiffresContent.strapiChiffre.geoData.numberImage.url} iconAlt="">
              {chiffresContent.strapiChiffre.geoData.title}
              </SubtitleCenter>
              <Numbers>
                <Top>
                  <DataCard
                    imageUrl={chiffresContent.strapiChiffre.geoData.firstGeoData.cardImage.url}
                    imageAlt=""
                    contentText={chiffresContent.strapiChiffre.geoData.firstGeoData.content}
                    subcontentText={chiffresContent.strapiChiffre.geoData.firstGeoData.subContent}
                  />
                  <DataCard
                    imageUrl={chiffresContent.strapiChiffre.geoData.secondGeoData.cardImage.url}
                    imageAlt=""
                    contentText={chiffresContent.strapiChiffre.geoData.secondGeoData.content}
                  />
                </Top>
                <Bottom>
                  <DataCard
                    imageUrl={chiffresContent.strapiChiffre.geoData.thirdGeoData.cardImage.url}
                    imageAlt=""
                    contentText={chiffresContent.strapiChiffre.geoData.thirdGeoData.content}
                  />
                </Bottom>
              </Numbers>
            </NumbersBloc>
          </Wrapper>
        </GeoNumbers>
      </SectionWrap>
      <Separator />
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Chiffres;

export const Head = () => (
  <Seo
    title="Les Assembleurs - Chiffres"
    pathname="/chiffres"
  ></Seo>
);
