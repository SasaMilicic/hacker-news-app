import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const StApp = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

body{
  background-color: rgb(196, 196, 196);
  max-width: 80%;
  margin: 0 auto;
}

main{
    border-radius: 20px;
 } 
}
`;
