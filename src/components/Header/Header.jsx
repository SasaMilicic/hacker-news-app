import React from 'react';
import { useSelector } from 'react-redux';
import { StHeader, Error } from './style-header';
import { selectErrorMessage } from '../../state/selectors';

function Header() {
  const errorMessage = selectErrorMessage(
    useSelector((state) => state.stories)
  );

  return (
    <StHeader>
      <h1>Hacker News</h1>
      <Error>{errorMessage && <h5> {errorMessage}</h5>}</Error>
      <div>
        <p>story</p>
        <p>comments</p>
      </div>
    </StHeader>
  );
}

export default Header;
