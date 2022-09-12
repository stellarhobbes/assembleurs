import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

/*Components*/

/*Styles*/
const Main = styled.div``
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const NumberIcon = styled.img`
    width: 40px;
`
const Subtitle = styled.h2`
    margin-top: 10px;
    text-transform: none;
    letter-spacing: 0.5px;
    font-weight: 600;
`


const SubtitleCenter = (props) => {
    return(
        <Main>
            <GlobalStyle/>
            <Wrapper>
                <NumberIcon src={props.iconUrl} alt={props.iconAlt}></NumberIcon>
                <Subtitle>{props.children}</Subtitle>
            </Wrapper>
        </Main>
    );
};

export default SubtitleCenter;