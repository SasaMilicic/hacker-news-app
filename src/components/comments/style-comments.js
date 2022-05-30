import styled from 'styled-components';

export const StyComments = styled.div`
  h2 {
    border-bottom: 2px solid black;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 10px;
    }
  }
`;

export const StyComment = styled.div`
  border-bottom: 2px solid black;
  padding: 5px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 10px;
    }
  }
`;

export const StyReply = styled.div`
  font-size: 15px;
  margin-top: 5px;
  font-weight: bold;
`;
