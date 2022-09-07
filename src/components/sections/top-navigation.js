import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Main = styled.div``;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 0.1em solid #e1f4fa;
  border-bottom: 0.1em solid #ffffff;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const NavLink = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  text-transform: uppercase;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 1.5em;
`;

const TopNav = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Left>
          {props.prevLink && (
            <Link to={props.prevUrl}>
              <NavLink>
                <FaArrowCircleLeft color="#FF4114" size="30" />
                &nbsp;&nbsp;{props.prevLink}
              </NavLink>
            </Link>
          )}
        </Left>
        <Right>
          {props.nextLink && (
            <Link to={props.nextUrl}>
              <NavLink>
                {props.nextLink}&nbsp;&nbsp;
                <FaArrowCircleRight color="#FF4114" size="30" />
              </NavLink>
            </Link>
          )}
        </Right>
      </Wrapper>
    </Main>
  );
};

export default TopNav;
