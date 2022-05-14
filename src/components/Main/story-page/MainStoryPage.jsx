import * as S from './style-story-page';
import { useSelector } from 'react-redux';

function Main() {
  const stateTopStories = useSelector((state) => state.stories);
  const { items, isLoading } = stateTopStories;
  let ordinalNumber = stateTopStories.firstPageEl + 1;

  const listStories = items.map(
    ({ by: author, id, url, title, score, kids: comments }) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {ordinalNumber++}) <span>{title}</span>
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
      {isLoading ? <h1>L O A D I N G . . .</h1> : <ul>{listStories}</ul>}
    </S.Main>
  );
}

export default Main;
