import styled from 'styled-components';

export const StMain = styled.main`
  text-align: left;
  color: black;
  background-color: #e6e6e6;
  padding: 5px;

  div {
    display: flex;
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

export const StCommDiv = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 10px;
`;

export const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-style: italic;
  }
`;
