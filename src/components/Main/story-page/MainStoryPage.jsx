import { StMain, StHeadline } from './style-story-page.js';
import { useSelector } from 'react-redux';

function MainStoryPage() {
  const storyData = useSelector(state => state.topStory.value);
  const renderAuthor = useSelector(() => storyData.by);
  const renderUrl = useSelector(() => storyData.url);
  const renderTitle = useSelector(() => storyData.title);
  const renderNumComm = useSelector(() => storyData.kids.length);
  const renderScore = useSelector(() => storyData.score);

  return (
    <StMain>
      <StHeadline>
        <h4> author: {renderAuthor} </h4>
        <h2>
          <a target="_blank" rel="noreferrer" href={renderUrl}>
            {renderTitle}
          </a>
        </h2>
      </StHeadline>
      <div>
        <h3>
          {renderNumComm} comments | score: {renderScore}
        </h3>
      </div>
    </StMain>
  );
}

export default MainStoryPage;
