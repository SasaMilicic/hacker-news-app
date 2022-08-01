import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as ButtonPrevPage } from '../../assets/svg/icons/arrow-left-square-fill.svg';
import { ReactComponent as ButtonNextPage } from '../../assets/svg/icons/arrow-right-square-fill.svg';
import {
  actNextPage,
  actPrevPage,
} from '../../state/reducers/reducer-stories-ids';
import { calcPageNumber } from '../../state/selectors';
import { actRestartStoriesState } from '../../state/reducers/reducer-stories';

function StoriesButtons() {
  const dispatch = useDispatch();

  const pageNumber = useSelector(calcPageNumber);

  const toNextPage = () => {
    dispatch(actRestartStoriesState());
    dispatch(actNextPage());
    window.scrollTo(0, 0);
  };

  const toPrevPage = () => {
    dispatch(actRestartStoriesState());
    dispatch(actPrevPage());
    window.scrollTo(0, 0);
  };

  return (
    <StContButttons>
      {pageNumber === 1 ? (
        <ButtonPrevPage className="off-button" />
      ) : (
        <ButtonPrevPage onClick={toPrevPage} />
      )}

      <div>{pageNumber}</div>

      {pageNumber === 17 ? (
        <ButtonNextPage className="off-button" />
      ) : (
        <ButtonNextPage onClick={toNextPage} />
      )}
    </StContButttons>
  );
}

export default StoriesButtons;

const StContButttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;

  .off-button {
    opacity: 0.2;
    cursor: auto;
  }

  svg {
    cursor: pointer;
  }
`;
