import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { FaArrowCircleRight } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconNumber = styled.img`
  width: 50px;
`;
const Subtitle = styled.h3`
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: initial;
`;
const Content = styled.p``;

const Bubble = styled.p`
  display: grid;
  grid-template-columns: 1fr 10fr;
  font-size: 0.8em;
  padding-top: 30px;
  border-top: 0.2px solid #252d80;
`;

const NumberBloc = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <IconNumber src={props.url} alt={props.iconAlt} />
      <Subtitle><mark style={{backgroundColor: "#FFE0DB", color: "#252D80"}}>{props.subtitleText}</mark></Subtitle>
      <Content>{props.contentText}</Content>
      <Content>{props.otherContentText}</Content>
      {props.bubbleText && (
        <Bubble>
          <FaArrowCircleRight color="#252d80" size="20" />
          {props.bubbleText}
        </Bubble>
      )}
    </Wrapper>
  );
};

export default NumberBloc;
