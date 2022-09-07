import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
`;

const Icon = styled.img`
  width: 50px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.8em;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Content = styled.p`
  color: #ffffff;
  text-align: center;
`;

const DarkCard = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      {props.imageUrl && <Image src={props.imageUrl} alt={props.imageAlt}></Image>}
      {props.iconUrl && <Icon src={props.iconUrl} alt={props.iconAlt}></Icon>}
      <Title>{props.titleText}</Title>
      <Content>{props.contentText}</Content>
    </Wrapper>
  );
};

export default DarkCard;
