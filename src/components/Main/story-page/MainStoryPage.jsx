import { StMain, StHeadline } from './style-story-page.js';
import { useSelector } from 'react-redux';

function MainStoryPage() {
  const storiyData = useSelector(state => state.topStory.value);
  const renderAuthor = useSelector(() => storiyData.by);
  const renderUrl = useSelector(() => storiyData.url);
  const renderTitle = useSelector(() => storiyData.title);
  const renderNumComm = useSelector(() => storiyData.kids.length);
  const renderScore = useSelector(() => storiyData.score);

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
