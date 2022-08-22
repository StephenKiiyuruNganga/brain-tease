import styled, { createGlobalStyle } from "styled-components"
import bg from "./images/bg.jpg"

export const GlobalStyle = createGlobalStyle`
html {
 height: 100%;
}

body {
 background-image: url(${bg});
 background-cover: fit;
 margin: 0;
 padding: 0;
 display: flex;
 justify-content: center;
}

* {
 box-sizing: border-box;
 font-family: "Syne", sans-serif;
 font-weight: 600;
 font-size: 20px;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    // font-family: "Lora", sans-serif;
    background-image: liner-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    // backgroundclip: text
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-background-clip: text;
    // -moz-text-fill-color: transparent;
    // filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 700;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`
