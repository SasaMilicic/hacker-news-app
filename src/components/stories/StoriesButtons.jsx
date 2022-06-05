import { useDispatch, useSelector } from 'react-redux';
import { StContButttons } from './style-stories';
import { ReactComponent as ButtonPrevPage } from '../svg/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from '../svg/arrow-right-square-fill.svg';
import { actNextPage, actPrevPage } from '../../state/reducers-actions';
import { calcPageNumber } from '../../state/selectors';

function Footer() {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  const pageNumber = calcPageNumber(stories);

  return (
    <StContButttons>
      {pageNumber === 1 ? (
        <ButtonPrevPage className="off-button" />
      ) : (
        <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      )}

      <div>{pageNumber}</div>

      {pageNumber === 17 ? (
        <ButtonNextPage className="off-button" />
      ) : (
        <ButtonNextPage onClick={() => dispatch(actNextPage())} />
      )}
    </StContButttons>
  );
}

export default Footer;
