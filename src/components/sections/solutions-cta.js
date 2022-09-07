import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Subtitle from "../elements/subtitle";
import Button from "../elements/button";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "white" ? "#ffffff" : "#E0F3F9"};
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;
  }
`;

const SolutionsCTA = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Subtitle bulletColor="red" subtitleText="Nos solutions pour l'inclusion numérique" />
        </div>
        <div>
          <Link to="#"><Button buttonText="Découvrir" /></Link>
        </div>
      </Wrapper>
    </Main>
  );
};

export default SolutionsCTA;
