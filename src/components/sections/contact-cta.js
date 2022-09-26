import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Subtitle from "../elements/subtitle";
import Button from "../elements/button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Main = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;
  @media (max-width: 960px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
  }
`;

const ContactCTA = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Subtitle bulletColor="red" subtitleText="Envie de nous rejoindre&nbsp;?" />
        </div>
        <div>
          <Link to="/nous-rejoindre"><Button buttonText="Nos offres" /></Link>
        </div>
      </Wrapper>
    </Main>
  );
};

export default ContactCTA;
