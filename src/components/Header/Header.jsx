import React from 'react';
import * as S from './style-header';

function Header() {
  return (
    <S.Header>
      <h1>Hacker News</h1>
      <div>
        <p>story</p>
        <p>comments</p>
      </div>
    </S.Header>
  );
}

export default Header;
