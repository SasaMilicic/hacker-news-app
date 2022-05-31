import React from 'react';
import { useSelector } from 'react-redux';
import { StHeader, Error } from './style-header';
import { selectErrorMessage } from '../../state/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeButton } from '../svg/home.svg';

function Header() {
  const errorMessage = selectErrorMessage(
    useSelector((state) => state.stories)
  );

  return (
    <StHeader>
      <Link to="/">
        <HomeButton />
        <h1> Hacker News - stories </h1>
      </Link>

      <Error>{errorMessage && <h4> {errorMessage}</h4>}</Error>
    </StHeader>
  );
}

export default Header;
