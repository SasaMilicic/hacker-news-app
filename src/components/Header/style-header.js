import styled from 'styled-components';

export const StHeader = styled.header`
  font-size: calc(10px + 2vmin);
  color: black;
  padding: 10px;

  h1 {
    margin: 0px;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Error = styled.div`
  height: 20px;
  h5 {
    color: red;
  }
`;
