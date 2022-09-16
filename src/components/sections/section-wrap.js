import React from "react";
import styled from "styled-components";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
  darkblue: "#252D80",
};

const Wrapper = styled.div`
  padding: 75px 0px;
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
`;

const SectionWrap = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>{props.children}</Wrapper>
  );
};

export default SectionWrap;