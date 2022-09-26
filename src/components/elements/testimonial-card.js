import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Button from "./button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Wrapper = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
  padding: 50px 50px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  margin-right: 25px;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const Title = styled.div``;
const Name = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 2em;
  color: #252d80;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Job = styled.p`
  margin: 0px 0px;
`;

const Company = styled.p`
  border-bottom: 0.1em solid #252d80;
  margin-top: 0px;
  padding-bottom: 25px;
  font-weight: 600;
`;

const Content = styled.p``;

const TestimonialCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Presentation>
        {props.imageUrl && <Image src={props.imageUrl} alt={props.imageAlt}></Image>}
        <Title>
          <Name>{props.nameText}</Name>
          <Job>{props.jobText}</Job>
          <Company>{props.companyText}</Company>
        </Title>
      </Presentation>
      <Content>{props.contentText}</Content>
      {props.buttonText && <Button url={props.buttonUrl} buttonText={props.buttonText}></Button>}
    </Wrapper>
  );
};

export default TestimonialCard;
