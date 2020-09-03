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
    font-size: 118%;
    margin:0;
  }

  h2 {
    font-size: 114%;
    margin:0;
  }

  h3 {
    font-size: 112%;
    margin:0;
  }
  header {
    display:flex;
    justify-content:space-between;
    height:5vh;
  }

  main {
    margin:7px;
    overflow-y:scroll;
    height:87vh;
  }

  footer {
    display:flex;
    justify-content:center;
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
  background-color:rgb(96,99,104);
  color: rgb(253,230,167);
  font-size: 100%; 
  text-align: center; 
}
`

