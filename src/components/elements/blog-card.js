import React from "react";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";

import Button from "../elements/button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Wrapper = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
  padding: 30px 30px;
  border-radius: 30px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3`
  text-transform: initial;
  letter-spacing: 0.5px;
`;
const Date = styled.p`
  font-size: 0.9em;
  text-transform: uppercase;
`;
const Content = styled.p``;

const BlogCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Image src={props.imageUrl}></Image>
      <Title>{props.titleText}</Title>
      <Date>{props.date}</Date>
      <Content>{props.children}</Content>
      <Button url={props.buttonUrl} buttonText="Lire l'article" />
    </Wrapper>
  );
};
export default BlogCard;
