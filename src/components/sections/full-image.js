import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const Main = styled.div`
  padding: 50px 0px;
`;
const Wrapper = styled.section``;
const Image = styled.img`
    width: 100%;
`;

const FullImage = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Image src={props.imageUrl} alt={props.imageAlt}></Image>
      </Wrapper>
    </Main>
  );
};

export default FullImage;
