import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const ContentBloc = styled.div`
  background-color: #252d80;
  padding: 100px 100px;
  @media (max-width: 960px) {
    padding: 50px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3em;
`;
const Accroche = styled.p`
  color: white;
`;
const Date = styled.p`
  color: white;
  font-style: italic;
  color: #33cbeb;
  font-size: 1em;
`;

const ImageBloc = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  @media (max-width: 960px) {
    height: 40vh;
  }
`;

const BlogHeader = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <ContentBloc>
        <Title>{props.titleText}</Title>
        <Date>{props.date}</Date>
        <Accroche>{props.accrocheText}</Accroche>
      </ContentBloc>
      <ImageBloc backgroundImage={props.backgroundImage} />
    </Main>
  );
};

export default BlogHeader;