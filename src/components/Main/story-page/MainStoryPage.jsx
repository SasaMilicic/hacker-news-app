import * as S from './style-story-page';
import { useSelector } from 'react-redux';

function Main() {
  const stateTopStories = useSelector(state => state.topStories);
  const arrTopStories = stateTopStories.items;
  let numArtical = stateTopStories.pageIndex + 1;

  const listStories = arrTopStories.map(
    ({ by: author, id, url, title, score, kids: comments }) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {numArtical++}) <span>{title}</span>
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
