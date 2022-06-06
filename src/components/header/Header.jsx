import React from 'react';
import { useSelector } from 'react-redux';
import { StHeader, Error } from './style-header';
import { selectErrorStories } from '../../state/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeButton } from '../../assets/svg/icons/home.svg';
import { useDispatch } from 'react-redux';
import { actRestartState } from '../../state/reducers-actions';

function Header() {
  const dispatch = useDispatch();
  const errStoryMessage = useSelector(selectErrorStories);

  return (
    <StHeader>
      <Link onClick={dispatch(actRestartState)} to="/">
        <HomeButton />
        <h1> Hacker News - stories </h1>
      </Link>

      <Error>{errStoryMessage && <h4> {errStoryMessage}</h4>}</Error>
    </StHeader>
  );
}

export default Header;
