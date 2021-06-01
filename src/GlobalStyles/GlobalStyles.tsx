import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 body {
   margin: 0
 }
  main {
        background-color: #f9f9f9;
        font-family: Inter;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    object-fit: contain;
  }
`
