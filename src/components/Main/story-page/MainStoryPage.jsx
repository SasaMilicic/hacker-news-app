import * as S from './style-story-page';
import { useSelector } from 'react-redux';

function Main() {
  const stateTopStories = useSelector(state => state.stories);

  const arrTopStories = stateTopStories.items;

  const listStories = arrTopStories.map(
    ({ by: author, id, url, title, score, kids: comments }, i) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {i + 1}) <span>{title}</span>
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

  const renderStories = () => {
    if (stateTopStories.loading === true) return <h1>L O A D I N G . . .</h1>;

    return <ul>{listStories}</ul>;
  };

  return <S.Main>{renderStories()}</S.Main>;
}

export default Main;
