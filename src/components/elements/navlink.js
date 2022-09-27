import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: "Big Shoulders Display";
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.5em;
  color: #252d80;
  text-transform: uppercase;
  padding: 0px;
  margin: 5px 10px;
  &:hover {
    color: #33cbeb;
  }
`;

const activeStyles = {
  boxShadow: "inset 0 -0.8em 0 #99E5F5",
};

const NavLink = (props) => {
  return (
    <StyledLink to={props.to} target={props.target} activeStyle={activeStyles}>
      {props.children}
    </StyledLink>
  );
};

export default NavLink;
