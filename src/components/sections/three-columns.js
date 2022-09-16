import React from "react";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";

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

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;
  }
  @media (max-width: 460px) {
    display: initial;
  }
`;

const ThreeColumns = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>{props.children}</Wrapper>
    </Main>
  );
};

export default ThreeColumns;
