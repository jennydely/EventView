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

:root {
  /* font-colors */
   --yellow-main:rgb(253, 230, 167);

  /* background-colors */
    --lightbrown-main: rgb(153,88,42);
    --lightbrown-70: rgba(153,88,42,0.70);
    --lightbrown-40: rgba(153,88,42,0.40);

    --darkbrown-main: rgb(67,40,24);
    --darkbrown-70: rgba(67,40,24,0.70);
    --darkbrown-40: rgba(67,40,24,0.40);

    --yellow-main: rgb(248,149,17);
    --yellow-46: rgba(248,149,17,0.46);
    --yellow-16: rgba(248,149,17,0.16);

    --lightgrey-main: rgb(96,99,104);
    --lightgrey-70: rgb(96,99,104,0.70);
    --lightgrey-40: rgb(96,99,104,0.40);

    --darkgrey-main: rgb(49,42,42);
    --darkgrey-75: rgba(49,42,42,0.75);
    --darkgrey-45: rgba(49,42,42,0.45);

    --red-main: rgba(246, 71, 71);

    --darkred-main:rgb(111, 29, 27);
    --darkred-75:rgba(111, 29, 27, 0.75);

    --border-darkgrey: 1px solid var(--darkgrey-75);
}
`
