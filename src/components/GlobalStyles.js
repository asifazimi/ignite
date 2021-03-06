import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *, ::before, ::after {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }

 html {
     &::-webkit-scrollbar {
         width: 0.5rem;
     }

     &::-webkit-scrollbar-thumb {
         background-color: darkgrey;
     }

     &::-webkit-scrollbar-track {
    background-color: white;
  }
 }

 body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
 }

 h2 {
    padding: 2rem 0rem;
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 1.7em;
 }

 h3 {
   font-size: 1em;
 }

 h4 {
    padding:  1rem;
    color: #333;
    font-size: 1.1em;
    line-height: 150%;
  }
  
  p {
    font-size: 1em;
    line-height: 200%;
    color: #696969;
  }

  a {
    text-decoration: none;
    color: #696969;
  }

  img {
    display: block;
  }

  input {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }



`;

export default GlobalStyles;
