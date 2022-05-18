import { useDispatch, useSelector } from 'react-redux';
import { StContButttons } from './style-footer';
import { ReactComponent as ButtonPrevPage } from './svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from './svg/arrow-right-square-fill.svg';
import { actNextPage, actPrevPage } from '../../state/reducers-actions';
import { calcPageNumber } from './../../state/selectors';

function Footer() {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  const pageNumber = calcPageNumber(stories);

  return (
    <StContButttons>
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <div>{pageNumber}</div>
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </StContButttons>
  );
}

export default Footer;
