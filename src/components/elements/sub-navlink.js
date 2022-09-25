import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  font-size: 1.5em;
  color: #252d80;
  padding: 25px 0px;
  margin: 0px 30px;
  &:hover {
    color: #FF4114;
  }
`;

const activeStyles = {
  boxShadow: "inset 0 -0.8em 0 #FF411433",
  padding: "0px"

};

const SubNavLink = (props) => {
  return (
    <StyledLink to={props.to} activeStyle={activeStyles}>
      {props.children}
    </StyledLink>
  );
};

export default SubNavLink;
