import React from 'react';
// import { useSelector } from 'react-redux';

// import { selectErrorStories } from '../../state/selectors';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeButton } from '../../assets/svg/icons/home.svg';
import { useDispatch } from 'react-redux';
// import { actRestartState } from '../../state/reducers/reply-reducer';

import styled from 'styled-components';

function Header() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  // const errStoryMessage = useSelector(selectErrorStories);
  const toggleHeadline = path.startsWith('/comments') ? 'comments' : 'stories';

  return (
    <StyleHeader>
      <Link /* onClick={dispatch(actRestartState)} */ to="/">
        <HomeButton />
        <h1>Hacker News - {toggleHeadline}</h1>
      </Link>

      {/* <Error>{errStoryMessage && <h4> {errStoryMessage}</h4>}</Error> */}
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
