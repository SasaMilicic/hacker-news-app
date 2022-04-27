import * as S from './style-story-page';
import { useSelector } from 'react-redux';

function Main() {
  const arrTopStories = useSelector(state => state.topStories);

  const listStories = arrTopStories.map(
    ({ by: author, id, url, title, score, kids: comments }, index) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {index + 1}) <span>{title}</span>
            </a>
          </h2>
        </S.Headline>
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
    <S.Main>
      <ul>{listStories}</ul>
    </S.Main>
  );
}

export default Main;
