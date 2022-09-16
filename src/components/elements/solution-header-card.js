import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex; 
  opacity: ${(props) => props.opacity === "yes" ? "0.3" : "1"};
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
`;

const Title = styled.h2`
  background-color: #00bee6;
  font-size: 1.7em;
  text-align: center;
  font-weight: 500;
  padding: 5px 20px;
  border-radius: 30px;
  margin-bottom: 0px;
`;

const Content = styled.p`
  color: white;
  text-align: center;
`;

const SolutionHeaderCard = (props) => {
  return (
    <Link to={props.link}>
      <Wrapper
        opacity={props.opacity}
        className="box"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
      >
        <GlobalStyle />
        <Image src={props.imageUrl} alt={props.imageAlt}></Image>
        <Title>{props.titleText}</Title>
        <Content>{props.contentText}</Content>
      </Wrapper>
    </Link>
  );
};

export default SolutionHeaderCard;
