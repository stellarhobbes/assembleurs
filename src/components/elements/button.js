import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { motion } from "framer-motion";

import { FaArrowCircleRight } from "react-icons/fa";

const PrimaryButton = styled(motion.button)`
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
  }
`;

let Button = (props) => {
  return (
    <Link to={props.url}>
      <GlobalStyle />
      <PrimaryButton
        whileHover={{
          x: 5,
          transition: { ease: "easeOut", duration: 0.1 },
        }}      
      >
        {props.buttonText}&nbsp;&nbsp;
        <FaArrowCircleRight color="#FF4114" size="30" />
      </PrimaryButton>
    </Link>
  );
};

export default Button;
