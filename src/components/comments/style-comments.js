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

export const StyComment = styled.div`
  border-bottom: 2px solid black;
  padding: 5px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 15px;
      font-style: italic;
    }

    span {
      margin-left: 10px;
    }
  }
`;

export const StyReplies = styled.div`
  margin-top: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  article {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .off-button {
    opacity: 0.5;
  }
`;

export const StyReply = styled.div`
  background-color: grey;
  margin-left: 20px;
  padding: 5px;
  border-radius: 10px;
  display: flex;

  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 14px;
  }

  div {
    width: 100%;
    justify-content: space-between;
  }

  .style-time {
    font-style: italic;
  }
`;
