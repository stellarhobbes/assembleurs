import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Subtitle from "../elements/subtitle";
import Button from "../elements/button";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "lightblue" ? "#E0F3F9" : "fff"};
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: initial;
  }
`;

const CenterText = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SubtitleButton = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <Subtitle subtitleText={props.subtitleText} />
        {props.centerText && <CenterText>{props.centerText}</CenterText>}
        {props.buttonText && <Button buttonText={props.buttonText} buttonUrl={props.url} />}
      </Wrapper>
    </Main>
  );
};

export default SubtitleButton;
