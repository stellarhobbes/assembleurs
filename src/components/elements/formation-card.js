import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import ReactMarkdown from "react-markdown";

import { FaHourglassHalf } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

import Button from "./button";

const ImageBloc = styled.div`
  border-radius: 30px 30px 0px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: #ffe0db;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  padding: 25px 50px;
  border-radius: 0px 0px 30px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  position: absolute;
  z-index: 100;
  top: -25px;
  width: 50px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 30px 30px 0px 0px;
`;

const Subtitle = styled.h3`
  text-transform: none;
  font-size: 1.6em;
  letter-spacing: 0.3px;
  font-weight: 700;
`;

const Accroche = styled.p`
  font-size: 1em;
  font-weight: 600;
`;

const DataBloc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Duration = styled.p`
  padding: 10px 20px 10px 20px;
  margin: 10px 5px;
  background-color: #1b2f7d;
  border-radius: 30px;
  font-family: "Big Shoulders Display";
  font-size: 18px;
  letter-spacing: 0.8px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const People = styled.p`
  padding: 10px 20px 10px 20px;
  margin: 10px 5px;
  background-color: #1b2f7d;
  border-radius: 30px;
  font-family: "Big Shoulders Display";
  font-size: 18px;
  letter-spacing: 0.8px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content = styled(ReactMarkdown)`
  font-size: 0.9em;
  line-height: 1.2em;
`;

const FormationCard = (props) => {
  return (
    <main>
      <GlobalStyle />
      <ImageBloc>
        <Icon
          src="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666963466/formation_assembleurs_communs_3f453b1e2c.png?updated_at=2022-10-28T13:24:26.873Z"
          alt="Icone de formation"
        ></Icon>
        {props.imageUrl && (
          <Image src={props.imageUrl} alt={props.imageAlt}></Image>
        )}
      </ImageBloc>
      <Wrapper backgroundImage={props.backgroundImage}>
        {props.subtitleText && <Subtitle>{props.subtitleText}</Subtitle>}
        {props.accrocheText && <Accroche>{props.accrocheText}</Accroche>}
        <DataBloc>
          <Duration>
            <FaHourglassHalf color="#FF4114" size="20" />
            &nbsp;{props.duration}
          </Duration>
          <People>
            <BsPeopleFill color="#FF4114" size="25" />
            &nbsp;&nbsp;{props.people}
          </People>
        </DataBloc>
        <Content>{props.children}</Content>
        {props.buttonUrl && (
          <Button
            buttonText="Découvrir"
            url={props.buttonUrl}
            target="_blank"
          ></Button>
        )}
      </Wrapper>
    </main>
  );
};

export default FormationCard;
