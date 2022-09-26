import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Guillemets from "../../images/icons/guillemets-assembleurs.png";
import Pattern from "../../images/pictures/pattern-marine.png";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
  darkblue: "#252D80",
};

const Main = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
`;

const Wrapper = styled.div`
  background-image: url(${Pattern});
  background-size: cover;
  background-color: #252d80;
  padding: 50px 30px;
  border-radius: 30px;
  margin: auto;
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    padding: 50px 0px;
    border-radius: initial;
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  text-transform: initial;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 2em;
  text-align: center;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 1.6em;
  }
`;

const Icon = styled.img`
  width: 30px;
`;

const Name = styled.p`
  color: white;
  font-weight: 400;
  text-align: center;
`;

const Citation = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <Icon src={Guillemets} alt="" />
        <Title>{props.citationText}</Title>
        <Icon src={Guillemets} alt="" />
        {props.nameText && <Name>{props.nameText}</Name>}
      </Wrapper>
    </Main>
  );
};

export default Citation;
