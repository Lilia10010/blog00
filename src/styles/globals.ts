import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #1D63DC;
  --color-link: #2793F7;
  --color-link-hover: #1D63DC;
  --background: #F4F3F6;
  --background-container: #fff;
  --text-color-white: #F8FBFB;
  --text-color-primary: #2C3136;
  --font-size-xxs: 0.625rem; //10px
  --font-size-xs: 0.750rem; //12px
  --font-size-sm: 0.875rem; //14px
  --font-size-md: 1rem;     //16px
  --font-size-lg: 1.125rem; //18px
  --font-size-xl: 1.250rem; //20px
  --font-size-2xl: 1.5rem;  //24px
  --gray-10: #8CA0B3;
  --gray-50: #D2DFE6;
  --gray-200: #607B99;
  --gray-300: #56616E;
  --gray-350: #52636C;
  --gray-500: #738192;
  --gray-550: #878688;
  --color-danger: #d93e4e;
  --color-success: #66B734;
  --border-radius-default: 0.5rem;
  --border-radius-input: 0.5rem;
  --padding-container: 1rem;
  --box-shadow-container: 0px 2px 12px rgba(96, 123, 153, 0.15);
  --transition: 0.3s;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
@media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}
@media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
}
body, html {
    background-color: var(--background);
    font-family: 'Poppins', sans-serif;
   /*   line-height: 1.5; */
    scroll-behavior: smooth;
    scrollbar-color: var(--color-primary) #fff;
    -webkit-font-smoothing: antialiased;
}
    *::-webkit-scrollbar-track {
      background-color: transparent;
      position: absolute;
      opacity: 0.7;
    }
    *::-webkit-scrollbar {
      width: 5px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--color-primary);
    }
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
}
h1, h2, h3, h4, h5, h6, p,a, div, strong, button, input, span {
    ::selection {
            background: var(--color-primary);
            color: #000;
        }
}
a{
    text-decoration: none;
}
  button {
    cursor: pointer;
  }
  [disabled] {
  cursor: not-allowed;
  }
}`;
