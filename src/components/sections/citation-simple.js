import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const Main = styled.div``;
const Wrapper = styled.section`
  position: relative;
  padding: 75px 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-transform: initial;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 2em;
  text-align: center;
  width: 60%;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const Icon = styled.img`
  width: 50px;
  position: absolute;
  top: -25px;
`;

const Name = styled.p``;

const CitationSimple = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Icon src={props.iconUrl} alt={props.iconAlt}></Icon>
        <Title>{props.citationText}</Title>
        {props.nameText && <Name>{props.nameText}</Name>}
      </Wrapper>
    </Main>
  );
};

export default CitationSimple;
