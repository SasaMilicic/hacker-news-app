import React from 'react';
import { StHeader } from './style-header';

function Header() {
  return (
    <StHeader>
      <h1>Hacker News</h1>
      <div>
        <p>story</p>
        <p>comments</p>
      </div>
    </StHeader>
  );
}

export default Header;
