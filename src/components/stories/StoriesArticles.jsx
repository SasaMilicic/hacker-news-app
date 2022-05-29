import { StMain, StHeadline, StyError } from './style-stories';
import { useSelector } from 'react-redux';
import {
  calcOrdinalNumber,
  selectRequest,
  selectRenderStories,
} from '../../state/selectors';
import { Link } from 'react-router-dom';

function Main() {
  const storiesState = useSelector((state) => state.stories);

  let ordinalNumber = calcOrdinalNumber(storiesState);
  const isLoading = selectRequest(storiesState);
  const stories = selectRenderStories(storiesState);

  const isStoryEmpty = (element) => {
    const { id, ...storyElements } = element;
    return Object.keys(storyElements).length === 0;
  };

  const listStories = stories.map((story) => {
    if (isStoryEmpty(story)) {
      const { id } = story;
      return (
        <li key={id}>
          <StyError>
            <h4> Some problem with this story... </h4>
            <h2>
              {ordinalNumber++}) The Story with ID '{id}' isn't available.
            </h2>
            <div>
              <h3>Please try latter!</h3>
            </div>
          </StyError>
        </li>
      );
    } else {
      const { by: author, id, url, title, score, kids: comments } = story;
      return (
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
            <Link to={'/comments/' + id}>
              <h3>
                {comments === undefined ? 0 : comments.length} comments | score:
                {score}
              </h3>
            </Link>
          </div>
        </li>
      );
    }
  });

  return (
    <StMain>
      {isLoading ? <h1>L O A D I N G . . .</h1> : <ul>{listStories}</ul>}
    </StMain>
  );
}

export default Main;
