import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { FaArrowCircleRight } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;
const Title = styled.h4`
  text-transform: none;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 5px 0px;
`;
const Content = styled.p`
    margin: 0px 0px;
    text-align: left;
`;

const ListElement = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div style={{marginRight: "30px"}}>
        <FaArrowCircleRight color="#FF4114" size="30" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {props.titleText && <Title>{props.titleText}</Title>}
        <Content>{props.contentText}</Content>
      </div>
    </Wrapper>
  );
};

export default ListElement;
