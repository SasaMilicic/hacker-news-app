import React from 'react';
import BtnPrevPage from './ButtonsPage/Buttons/BtnPrevPage';
import BtnNextPage from './ButtonsPage/Buttons/BtnNextPage';
import { StPageBtns } from './ButtonsPage/StylePageButtons';

function Footer() {
  return (
    <StPageBtns>
      <BtnPrevPage />
      <BtnNextPage />
    </StPageBtns>
  );
}

export default Footer;
