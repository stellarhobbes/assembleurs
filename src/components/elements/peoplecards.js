import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Button from "./button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
  darkblue: "#252D80",
};

const Wrapper = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
const Name = styled.h3`
  margin: 0px 0px;
  text-align: center;
`;
const Job = styled.p`
  margin: 5px 0px;
  text-align: center;
`;

const PeopleCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Image src={props.imageUrl} />
      <Name>{props.name}</Name>
      <Job>{props.job}</Job>
      {props.buttonUrl && <Button buttonText="Email" url={props.buttonUrl} />}
    </Wrapper>
  );
};

export default PeopleCard;
