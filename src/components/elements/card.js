import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import Button from "./button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.h3`
  text-align: center;
`;

const Content = styled.p`
  text-align: center;
`;

const Card = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      {props.url && <Image src={props.url} alt={props.altimage}></Image>}
      {props.iconUrl && <Icon src={props.iconUrl} alt={props.iconAlt}></Icon>}
      {props.titleText && <Title>{props.titleText}</Title>}
      {props.contentText && <Content>{props.contentText}</Content>}
      {props.buttonText && (
        <Button
          buttonText={props.buttonText}
          url={props.buttonUrl}
          target={props.target}
        />
      )}
    </Wrapper>
  );
};

export default Card;
