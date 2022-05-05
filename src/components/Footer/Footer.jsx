import React from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import {
  actNextPage,
  actPrevPage,
} from '../../state/stories/fake-stories-actions';
import { useDispatch } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </S.ContButttons>
  );
}

export default Footer;
