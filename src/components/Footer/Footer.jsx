import React from 'react';
import { StPageBtns } from './style-footer';
import { ReactComponent as PrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as NextPage } from './svg/arrow-right-square-fill.svg';

function Footer() {
  return (
    <StPageBtns>
      <button>
        <PrevPage />
      </button>

      <button>
        <NextPage />
      </button>
    </StPageBtns>
  );
}

export default Footer;
