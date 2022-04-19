import React from 'react';
import { StPageBtns } from './style-footer';
import BtnPrevPage from '../svg/BtnIconPrevPage';
import BtnNextPage from '../svg/BtnIconNextPage';

function Footer() {
  return (
    <StPageBtns>
      <BtnPrevPage />
      <BtnNextPage />
    </StPageBtns>
  );
}

export default Footer;
