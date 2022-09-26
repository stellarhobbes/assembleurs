import React from "react";
import styled from "styled-components";

import Button from "../elements/button";
import Subtitle from "../elements/subtitle";

const Main = styled.div`
`;

const SimpleBloc = (props) => {
  return (
    <Main>
      <Subtitle bulletColor={props.bulletColor} subtitleText={props.subtitleText} />
      <p>{props.contentText}</p>
      {props.buttonText && (
        <Button buttonText={props.buttonText} url={props.url} />
      )}
    </Main>
  );
};

export default SimpleBloc;
