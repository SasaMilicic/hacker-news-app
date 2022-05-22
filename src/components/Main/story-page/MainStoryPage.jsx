import { StMain, StHeadline } from './style-story-page';
import { useSelector } from 'react-redux';
import {
  calcOrdinalNumber,
  selectRequest,
  selectRenderStories,
} from '../../../state/selectors';

function Main() {
  const storiesState = useSelector((state) => state.stories);

  let ordinalNumber = calcOrdinalNumber(storiesState);
  const isLoading = selectRequest(storiesState);
  const stories = selectRenderStories(storiesState);

  const listStories = stories.map(
    ({ by: author, id, url, title, score, kids: comments }) => (
      <li key={id}>
        <StHeadline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {ordinalNumber++}) <span>{title}</span>
            </a>
          </h2>
        </StHeadline>
        <div>
          <h3>
            {comments === undefined ? 0 : comments.length} comments | score:
            {score}
          </h3>
        </div>
      </li>
    )
  );

  return (
    <StMain>
      {isLoading ? <h1>L O A D I N G . . .</h1> : <ul>{listStories}</ul>}
    </StMain>
  );
}

export default Main;
