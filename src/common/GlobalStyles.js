import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: rgba(96,99,104,0.8);
    font-family: sans-serif;
    line-height: 1.4;
    overflow: hidden;
    height: 100vh;
    color: rgb(253,230,167,0.9);
  }

  h1 {
    font-size: 116%;
  }

  h2 {
    font-size: 114%;
  }

  h3 {
    font-size: 112%;
  }


  header {
    height:5vh;
  }

  main {
    overflow-y:scroll;
    height:90vh;
  }

  footer {
    height:5vh;
  }

  button {
  display: inline-block; 
  with:fit-content;
  height:fit-content;
  margin: 2px;
  padding: 2px 4px;
  border: solid 2px rgb(49,42,42);
  border-radius: 6px;
  background-color:rgba(49,42,42,0.75);
  color: rgb(253,230,167);
  font-size: 100%; 
  text-align: center; 
}
`

