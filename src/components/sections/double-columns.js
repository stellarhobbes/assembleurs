import React from "react";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "lightblue" ? "#E0F3F9" : "#ffffff"};
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 2em;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DoubleColumns = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>{props.children}</Wrapper>
    </Main>
  );
};

export default DoubleColumns;
