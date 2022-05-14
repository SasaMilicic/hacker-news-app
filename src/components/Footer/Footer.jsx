import * as S from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import { actNextPage, actPrevPage } from '../../state/reducers-actions';
import { useDispatch } from 'react-redux';

function Footer({ pageNumber }) {
  const dispatch = useDispatch();

  return (
    <S.ContButttons>
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <div>{pageNumber}</div>
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </S.ContButttons>
  );
}

export default Footer;
