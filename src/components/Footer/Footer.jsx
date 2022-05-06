import React, { useEffect } from 'react';
import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import {
  actNextPage,
  actPrevPage,
} from '../../state/stories_fake/fake-stories-actions';
import { useDispatch } from 'react-redux';
import { fetchStoriesData } from '../../state/fetch-fun';

function Footer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoriesData());
  }, [dispatch]);

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </S.ContButttons>
  );
}

export default Footer;
