import React from 'react';
import { FireworkSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

function LoadingPage({ size }) {
  return (
    <StyleLoading>
      <FireworkSpinner size={size} color="#686769" />
    </StyleLoading>
  );
}

export default LoadingPage;

const StyleLoading = styled.div`
  /* margin-top: 180px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
