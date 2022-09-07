import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { FaArrowCircleRight } from "react-icons/fa";

const PrimaryButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 10px 10px 20px;
  margin: 20px 0px;
  background-color: #1b2f7d;
  border-radius: 30px;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.8px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: #161a4a;
    transition: 0.3s;
  }
`;

let Button = (props) => {
  return (
    <Link to={props.url}>
      <GlobalStyle />
      <PrimaryButton>
        {props.buttonText}&nbsp;&nbsp;
        <FaArrowCircleRight color="#FF4114" size="30" />
      </PrimaryButton>
    </Link>
  );
};

export default Button;
