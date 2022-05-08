import * as S from './style-story-page';
import { useSelector, useDispatch } from 'react-redux';
import { actStartPage } from './../../../state/reducers/stories-reducer';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();

  const stateTopStories = useSelector(state => state.stories);
  const arrTopStories = stateTopStories.renderItems;
  const isLoading = stateTopStories.loading;
  let numArticle = stateTopStories.pageIndex + 1;

  useEffect(() => {
    dispatch(actStartPage());
  }, [isLoading]);

  const listStories = arrTopStories.map(
    ({ by: author, id, url, title, score, kids: comments }) => (
      <li key={id}>
        <S.Headline>
          <h4>author: {author} </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={url}>
              {numArticle++}) <span>{title}</span>
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
    if (isLoading) return <h1>L O A D I N G . . .</h1>;
    return <ul>{listStories}</ul>;
  };

  return <S.Main>{renderStories()}</S.Main>;
}

export default Main;
