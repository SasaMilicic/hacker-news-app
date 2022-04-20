import React from 'react';
import { StPageBtns } from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';

function Footer() {
  return (
    <StPageBtns>
      <ButtonPrevPage onClick={() => console.log('PREV')} />
      <ButtonNextPage onClick={() => console.log('NEXT')} />
    </StPageBtns>
  );
}

export default Footer;
