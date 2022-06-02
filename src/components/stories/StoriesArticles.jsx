import { StyHeadline, StyError, StyCommentBox } from './style-stories';
import LoadingPage from '../LoadingPage';
import { ReactComponent as ScoreIcon } from '../svg/hand-thumbs-up-fill.svg';
import { useSelector } from 'react-redux';
import {
  calcOrdinalNumber,
  selectStoryRequest,
  selectRenderStories,
  convertTime,
} from '../../state/selectors';
import { Link } from 'react-router-dom';

function Main() {
  const storiesState = useSelector((state) => state.stories);

  let ordinalNumber = calcOrdinalNumber(storiesState);
  const isLoading = selectStoryRequest(storiesState);
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
      const { by: author, id, url, time, title, score, kids: comments } = story;
      return (
        <li key={id}>
          <StyHeadline>
            <h4>
              <div>author: {author}</div>
              <div>{convertTime(time)}</div>
            </h4>
            <h2>
              <a target="_blank" rel="noreferrer" href={url}>
                {ordinalNumber++}) <span>{title}</span>
              </a>
            </h2>
          </StyHeadline>
          <StyCommentBox>
            {comments === undefined ? (
              <button className="off-button"> 0 comments </button>
            ) : (
              <button>
                <Link to={'/comments/' + id}>{comments.length} comments</Link>
              </button>
            )}
            <p>
              | <ScoreIcon /> {score}
            </p>
          </StyCommentBox>
        </li>
      );
    }
  });

  return <div>{isLoading ? <LoadingPage /> : <ul>{listStories}</ul>}</div>;
}

export default Main;
