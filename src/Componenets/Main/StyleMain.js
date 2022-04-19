import styled from 'styled-components';

export const StMain = styled.main`
  text-align: left;
  color: black;
  background-color: azure;
  padding: 5px;

  div {
    display: flex;
    column-gap: 20px;
  }
  a {
    color: black;
  }

  h4,
  h3,
  h2 {
    margin: 5px 0;
  }
`;

export const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-style: italic;
  }
`;
