import styled from 'styled-components';

export const StHeader = styled.header`
  font-size: calc(10px + 2vmin);
  color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: black;
  }
`;

export const Error = styled.div`
  height: 20px;
  h4 {
    color: red;
  }
`;
