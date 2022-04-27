import React from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import { actChangePage } from '../../state/stories/stories-reducer';
import { initialState } from './../../state/stories/fake-init-state';
import { useDispatch } from 'react-redux';

export let fromIndex = 0;
let toIndex = 4;
const numRenderArticles = 4;

function Footer() {
  const dispatch = useDispatch();

  const checkPrevPage = () => fromIndex === 0;
  const checkNextPage = () => {
    return initialState.length - numRenderArticles < fromIndex;
  };

  const nextPage = () => {
    if (checkNextPage()) return;
    fromIndex = fromIndex + numRenderArticles;
    toIndex = toIndex + numRenderArticles;
    dispatch(actChangePage({ fromIndex, toIndex }));
  };

  const prevPage = () => {
    if (checkPrevPage()) return;
    fromIndex = fromIndex - numRenderArticles;
    toIndex = toIndex - numRenderArticles;
    dispatch(actChangePage({ fromIndex, toIndex }));
  };

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => prevPage()} />
      <ButtonNextPage onClick={() => nextPage()} />
    </S.ContButttons>
  );
}

export default Footer;
