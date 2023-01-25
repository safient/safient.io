import "../styles/globals.css";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Footer, Navbar, TopBanner } from "../src/components";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing: inherit;
}

  html {
    --darkBlue: #4B4ACF;
    --offWhite: rgb(235, 241, 245);
    --white:#fff;
    --greyLight: #9ba9b4;
    --backgroundDark:#151719;
    --green:rgb(20, 184, 166);
    --pink: rgb(236, 72, 153);
    --lightBlue: #5D5DFF;
    --fontBody: 1.8rem;
    --fontHeadingBolder:5.2rem;
    --fontBodyTiny:1.6rem;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {

  font-family: 'Inter',sans-serif;
   background: var(--backgroundDark);
   font-size: var( --fontBody);
   color:var(--greyLight);
    line-height: 2;
    /* exp */
    background-color: #09040f;
    background-image: linear-gradient(360deg, #09040f, rgba(0, 0, 0, 0.5)), linear-gradient(140deg, #0c86ee, #6a59ff 22%, rgba(239, 69, 179, 0.6) 38%, #03395d 57%, #142f5a 75%, #011c34);

    background-image: linear-gradient(360deg, #09040f, rgba(0, 0, 0, 0.5)), linear-gradient(140deg, #23262d 13%, #034083 31%, #9c468e 65%, #9c468e 71%, #1e1311 82%, #1e1311);
/* exp */
  }
  h2 {
    color: #d9e3ea;
  }
  p{
    color:#9ba9b4;
  }
  ul{
    list-style:none;
  }

`;

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <GlobalStyles />
      <TopBanner />
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <div onClick={() => setIsActive(!isActive)}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
