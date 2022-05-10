import * as S from './style-footer';
import { useState, useEffect } from 'react';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import { actNextPage, actPrevPage } from '../../state/reducers-actions';
import { useDispatch, useSelector } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();
  const { firstSliceIndex } = useSelector((state) => state.stories);
  const [pageNumber, setPageNumber] = useState('');
  const [checkIndex, setCheckIndex] = useState('');

  const switchPage = () => {
    if (firstSliceIndex > checkIndex) {
      setPageNumber(pageNumber + 1);
      setCheckIndex(firstSliceIndex);
      return;
    }
    if (firstSliceIndex < checkIndex) {
      setPageNumber(pageNumber - 1);
      setCheckIndex(firstSliceIndex);
      return;
    }
    setPageNumber(1);
    setCheckIndex(firstSliceIndex);
  };

  useEffect(() => {
    switchPage();
  }, [firstSliceIndex]);

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <div>{pageNumber}</div>
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </S.ContButttons>
  );
}

export default Footer;
