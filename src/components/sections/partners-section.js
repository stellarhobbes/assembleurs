import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { useStaticQuery, graphql } from "gatsby";

/*Styles*/
const Main = styled.div`
  padding: 50px 0px;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  height: 50px;
  width: auto;
  margin: 10px 20px;
  @media (max-width: 960px) {
   margin-bottom: 20px;
   height: auto;
   width: 60%;
  }
`;

const Partners = () => {
  const Partners = useStaticQuery(graphql`
  query {
    strapiHomepage {
      partners {
        partnerLogo {
          url
        }
      }
    }
  }
`);
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        {Partners.strapiHomepage.partners.map((content) => (
          <Image src={content.partnerLogo.url} />
        ))}
      </Wrapper>
    </Main>
  );
};

export default Partners;
