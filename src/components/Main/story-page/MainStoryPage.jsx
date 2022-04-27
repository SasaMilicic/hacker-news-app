import * as S from './style-story-page';
import { useSelector } from 'react-redux';
import { fromIndex } from './../../Footer/Footer';

function Main() {
  const arrTopStories = useSelector(state => state.topStories);

  const listStories = arrTopStories.map(
    ({ by: author, id, url, title, score, kids: comments }, i) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {fromIndex + i + 1}) <span>{title}</span>{' '}
              {/*<== {fromIndex + i + 1} - Currently I haven't better solution, but in real API I have.*/}
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
