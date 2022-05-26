import styled from 'styled-components';

export const StMain = styled.main`
  text-align: left;
  color: black;
  background-color: #e6e6e6;
  padding: 5px;

  a {
    color: black;
    text-decoration: none;
  }

  li {
    border-bottom: solid 2px black;
  }

  ul {
    padding: 10px;
    list-style-type: none;
  }

  h1 {
    text-align: center;
  }

  h4,
  h3,
  h2 {
    margin: 5px 0;
  }
  span {
    text-decoration: underline;
  }
`;

export const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-style: italic;
  }
`;

export const StyError = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  h4 {
    font-style: italic;
  }
`;
