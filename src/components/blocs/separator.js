import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

const Wrapper = styled.section`
    width: 100%;
    border-bottom: 0.1em solid #E0F3F9;
`

const Separator = () => {
    return(
        <Wrapper>
            <GlobalStyle/>
        </Wrapper>
    );
};

export default Separator;