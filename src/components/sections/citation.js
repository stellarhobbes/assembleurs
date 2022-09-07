import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Guillemets from "../../images/icons/guillemets-assembleurs.png";
import Pattern from "../../images/pictures/pattern-marine.png";

const Main = styled.div`
  background-color: #e0f3f9;
`;
const Wrapper = styled.section`
  background-image: url(${Pattern});
  background-size: cover;
  background-color: #252d80;
  padding: 50px 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  color: #ffffff;
  text-transform: initial;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 2em;
  text-align: center;
  width: 80%;
`;
const Icon = styled.img`
  width: 30px;
`;

const Name = styled.p``;

const Citation = (props) => {
  return (
    <Main>
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
