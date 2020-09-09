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

  #root {
  display:grid;
  grid-template-rows: 58px auto 58px;
  max-width: 600px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 112.5%;
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
    grid-row: 1;
    display:flex;
    justify-content:space-between;
  }

  main {
    grid-row: 2;
    margin:7px;
    overflow-y:scroll;
   }

  footer {
    grid-row: 3;
    position:sticky;
    display:flex;
    justify-content:center;
  }

  button {
  display: inline-block; 
  min-width:50px;
  min-height:50px;
  min-width:fit-content;
  height:fit-content;
  margin: 2px;
  padding: 4px 6px;
  border: none;
  border-radius: 6px;
  background-color:rgb(96,99,104);
  color: rgb(253,230,167);
  font-size: 140%; 
  text-align: center; 
}

select {
  min-width:50px;
  min-height:50px;
  min-width:fit-content;
  height:fit-content;
  font-size: 140%; 
}
`
