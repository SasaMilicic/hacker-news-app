import React from 'react';
import { FireworkSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

function Loading() {
  return (
    <StyleLoading>
      <FireworkSpinner size={100} color="#686769" />
    </StyleLoading>
  );
}

export default Loading;

const StyleLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
