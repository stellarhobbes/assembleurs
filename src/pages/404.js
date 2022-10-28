import * as React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";

import Button from "../components/elements/button";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 48,
  maxWidth: 600,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#FF4114",
  padding: 4,
  backgroundColor: "#FFE0DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const CustomButton = styled(Button)`

`


const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <h1 style={headingStyles}>Page introuvable</h1>
      <p style={paragraphStyles}>
        Désolé 😔, la page que vous cherchez n'existe pas.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Retournez à la <code style={codeStyles}>home</code> pour continuer à naviguer.
            <br />
          </>
        ) : null}
        <br />
        <CustomButton
          url="/"
          buttonText="Retour"
        />
      </p>
    </main>
  );
};

export default NotFoundPage;
export const Head = () => <title>Page introuvable</title>;