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
    font-size: 130%;
    margin:0;
    margin-left: 7px;
    align-self:center;
  }

  h2 {
    font-size: 120%;
    margin:0;
  }

  h3 {
    font-size: 115%;
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
  min-width:fit-content;
  min-height:fit-content;
  margin: 2px;
  padding: 4px 6px;
  border: none;
  border-radius: 6px;
  background-color:rgb(96,99,104);
  color: rgb(253,230,167);
  font-size: 135%; 
  text-align: center; 
}

select {
  min-width:fit-content;
  min-height:fit-content;
  font-size: 135%;  
}
`
