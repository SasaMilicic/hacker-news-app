import React from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';

function Footer() {
  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => console.log('PREV')} />
      <ButtonNextPage onClick={() => console.log('NEXT')} />
    </S.ContButttons>
  );
}

export default Footer;
