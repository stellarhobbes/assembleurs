import React from "react";
import styled from "styled-components";

const SubtitleH2 = styled.h2`
  color: ${(props) => (props.color === "white" ? "#fff" : "#252D80")};
`;

const BulletPoint = styled.span`
  color: ${(props) => (props.color === "red" ? "#FF4114" : "#33cbeb")};
`;

const Subtitle = (props) => {
  return (
    <SubtitleH2 color={props.titleColor}>
      <BulletPoint color={props.bulletColor}>● </BulletPoint>
      {props.subtitleText}
    </SubtitleH2>
  );
};

export default Subtitle;
