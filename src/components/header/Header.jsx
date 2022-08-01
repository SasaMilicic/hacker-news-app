import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeButton } from '../../assets/svg/icons/home.svg';
import { actHomePage } from '../../state/reducers/reducer-stories-ids';
import { selectStoriesIds } from './../../state/selectors';

function Header() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  const storiesIds = useSelector(selectStoriesIds);

  const toggleHeadline = path.startsWith('/comments') ? 'comments' : 'stories';

  return (
    <StyleHeader>
      <Link onClick={() => dispatch(actHomePage())} to="/">
        <HomeButton />
        <h1>Hacker News - {toggleHeadline}</h1>
      </Link>
      {storiesIds.error && (
        <Error>
          <h4>{storiesIds.error}</h4>
        </Error>
      )}
    </StyleHeader>
  );
}

export default Header;

const StyleHeader = styled.header`
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

const Error = styled.div`
  height: 20px;
  h4 {
    color: red;
  }
`;
