import * as S from './style-story-page';
import { useSelector } from 'react-redux';

function Main() {
  const state = useSelector(state => state.topStory);

  const listStories = state.map((story, i) => (
    <li key={i}>
      <S.Headline>
        <h4>author: {story.by} </h4>
        <h2>
          <a target="_blank" rel="noreferrer" href={story.url}>
            {i + 1}) <span>{story.title}</span>
          </a>
        </h2>
      </S.Headline>
      <div>
        <h3>
          {story.kids === undefined ? 0 : story.kids.length} comments | score:
          {story.score}
        </h3>
      </div>
    </li>
  ));

  return (
    <S.Main>
      <ul>{listStories}</ul>
    </S.Main>
  );
}

export default Main;
