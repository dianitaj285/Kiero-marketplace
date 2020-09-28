import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import {
  MontserratRegular,
  MontserratLight,
  MontserratMedium,
} from "./fonts/Montserrat";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight}) format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: 400;
  }
  
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('truetype');
    font-weight: 500;
  }


  * {
    font-family: 'Montserrat';
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    font-family: 'Montserrat';
    height: 100%;
    font-size: 18px;
  }
  
 `;
