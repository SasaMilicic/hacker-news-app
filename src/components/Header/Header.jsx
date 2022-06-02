import React from 'react';
import { useSelector } from 'react-redux';
import { StHeader, Error } from './style-header';
import { selectErrorMessage } from '../../state/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeButton } from '../svg/home.svg';
import { useDispatch } from 'react-redux';
import { actRestartState } from '../../state/reducers-actions';

function Header() {
  const dispatch = useDispatch();
  const errorMessage = selectErrorMessage(
    useSelector((state) => state.stories)
  );

  return (
    <StHeader>
      <Link onClick={dispatch(actRestartState)} to="/">
        <HomeButton />
        <h1> Hacker News - stories </h1>
      </Link>

      <Error>{errorMessage && <h4> {errorMessage}</h4>}</Error>
    </StHeader>
  );
}

export default Header;
