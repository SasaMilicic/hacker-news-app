import styled from 'styled-components';

export const StContButttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;

  .off-button {
    opacity: 0.2;
    cursor: auto;
  }

  svg {
    cursor: pointer;
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
