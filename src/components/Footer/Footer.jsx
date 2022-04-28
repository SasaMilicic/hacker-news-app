import React from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import { actNextPage, actPrevPage } from '../../state/stories/stories-reducer';
import { useDispatch } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(actNextPage());
  };

  const prevPage = () => {
    dispatch(actPrevPage());
  };

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={prevPage} />
      <ButtonNextPage onClick={nextPage} />
    </S.ContButttons>
  );
}

export default Footer;
