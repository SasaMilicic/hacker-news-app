import styled from 'styled-components';

export const StContButttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

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

export const StyHeadline = styled.div`
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

export const StyCommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .off-button {
    opacity: 0.5;
    color: white;
  }

  button {
    margin: 5px 0;

    background-color: #949494;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 600;

    a {
      color: white;
    }
  }

  p {
    font-weight: 600;
    font-size: 18px;
    display: flex;
  }
`;
