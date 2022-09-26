import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Main = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
`;

const Wrapper = styled.section`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3em;
  align-items: center;
  padding: 20px 0px;
  @media (max-width: 960px) {
    display: flex;
    width: 90%;
    grid-gap: 0em;
  }
`;

const Subtitle = styled.h4`
  text-transform: initial;
  margin: 15px 0px 20px 0px;
`;

const Icon = styled.img`
  width: 75px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ContentBloc = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <Wrapper>
        <GlobalStyle />
        <div>
          {props.titleText && <Subtitle>{props.titleText}</Subtitle>}
          {props.imageUrl && (
            <Icon src={props.imageUrl} alt={props.imageAlt}></Icon>
          )}
        </div>
        <div>
          <p>{props.contentText}</p>
        </div>
      </Wrapper>
    </Main>
  );
};

export default ContentBloc;
