import React from 'react';
import { StHeader, Error } from './style-header';

function Header() {
  return (
    <StHeader>
      <h1>Hacker News</h1>
      <Error>
        <h5> E R R O R </h5>
      </Error>
      <div>
        <p>story</p>
        <p>comments</p>
      </div>
    </StHeader>
  );
}

export default Header;
