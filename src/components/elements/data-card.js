import React from "react";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DataImage = styled.img`
  width: 250px;
`;
const Subtitle = styled.h3`
    text-transform: none;
    letter-spacing: 0.5px;
`;
const Content = styled.p`
  margin: 5px 0px;
  text-align: center;
  width: 85%;
`;
const SubContent = styled.p`
  margin: 5px 0px;
  text-align: center;
  font-size: 0.9em;
  font-weight: 400;
  width: 75%;
`;
const Source = styled.p`
  margin: 5px 0px;
  color: #ff4114;
  font-size: 0.8em;
  font-weight: 300;
`;

const DataCard = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <DataImage src={props.imageUrl} alt={props.imageAlt}></DataImage>
      {props.subtitleText && <Subtitle>{props.subtitleText}</Subtitle>}
      {props.contentText && <Content>{props.contentText}</Content>}
      {props.subcontentText && <SubContent>{props.subcontentText}</SubContent>}
      {props.sourceText && <Source>{props.sourceText}</Source>}
    </Wrapper>
  );
};

export default DataCard;
