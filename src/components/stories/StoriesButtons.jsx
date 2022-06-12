import { useDispatch, useSelector } from 'react-redux';
import { StContButttons } from './style-stories';
import { ReactComponent as ButtonPrevPage } from '../../assets/svg/icons/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from '../../assets/svg/icons/arrow-right-square-fill.svg';
import {
  actNextPage,
  actPrevPage,
} from '../../state/reducers/reducer-stories-ids';
import { calcPageNumber } from '../../state/selectors';

function StoriesButtons() {
  const dispatch = useDispatch();

  // const pageNumber = useSelector(calcPageNumber);

  return (
    <StContButttons>
      {/* {pageNumber === 1 ? (
        <ButtonPrevPage className="off-button" />
      ) : (
        <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      )}

      <div>{pageNumber}</div> */}

      {/* {pageNumber === 17 ? (
        <ButtonNextPage className="off-button" />
      ) : (
        <ButtonNextPage onClick={() => dispatch(actNextPage())} />
      )} */}
      <ButtonPrevPage onClick={() => dispatch(actPrevPage())} />
      <ButtonNextPage onClick={() => dispatch(actNextPage())} />
    </StContButttons>
  );
}

export default StoriesButtons;
