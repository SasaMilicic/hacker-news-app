import React from 'react';
import { useSelector } from 'react-redux';
import { StHeader, Error } from './style-header';
import { selectErrorMessage } from '../../state/selectors';
import { Link } from 'react-router-dom';

function Header() {
  const errorMessage = selectErrorMessage(
    useSelector((state) => state.stories)
  );

  return (
    <StHeader>
      <h1>Hacker News</h1>
      <Error>{errorMessage && <h5> {errorMessage}</h5>}</Error>
      <nav>
        <Link to="/stories"> stories </Link>
        <Link to="/comments"> comments </Link>
      </nav>
    </StHeader>
  );
}

export default Header;
