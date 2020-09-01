import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    overflow: hidden;
    height: 100vh;
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
  font-size: 100%;
  padding: 4px 7px;
  with:fit-content;
  border-radius: 6px;
  height:fit-content;
  display: inline-block;   
  border: none;
  text-align: center;
}
`

