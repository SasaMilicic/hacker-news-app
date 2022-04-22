import styled from 'styled-components';

export const Main = styled.main`
  text-align: left;
  color: black;
  background-color: #e6e6e6;
  padding: 5px;

  a {
    color: black;
  }

  h4,
  h3,
  h2 {
    margin: 5px 0;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-style: italic;
  }
`;
