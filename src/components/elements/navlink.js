import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.5em;
  color: #252d80;
  text-transform: uppercase;
  padding: 5px 10px;
  &:hover {
    color: #33cbeb;
  }
`;

const activeStyles = {
  color: "#33cbeb",
};

const NavLink = (props) => {
  return (
    <StyledLink to={props.to} activeStyle={activeStyles}>
      {props.children}
    </StyledLink>
  );
};

export default NavLink;
