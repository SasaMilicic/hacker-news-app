import React from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import {
  actChangePage,
  actIncrementIndex,
  actDecrementIndex,
} from '../../state/stories/stories-reducer';
import { useDispatch } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();

  // const checkPrevPage = () => fromIndex === 0;
  // const checkNextPage = () => {
  //   return initialState.length - numRenderArticles < fromIndex;
  // };

  const nextPage = () => {
    dispatch(actIncrementIndex());
    dispatch(actChangePage());
  };

  const prevPage = () => {
    dispatch(actDecrementIndex());
    dispatch(actChangePage());
  };

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={prevPage} />
      <ButtonNextPage onClick={nextPage} />
    </S.ContButttons>
  );
}

export default Footer;
