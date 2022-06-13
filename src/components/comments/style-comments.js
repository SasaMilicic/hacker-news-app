import styled from 'styled-components';

export const StyComments = styled.div`
  h2 {
    border-bottom: 2px solid black;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: black;
      display: flex;
      text-decoration: none;
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-right: 10px;
    }
  }
`;

export const StyCommentError = styled.div`
  color: red;
  border-bottom: 2px solid black;
  padding: 5px;
  opacity: 0.5;
`;
