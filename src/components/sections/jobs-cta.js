import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { useStaticQuery, graphql } from "gatsby";

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
    text-align: center;
  }
`;

const JobsCTA = (props) => {
  const offers = useStaticQuery(graphql`
    query {
      strapiNousRejoindre {
        calltoactionMail {
          title
          buttonText
          mailAdress
        }
      }
    }
  `);
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Subtitle
            bulletColor="red"
            subtitleText={offers.strapiNousRejoindre.calltoactionMail.title}
          />
        </div>
        <div>
          <Link to={`mailto:${offers.strapiNousRejoindre.calltoactionMail.mailAdress}`}>
            <Button buttonText={offers.strapiNousRejoindre.calltoactionMail.buttonText} />
          </Link>
        </div>
      </Wrapper>
    </Main>
  );
};

export default JobsCTA;
