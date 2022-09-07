import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Button from "./button";

const Wrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;
const Name = styled.h3`
  margin: 0px 0px;
`;
const Job = styled.p`
  margin: 5px 0px;
`;

const PeopleCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Image src={props.imageUrl} />
      <Name>{props.name}</Name>
      <Job>{props.job}</Job>
      <Button buttonText="Contacter par mail" url={props.buttonUrl}/>
    </Wrapper>
  );
};

export default PeopleCard;
